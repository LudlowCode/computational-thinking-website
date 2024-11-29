var attempts = 0
var togglecheck = 0
var answered = 4
function results() {
  let score = 0;
  /* attempts += 1;
  document.getElementById(`Attempt`).innerHTML = `Attempts: ${attempts}`; */
  for (let i = 1; i < 5; i++) {
      let a = document.querySelector(`input[name="Q${i}"]:checked`);
      if (a != null) {
          if (a.value == 1) {
            score += 1;
            a.parentElement.style.backgroundColor = "green";
          } 
          else {
            a.parentElement.style.backgroundColor = "red";
          }
        } 
        else {
          alert(`Q${i} cannot be marked due to no valid input being recognized, please make sure you have answered the question.`);
          answered -= 1
        }
  }
    if(answered == 4){
      alert("Attempted Submitted!")
      if (score == 4) {
          document.getElementById(`Result`).innerHTML = "Your score is 4/4! Great Job!";
          alert("Perfect!");
          attempts += 1;
          document.getElementById(`Attempt`).innerHTML = `Attempts: ${attempts}`;
      } 
      else {
          document.getElementById(`Result`).innerHTML = `Your score is ${score}/4. Look back through and review your answers`;
          attempts += 1;
          document.getElementById(`Attempt`).innerHTML = `Attempts: ${attempts}`;
      }
    }
    else {
      alert(`You have ${4-answered} questions remaining to fill in a response. You have no been marked/no attempt has been counted.`)
    }
    answered = 4
}
function darkmode(){
  document.body.classList.toggle('dark')
  document.getElementById(`header`).classList.toggle('dark')
  if(togglecheck == 0) {
    togglecheck = 1;
    document.getElementById(`bgchange`).innerHTML = "Change to Light Mode";
    document.getElementsByClassName(`button`).classList.toggle('dark');
    return;
  }
  if(togglecheck == 1) {
    togglecheck = 0;
    document.getElementById(`bgchange`).innerHTML = "Change to Dark Mode"
    document.getElementsByClassName(`button`).classList.toggle('dark');
    return;
  }
}