'use strict';

function basicTeenager(age) {
  if (age < 20 && age >= 13) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age < 20 && age >= 13) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age < 20 && age >= 13) {
    return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else {
    return "You are a grownup"
  }
}

// The ternary operator is used as a shortcut for the if-else statement. You've probably seen it before in Ruby looking something like this:
// cart = ["graphic t-shirt", "aluminum water bottle"]
//  
// puts cart.empty? ? "Please add something to your cart." : "You're ready to check out." 

function ternaryTeenager(age) {
  return age < 20 && age >= 13 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case 13:
    return "You are a teenager";
  
    case 14:
    return "You are a teenager";
  
    case 15:
    return"You are a teenager";

    case 16:
    return"You are a teenager";
  
    case 17:
    return "You are a teenager";

    case 18:
    return "You are a teenager";

    case 19:
    return "You are a teenager";
    break;
    default: 
    return "You have an age";
  }
  
}

