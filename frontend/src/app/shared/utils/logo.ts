import IDP from "src/assets/images/dashboard/svg/idp.svg";
import BritishCouncil from "src/assets/images/dashboard/svg/british-council.svg";
import PTE from "src/assets/images/dashboard/svg/pte.svg";
import Tofel from "src/assets/images/dashboard/svg/tofel.svg";
import Gre from "src/assets/images/dashboard/svg/gre.svg";
import IDPImage from "@/assets/images/exam-logo/idp.svg?react";
import PteImage from "@/assets/images/exam-logo/pte.svg?react";
import BritishImage from "@/assets/images/exam-logo/british_council.svg?react";
import TofelImage from "@/assets/images/exam-logo/tofel.svg?react";
import GreImage from "@/assets/images/exam-logo/gre.svg?react";
import Spinner from "@/assets/images/app/spinner.svg";

export function getLogo(alias: string){
  switch (alias?.toLowerCase()){
    case "idp":
      return IDP
    case "british_council":
    case "British Council":
      return BritishCouncil
    case "pearson":
      return PTE
    case "toefl":
      return Tofel
    case "gre":
      return Gre
    default:
      return Spinner
  }
}

export function getSideImage(alias: string){
  switch (alias.toLowerCase()){
    case "idp":
      return IDPImage
    case "british_council":
      return BritishImage
    case "pearson":
      return PteImage
    case "toefl":
      return TofelImage
    case "gre":
      return GreImage
    default:
      return Spinner
  }
}

export function getAlias(provider: string){
  switch (provider.toLowerCase()){
    case "british council":
      return "british_council"
    case "idp":
      return "idp"
    case "pte":
      return "pearson"
    case "gre":
      return "gre"
    case "toefl":
      return "toefl"
    default:
      return "british_council"
  }
}
