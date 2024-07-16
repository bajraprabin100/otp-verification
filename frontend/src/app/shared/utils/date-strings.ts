import { formatDate } from "date-fns";
import dayjs from "dayjs";

export function getDateRangeText(from, to){
  return `${dayjs(from).format("YYYY-MM-DD")} - ${dayjs(to).format("YYYY-MM-DD")}`;
}

export function getDateRangeFrom(from, to){
  if(!!from && !!to){
    return `${dayjs(from).format("MMM DD")} - ${dayjs(to).format("MMM DD, YYYY")}`;
  }else {
    return "N/A"
  }
}
