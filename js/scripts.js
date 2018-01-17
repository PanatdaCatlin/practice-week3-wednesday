var output;
var arrPractice = [7,14,21,28,35,42,49];
var listOfNumbers = [];
function loopOne(){
  var loopOneOutput = [];
  var j = 0;
  for(var i = 5; i <= 30; i +=5){
    loopOneOutput[j]=i;
    j++;
  }
  return loopOneOutput.toString();
}
function loopTwo(){

  var loopTwoOutput = [];
  var b = 0;

  for(var a = 7; a <=50; a +=7) {
    loopTwoOutput[b]= a;
    b++;
  }
  return loopTwoOutput.toString();

}
function outputArr(countBy, countTo){

  if(countBy<0 || countTo<0){
    return "Enter a positive number";
  } else if(isNaN(countBy) || isNaN(countTo)){
    return "Enter a number";
  } else if(countBy === 0 || countTo ===0){
    return "Enter a non-zero input";
  } else if(countBy > countTo){
    return "Make the number you want to count by, smaller, than what you want to count to."
  } else {
    var output = [];
    var j = 0;
    for(var a = countBy; a <= countTo; a += countBy){
      output[j] = a;
      j++;
    }
    return output.toString();
  }

}
function languagePractice(){
  var languagePracticeResult = ['HTML', 'CSS', 'JavaScript'];
  var arrLength = languagePracticeResult.length;
  for(var i = 0; i < arrLength; i ++){
    alert('I love ' + languagePracticeResult[i] + '!');
  }
}
function factorial(input){
  var output = 1;
  for(var c = 1; c <=input; c+=1) {
    output *= c;
  }
   return output;
}
function palindromes(input){
  var length = input.length;
  var center = Math.floor(length/2 + 1);
  if(length%2!=1){
    return false;
  } else {
    for(var i=2; i < length/2 + 1; i++){
      if(input[center+i-2] != input[center-i]){
        return false;
      }
    }
    return true;
  }
}
function primeSifting(inputIteration){
  var primeList = [2];
  

}
function primeChecker(inputPrime){
  for(var i=2; i <= inputPrime; i ++){
    for(var j = 2; j <= inputPrime; j ++){
      if(i*j===inputPrime){
        return false;
      }
    }
  }
  return true;
}
function primeMultiplies(inputPrime){
  var outputArray = [];
  for(var i = 1; i <= 10000/inputPrime; i ++){
    outputArray.push(inputPrime*i);
  }
  return outputArray;
}

function populateMe(){
  for(var i = 2; i <= 10000; i ++){
    listOfNumbers.push(i);
  }
}
