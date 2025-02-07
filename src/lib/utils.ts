import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSpacedText = (value1:string,value2:string) =>{
  if(!value1 || !value2){
    return ""
  }
  return `${value1} ${value2}`
}

export const getGreeting = (name:string) => {
  const hoursNow = new Date().getHours();
  let greeting = "";
  if (hoursNow >= 16) {
    greeting = "Good Evening";
  } else if (hoursNow >= 12) {
    greeting = "Good Afternoon";
  } else if (hoursNow >= 6) {
    greeting = "Good Morning";
  } else {
    greeting = "Good morning";
  }
  const finalString = getSpacedText(greeting,name)
  return finalString;
};