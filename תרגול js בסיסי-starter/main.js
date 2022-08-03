function handle1Click(array, numberOfNumbersToSum) {
  let sum = 0;

  for (let index = 0; index < numberOfNumbersToSum; index++) {
    const currNum = array[index];
    sum += currNum;
  }

  document.getElementById("result-answer").innerHTML = 'Sum of nums: ' + sum;
}

function handle2Click(array) {
  let positiveNums = 0;
  let negativeNums = 0;

  for (let index = 0; index < array.length; index++) {

    const num = array[index];

    if (num > 0) {
      positiveNums++;
    }
    else if (num < 0) {
      negativeNums++;
    }
  }

  document.getElementById("result-answer").innerHTML = "Positive numbers: " + positiveNums + ", Negative numbers: " + negativeNums;
}

function handle3Click(array, text) {
  var sentence = "";

  for (let index = 0; index < array.length; index++) {

    sentence += array[index] + text + " ";
  }

  document.getElementById("result-answer").innerHTML = sentence;
}

function handle4Click(number){
  var list = ''
  for(var valueBefore = 1; valueBefore < number; valueBefore++){

    if(valueBefore === 1 || valueBefore === 2){

      list += valueBefore +' ';
    }
    else{
      if(checkIfPrime(valueBefore)){
        list += valueBefore +' ';
      }
    }
  }

  document.getElementById("result-answer").innerHTML = list;
}

function handle5Click(number){
  debugger
  var shape = '';

  for(var check = 1; check <= number; check++){
    shape += tearApart(check) + '<br/>';

    if(check === number){

      for(var checkDown= number - 1; checkDown >= 1; checkDown--){
        shape += tearApart(checkDown) + '<br/>';
      }
    }
  }
  document.getElementById("result-answer").innerHTML = shape;
}

function handle6Click(){
  let number = prompt("Please enter number");
  let result = "";

  while(number != -999){
  let fullSentence = "Original number " + number;
  let second_char = parseInt(number.charAt(2));
  if(second_char === 8){
    result *= number%second_char;
  }
  else if(second_char === 5){
    result = number.charAt(3) + number.charAt(2) + number.charAt(1) + number.charAt(0);
  }
  else if(second_char === 2){
    result = number.charAt(3) + number.charAt(0) + number.charAt(1) + number.charAt(2);
  }
  else{
    result = number.charAt(2) + number.charAt(3) + number.charAt(0) + number.charAt(1);
  }

  result = parseInt(result);
  fullSentence += ", Converted number " + result;

  if(result > 1000 && result <= 5000){
    fullSentence += " cool"
  }
  else if(result > 5000 && result <= 10000){
    fullSentence += " What's up"
  }
  else{
    fullSentence += " Something is not okay."
  }

  document.getElementById("result-answer").innerHTML = fullSentence;

  number = prompt("Please enter number");
  result = "";
  }
}

function handle7Click(){
  var tankHP = 100;
  var soldierHP = prompt("Please enter soldier HP");
  var message = "";
  
  while(soldierHP < 1 || soldierHP > 100){
    var soldierHP = prompt("Please enter soldier HP");
  }

  var magazines = prompt("Please enter the amount of magazines.")
  var grenades = prompt("Please enter the amount of grenades.")

  var someOneIsDead = false;

  while(!someOneIsDead){
    var soldierDamage;

    var option = prompt("1 to shoot, 2 to throw grenade, 3 to hide, 4 to retreat");
    if(option === 1){
      var magazinesUsed = prompt("How many magazines to use.");
      if(magazinesUsed <= magazines && magazinesUsed < 4){
        soldierDamage = magazinesUsed*10;
        magazines -= magazinesUsed;
      }
    }
    else if(option === 2){
      if(grenades >= 1){
        grenades--;
        soldierDamage = 30;
      }
    }
    else if(option === 3){
      soldierDamage = 0;
    }
    else if(option === 4){
      message = "The soldier retreated with remaning amount of " + soldierHP + " HP";
      someOneIsDead = true;
    }
    
    if(!someOneIsDead){
      tankHP -= soldierDamage;
      if(tankHP <= 0){
        someOneIsDead = true;
        message = "The soldier won with remaning amount of " + soldierHP + " HP";
      }
      if(option != 3 && someOneIsDead){
        soldierHP -= 20;
        if(soldierHP <= 0){
          someOneIsDead = true;
          message = "The tank won with remaning amount of " + tankHP + " HP";
        }
      }
    }
  }

  document.getElementById("result-answer").innerHTML = message;
}

function handle8Click(){
  console.log("Calculator");
  console.log("*************")
  console.log("To square root enter a")
  console.log("To factorial enter b")
  console.log("To power 2 numbers enter c")

  var option = prompt("Enter option here")

  switch(option){

    case 'a':
      console.log("Enter number.")
      var num = prompt("Enter here")

      num = Math.sqrt(num);

      if(Number.isInteger(num)){
        console.log("The square root of the num is: " + num);
      }
      else{
        console.log("The square root of the number is not integer.")
      }
      break;

    case 'b':
      console.log("Enter number")
      var numFac = parseInt(prompt("Enter here"))
      var count = numFac

      debugger
      for(var i = count - 1; i > 0; i--){
        var sum = 0;
        for(var j = 0; j < i; j++){
          sum += numFac
        }

        numFac = sum;
      }
      console.log("The fatorial of the number is: " + numFac)
      break;

    case 'c':
      console.log("Enter base")
      var base = parseInt(prompt("Enter here"))
      console.log("Enter power")
      var power = parseInt(prompt("Enter here"))

      var result = 1;

      for(var i = 0; i < power; i++){

        result *= base;
      }

      console.log("The result is: " + result)
      break;
  }

  console.log("**********************")
}

function handle9Click(){

}

function checkIfPrime(number){
  for(var check = 2; check < number; check++){
    if(number % check ==0){
      return false;
    }
  }
  return true;
}

function tearApart(number){

  var line = '* ';

  for(var add = 1; add <= number; add++){

    line += add +' ';
    if(add === number){

      if(add === 1){
        line += '*';
      }
      else{
        for(var addDown = number - 1; addDown >= 1; addDown--){
          line += addDown + ' ';
          if(addDown === 1){
            line += '*'
          }
        }
      }
    }
  }

  return line;
}

function upsideDowm(num){

  num = num + ""

  return num.split("").reverse().join()
}

function square(a, b, c){
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  c = Number.parseInt(c);

  var insidesqr = Math.pow(b,2) - (4*a*c);

  if(insidesqr < 0){
    console.log("No Solution.")
  }
  else{

    if(insidesqr === 0){

      console.log('Solution: ' + (-1*b)/ (2*a));
    }
    else{
      var sqrt = Math.sqrt(insidesqr);

      var solution1 = ((-1*b) + sqrt) / (2*a);
      var solution2 = ((-1*b) - sqrt) / (2*a);

      console.log('Solution 1: ' + solution1 +', solution 2: ' + solution2)
    }
  }
}

function handle11Click(array){
  var sum = array.reduce((sum, number) => sum += number);
  var min = -999;
  var max = 999;

  array.forEach(number){

  }

  console.log(sum, min, max)
}