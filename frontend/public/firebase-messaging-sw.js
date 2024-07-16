// Scripts for firebase and firebase messaging

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// eslint-disable-next-line no-undef
importScripts("swEnv.js");

function getUrl(data){
    switch (data?.type){
        case "examBooking":
            return `/bookings?bookingId=${data?.id}`
        case "packageBooking":
            return `/menu/mock-test/history?packageBookingId=${data?.id}`
        case "user":
            break
        default:
    }
}
if(self){
    self.addEventListener('notificationclick', function (event) {
        event.waitUntil(
            clients.matchAll({type: 'window'}).then( windowClients => {

                const url = self.location.origin + getUrl(event.notification.data.FCM_MSG.data)
                // Check if there is already a window/tab open with the target URL
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    // If so, just focus it.
                    if (client.url === url && 'focus' in client) {
                        return client.focus();
                    }
                }
                // If not, then open the target URL in a new window/tab.
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
        );
    })
    // Initialize the Firebase app in the service worker by passing the generated config
    var firebaseConfig = {
        apiKey: swEnv.VITE_APP_FIREBASE_API_KEY,
        authDomain: swEnv.VITE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: swEnv.VITE_APP_FIREBASE_PROJECT_ID,
        storageBucket: swEnv.VITE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: swEnv.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: swEnv.VITE_APP_FIREBASE_MESSAGING_APP_ID
    };


// Retrieve firebase messaging
    if(firebase?.messaging?.isSupported()){
        firebase?.initializeApp(firebaseConfig);
        const messaging = firebase?.messaging();

        messaging?.onBackgroundMessage(function(payload) {

            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
            };

            self.registration.showNotification(notificationTitle,
                notificationOptions);
        });
    }
}




