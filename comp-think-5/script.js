function checkanswer1() {
 var answer = document.getElementById('answer-check1').value
 if (answer=="pattern recognition") { 
    document.getElementById('feedback1').innerHTML="You are correct!"
    
 } else {
    document.getElementById('feedback1').innerHTML="Try Again!"
    
 }
}

function checkanswer2() {
   var answer = document.getElementById('answer-check2').value
   if (answer=="algorithm") { 
      document.getElementById('feedback2').innerHTML="You are correct!"
      
   } else {
      document.getElementById('feedback2').innerHTML="Try Again!"
      
   }
  }

function checkanswer3() {
   var answer = document.getElementById('answer-check3').value
   if (answer=="decomposition") { 
      document.getElementById('feedback3').innerHTML="You are correct!"
      
   } else {
      document.getElementById('feedback3').innerHTML="Try Again!"
      
   }
  }

function checkanswer4() {
   var answer = document.getElementById('answer-check4').value
   if (answer=="abstraction") { 
      document.getElementById('feedback4').innerHTML="You are correct!"
      
   } else {
      document.getElementById('feedback4').innerHTML="Try Again!"
      
   }
  }

function reset(){
   document.getElementById("answer-check3").value=""
}

function reset(){
   document.getElementById("answer-check2").value=""
}

function reset(){
   document.getElementById("answer-check1").value=""
}

