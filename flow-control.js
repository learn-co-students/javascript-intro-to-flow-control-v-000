'use strict';

function basicTeenager(age){
  if (12<age  && age <20){
  return "You are a teenager!";
  }
}

function teenager(age){
   if (basicTeenager(age) === "You are a teenager!"){ 
     return "You are a teenager!";
     } else { 
     return "You are not a teenager";
   } 
}

function ageChecker(age){
  if (basicTeenager(age) === "You are a teenager!"){
  return basicTeenager(age);
  } else if(age <= 12) {
  return "You are a kid";
  } else {
  return "You are a grownup";
  }
}

function ternaryTeenager(age){
  return (12<age && age <20) ?  "You are a teenager" : "You are not a teenager";
}
  
  function switchAge(age){
    switch(age){
      case 13: return "You are a teenager";
      break;
      case 14: return "You are a teenage";
      break;
      case 15: return "You are a teenager";
      break;
      case 16: return "You are a teenager";
      break;
     case 17: return "You are a teenager";
      break;
      case 18: return "You are a teenager";
      break;
      case 19: return "You are a teenager";
      break;
      default: return "You have an age";
    }
  }