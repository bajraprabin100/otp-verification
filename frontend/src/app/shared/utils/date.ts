import dayjs from "dayjs";

export function calculateYear(d){
  const date = dayjs(d);
  const currentDate = dayjs();
  return currentDate.diff(date, "years");
}

export function calculateMonth(d){
  const date = dayjs(d).toDate();
  const currentDate = dayjs();
  return currentDate.diff(date, "months");
}
export function calculateDay(d){
  const date = dayjs(d).toDate();
  const currentDate = dayjs();
  return currentDate.diff(date, "days");
}
export function checkValidAge(d, minAge){
  const age = calculateYear(d);
  return age >= minAge;

}
export function checkDateIsExpired(d){
  const date = dayjs(d).toDate();
  const currentDate = dayjs();
  const dateDiff = currentDate.diff(date, "milliseconds");
  return Math.sign(dateDiff) === 1
}

export function calculateDateDiff(d){
  if(checkDateIsExpired(d)){
    return "Expired"
  }
  const year = calculateYear(d);
  if(year > 0){
    return -year + "years";
  }
  const month = calculateMonth(d)
  if(month > 0){
    return -month + " months"
  }
  const day = calculateDay(d)
  return -day +" days";
}

export function calculateTwoDateDiff(start, end){
  if(dayjs(dayjs(start).format("YYYY-MM-DD")).diff(dayjs(end).format("YYYY-MM-DD"), "days") > 0) {
    if(dayjs(dayjs().format("YYYY-MM-DD")).diff(dayjs(start).format("YYYY-MM-DD"), "days") === 0) {
      return "Today"
    }
    return dayjs(start).format("LL")
  }
}
