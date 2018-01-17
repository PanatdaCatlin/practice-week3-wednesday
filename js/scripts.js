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
function primeSifting(max){
  var primeList = [2];
  var currentVal = listOfNumbers[0];
  populateMe(max);
  for(var i = 1; i < listOfNumbers.length; i ++){
    currentVal = listOfNumbers[i]
    if(primeChecker){
      removeMe(primeMultiplies(currentVal,max));
      primeList.push(currentVal);
    } else {
      removeMe(primeMultiplies(currentVal,max));
    }

  }
  return primeList.toString();

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
function primeMultiplies(inputPrime, inputSize){
  var outputArray = [];
  for(var i = 1; i <= inputSize/inputPrime; i ++){
    outputArray.push(inputPrime*i);
  }
  return outputArray;
}
function populateMe(max){
  for(var i = 2; i <=max; i ++){
    listOfNumbers.push(i);
  }
}
function removeMe(inputArray){
  listOfNumbers = listOfNumbers.filter(function(val){
    return inputArray.indexOf(val) == -1;
  });
}
function wordPuzzle(wordInput){
  var wordLength = wordInput.length;
  var wordOut = [];
  for(var i = 0; i < wordLength; i ++){
    if(wordInput[i]==="a"||wordInput[i]==="e"||wordInput[i]==="i"||wordInput[i]==="o"||wordInput[i]==="u"){
      wordOut[i]="-";
      } else {
        wordOut[i] = wordInput[i];
    }
  }
  console.log(wordOut);
  while(wordOut.includes("-")){
    var userInput = prompt("Enter your guess for the next '-'!");
    if(wordInput[wordOut.indexOf('-')]===userInput){
      wordOut[wordOut.indexOf('-')]=userInput;
      console.log(wordOut);
    } else {
      alert("You entered the wrong vowel.");
    }
  }
}
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
