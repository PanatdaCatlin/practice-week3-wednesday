var output;
var arrPractice = [7,14,21,28,35,42,49];
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
