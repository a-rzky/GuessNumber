const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

const guessInput = document.getElementById(`guess`);
const submitBtn = document.getElementById(`submitBtn`);
const result = document.getElementById(`result`);

let attempts = 0;
let running = true;


submitBtn.onclick = function(){
    if(!running) return;
    const guess = Number(guessInput.value);
    
    if(isNaN(guess)){
            result.textContent = (`please enter a valid number`);
        }

    else if(guess < minNum || guess > maxNum){
            result.textContent = (`please enter a valid number`);
        }
        
     else{
        attempts++;
        if(guess < answer){
            result.textContent = (`TOO LOW! TRY AGAIN`);
            }

        else if (guess > answer){
            result.textContent = (`TOO HIGH! TRY AGAIN`);
            }

         else{
            result.textContent = (`BENAAAR!! jawabannya adalah ${answer}. Kamu membutuhkan ${attempts} kali percobaan`);
            running = false;
            }
            
        }
        guessInput.value = "";
    
    };


