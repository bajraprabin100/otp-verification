import IeltsImage from "src/assets/images/dashboard/svg/ielts.svg"
import PTEImage from "src/assets/images/dashboard/svg/pte.svg"
import IdpImage from "src/assets/images/dashboard/svg/idp.svg"
import Tofel from "src/assets/images/dashboard/svg/tofel.svg"
import Gre from "src/assets/images/dashboard/svg/gre.svg"
import Notes from "src/assets/images/dashboard/svg/notes.svg"
import Folder from "src/assets/images/dashboard/svg/folder.svg"
import BritishCouncil from "src/assets/images/dashboard/svg/british-council.svg"
import Email from "src/assets/images/contact-us/email.svg"
import Location from "src/assets/images/contact-us/location.svg"
import Phone from "src/assets/images/contact-us/phone.svg"
import Viber from "src/assets/images/contact-us/viber.svg"

export const DASHBOARD_CONTENT = {
  content: [
    {
      title: "IELTS",
      slug: "ielts",
      image: IeltsImage,
      variant: "error",
    },
    {
      title: "PTE",
      image: PTEImage,
      variant: "info",
      slug: "pearson",
    },
    {
      title: "TOEFL",
      image: Tofel,
      variant: "info",
      slug: "toefl"
    },
    {
      title: "GRE",
      image: Gre,
      variant: "warning",
      slug: "gre"
    }
  ]
}
export const EXAM_TYPE_MODAL = {
  ielts: {
    popup: {
      title: "Choose provider",
      subTitle: "Select your desired Ielts exam provider from the options",
      examType: [
        {
          title: "British Council",
          image: BritishCouncil,
          alias: "british_council",
          url: "",
          variant: "default",
        },
        {
          title: "IDP IELTS",
          image: IdpImage,
          alias: "idp",
          url: "",
          variant: "default",
        }
      ]
    }
  },
  pte: {
    popup: {
      title: "Are you a new PTE user?",
      subTitle: "Select an appropriate option to move forward with your booking",
      examType: [
        {
          title: "I am new in PTE",
          image: Notes,
          alias: "pearson",
          variant: "default",
        },
        {
          title: "I have an account",
          image: Folder,
          variant: "default",
          alias: undefined
        }
      ]
    }
  },
  toefl: {
    popup: {
      title: "Are you a new TOEFL user?",
      subTitle: "Select an appropriate option to move forward with your booking",
      examType: [
        {
          title: "I am new  in TOEFL",
          image: Notes,
          alias: "toefl",
          variant: "default",
        },
        {
          title: "I have an account",
          image: Folder,
          variant: "default",
          alias: undefined
        }
      ]
    }
  },
  gre: {
    popup: {
      title: "Are you a new GRE user?",
      subTitle: "Select an appropriate option to move forward with your booking",
      examType: [
        {
          title: "I am new  in GRE",
          image: Notes,
          alias: "toefl",
          variant: "default",
        },
        {
          title: "I have an account",
          image: Folder,
          variant: "default",
          alias: undefined
        }
      ]
    }
  },
  contactUs: {
    popup: {
      title: "Contact us",
      subTitle: "Feel free to reach out to us so we can assist you with anything",
      consultancyName: "Global Gate Education Consultancy",
      info: [
        {
          content: "+977-983029332, 01-323423432",
          icon: Phone
        },
        {
          content: "info@goldengateeducation.com.np",
          icon: Email
        },
        {
          content: "Hattisar, Beside Esewa building, Kathmandu Nepal.",
          icon: Location
        },
        {
          content: "+977-934243242234",
          icon: Viber
        }
      ]
    }
  },
  updateProfile: {
    popup: {
      title: "Update Profile",
      subTitle: "Ensure your profile is fully filled out for convenient exam booking."
    }
  }
}
