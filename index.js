let distance = 199

function scuberGreetingForFeet(distance){
  
  // Write your code here!
  if(distance <= 400){
    return 'This one is on me!';
  }

  
  else if(distance >= 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good."
  }
  else if (city !== "NYC"){
    return "No go."
  }
}

let tip;

function switchOnCharmFromTip(tip){
  switch (tip){
    case "not as generous":
      return "Thank you."
    break;
    case "generous":
      return "Thank you so much."
    break;
    default:
      return "Bye."
  }
}
