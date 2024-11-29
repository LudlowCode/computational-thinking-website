/*java file for index sheets*/
function checkAnswerDEC1() {
            
            const DECF1 = document.getElementById('DEC1');
            
            if (DECF1.value === '2') {
                DECF1.style.backgroundColor = 'green';
            } else {
                DECF1.style.backgroundColor = 'red';
            }
        }
function checkAnswerDEC2(){
          const DECF2 = document.getElementById('DEC2');
            if (DECF2.value === '2') {
                DECF2.style.backgroundColor = 'green';
            } else {
                DECF2.style.backgroundColor = 'red';
            }
        }
function checkAnswerABS1() {
    
            const ABSF1 = document.getElementById('ABS1');
            
            if (ABSF1.value === '1') {
                ABSF1.style.backgroundColor = 'green';
            } else {
                ABSF1.style.backgroundColor = 'red';
            }
          }
function checkAnswerABS2() { 
            const ABSF2 = document.getElementById('ABS2');
            if (ABSF2.value === '1') {
                ABSF2.style.backgroundColor = 'green';
            } else {
                ABSF2.style.backgroundColor = 'red';
            }
        }

function checkAnswerPAT1() {

            const PATF1 = document.getElementById('PAT1');
            
            
            if (PATF1.value === '4') {
                PATF1.style.backgroundColor = 'green';
            } else {
                PATF1.style.backgroundColor = 'red';
            }
          }
function checkAnswerPAT2() { 
    const PATF2 = document.getElementById('PAT2');

            if (PATF2.value === '3') {
                PATF2.style.backgroundColor = 'green';
            } else {
                PATF2.style.backgroundColor = 'red';
            }
        }

function checkAnswerALG1() {

            const ALGF1 = document.getElementById('ALG1');
            
            
            if (ALGF1.value === '3') {
                ALGF1.style.backgroundColor = 'green';
            } else {
                ALGF1.style.backgroundColor = 'red';
            }
          }
function checkAnswerALG2() {
    const ALGF2 = document.getElementById('ALG2');

            if (ALGF2.value === '2') {
                ALGF2.style.backgroundColor = 'green';
            } else {
                ALGF2.style.backgroundColor = 'red';
            }
        }
        
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    splashScreen.addEventListener('click', () => {
      splashScreen.classList.add('hidden'); 
      mainContent.classList.add('active'); 
    });