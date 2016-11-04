//Jack Spencer //

function test1(){
  var A = document.getElementById("answer1").value;
  console.log(A);
  if (A==18){
    document.getElementById("output-text").innerHTML=  A + "  Is correct!";
  }
  else if (isNaN (A)) {
    document.getElementById("output-text").innerHTML=  A + "  Is not a number!";
  }
  else {
    document.getElementById("output-text").innerHTML=  A + "  Is incorrect!";
  }
}


function test2(){
  var B = document.getElementById("answer2").value;
  console.log(B);
  if (B==137){
    document.getElementById("output-text2").innerHTML=  B + "  Is correct!";
  }
  else if (isNaN (B)) {
    document.getElementById("output-text2").innerHTML=  B + "  Is not a number!";
  }
  else {
    document.getElementById("output-text2").innerHTML=  B + "  Is incorrect!";
  }
}

function test3(){
  var C = document.getElementById("answer3").value;
  console.log(C);
  if (C==1211){
    document.getElementById("output-text3").innerHTML=  C + "  Is correct!";
  }
  else if (isNaN (C)) {
    document.getElementById("output-text3").innerHTML=  C + "  Is not a number!";
  }
  else {
    document.getElementById("output-text3").innerHTML=  C + "  Is incorrect!";
  }
}
