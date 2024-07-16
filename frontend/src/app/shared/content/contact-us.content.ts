import Phone from "@/assets/images/contact-us/phone.svg";
import Email from "@/assets/images/contact-us/email.svg";
import Web from "@/assets/images/contact-us/web.svg";
import Location from "@/assets/images/contact-us/location.svg";
import Alarm from "@/assets/images/contact-us/alaram.svg";
import Facebook from "@/assets/images/contact-us/facebook.svg";
import Twitter from "@/assets/images/contact-us/twitter.svg";
import Instagram from "@/assets/images/contact-us/instagram.svg";
import LinkedIn from "@/assets/images/contact-us/linked-in.svg";
import Whatsapp from "@/assets/images/contact-us/whatsapp.svg";
import YouTubeIcon from "@/assets/images/contact-us/youtube.svg";

export const CONTACT_US_CONTENT = {
  consultancyName: "Global Gate Education Consultancy",
  info: [
    {
      key: "phoneNumber",
      icon: Phone
    },
    {
      key: "email",
      icon: Email
    },
    {
      key: "website",
      icon: Web
    },
    {
      key: "address",
      icon: Location
    },
    {
      key: "workingHours",
      icon: Alarm
    },
    {
      key: "whatsappContactNumber",
      icon: Whatsapp
    }
  ],
  socialMedia: {
    followUsLabel: "Follow us on:",
    mediaLinks: [
      {
        key: "facebookUrl",
        icon: Facebook
      },
      {
        key: "twitterUrl",
        icon: Twitter
      },
      {
        key: "instagramUrl",
        icon: Instagram
      },
      {
        key: "linkedInUrl",
        icon: LinkedIn
      },
      {
        key: "youtubeUrl",
        icon: YouTubeIcon,
      }
    ]
  }

}
