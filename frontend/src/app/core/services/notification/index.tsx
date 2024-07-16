import React, {useEffect} from "react";
import {API_PATH} from "@/app/core/services/api-path";
import {initializeApp} from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {addDeviceNotification} from "@/app/core/services/api/notification/notification.service";
import {Messaging} from "@firebase/messaging";

export function NotificationProvider({children}: React.PropsWithChildren) {
    const [messaging, setMessaging] = React.useState<Messaging>();
    const firebaseConfig = {
        apiKey: API_PATH.config.fireBase.apiKey,
        authDomain: API_PATH.config.fireBase.authDomain,
        projectId: API_PATH.config.fireBase.projectId,
        storageBucket: API_PATH.config.fireBase.storageBucket,
        messagingSenderId: API_PATH.config.fireBase.messagingSenderId,
        appId: API_PATH.config.fireBase.appId
    };
    const firebaseApp = initializeApp(firebaseConfig);

    useEffect(() => {
        if(window.location.protocol === "https" || window.location.hostname === "localhost") {
            const d = getMessaging(firebaseApp);
            setMessaging(d)
        }
    }, [firebaseApp]);

    useEffect(() => {
        if((window.location.protocol === "https" || window.location.hostname === "localhost") &&  messaging){
            Notification?.requestPermission().then(function (response) {
                console.log('Notification permission granted.', response);
                // Token is received here if permission is granted
                return getToken(messaging, {vapidKey: "BNaNfoQhR3F-mEuXUb8lVZWUhHU53c85ZEdBUC4YDizHcm6bPls1-P0pELGA_t-IzunXBwfWGQll8sIEg5-NeA4"});
            }).then(function (token) {
                const storageToken = localStorage.getItem("fcm-gecc-token")
                // Send this token to your server to associate it with the user
                // Handle foreground notifications
                if(!storageToken){
                    localStorage.setItem("fcm-gecc-token", token)
                    addDeviceNotification({
                        deviceType: "web",
                        deviceToken: storageToken ?? token
                    })
                }
                onMessage(messaging, (payload) => {
                    console.log('Foreground Message:', payload);
                    // Handle the notification or update your UI
                });

            }).catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
        }
    }, [messaging]);

    return (
        <>{children}</>
    )
}

