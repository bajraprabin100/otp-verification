import Profile from "src/assets/icons/profile.svg?react";
import Packages from "src/assets/icons/packages.svg?react";
import Lock from "src/assets/icons/lock.svg?react";
import FAQ from "src/assets/icons/faqs.svg?react";
import BLOGS from "src/assets/icons/blogs.svg?react";
import CONTACTUS from "src/assets/icons/contact-us.svg?react";

export const SidebarData = [
  {
    title: "Account and Profile",
    menuList: [{
      label: "Profile",
      icon: Profile,
      url: "/menu/profile"
    },
      {
        label: "Mock Test",
        icon: Packages,
        url: "/menu/mock-test"
      }
    ]
  },
  {
    title: "Security",
    menuList: [{
      label: "Change Password",
      icon: Lock,
      url: "/menu/change-password"
    }
    ]
  },
  {
    title: "Support",
    menuList: [
      {
        label: "FAQs",
        icon: FAQ,
        url: "/menu/faqs"
      },
      {
        label: "Blogs",
        icon: BLOGS,
        url: "/menu/blogs"
      },
      {
        label: "Contact us",
        icon: CONTACTUS,
        url: "/menu/contact-us"
      }
    ]
  },
];
