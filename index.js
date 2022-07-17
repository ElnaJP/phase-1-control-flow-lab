function scuberGreetingForFeet(ride)
{
/*if('gives customers a free sample if the ride is less than or equal to 400 feet');
  {
 return ride = ("This one is one me!");
  }

 else if('charges 30 dollars for a distance over 2000 feet'); {
  return "I will gladly take your thirty bucks.";
 }

 if (ride === 'does not allow rides over 2500 feet') {
 return  "No can do.";
 }
}*/
if (ride < 400 ) {
return "This one is on me!";
} else if (ride > 2000  && ride < 2500) {
return "I will gladly take your thirty bucks.";
}
 else if(ride > 2500) {
return "No can do.";
}
}

function ternaryCheckCity(city) 
{
  if(city === 'NYC') {
    return "Ok, sounds good.";
  }
  else {
  return "No go.";
  }
}
function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === 'generous')
  {
return "Thank you so much.";
  }
  else if(tip === 'not as generous') {
    return "Thank you.";
  }
  else{
    return "Bye."
  }
}