
const start_button = document.querySelector(".start_button button");
const rule_box = document.querySelector(".rule_box");
const exit_button = rule_box.querySelector(".buttons .quit");
const continue_button = rule_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_tab = document.querySelector(".result_tab");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_title");
const timeCount = document.querySelector(".timer .timer_secs");


start_button.onclick = ()=>{
    rule_box.classList.add("activeInfo"); 
}


exit_button.onclick = ()=>{
    rule_box.classList.remove("activeInfo"); 
}


continue_button.onclick = ()=>{
    rule_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuestions(0); 
    queCounter(1); 
    startTimer(10); 
}

let timeValue =  10;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;


const restart_quiz = result_tab.querySelector(".buttons .restart");
const quit_quiz = result_tab.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_tab.classList.remove("activeResult"); 
    timeValue = 10; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    startTimer(timeValue);  
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}
//**/*Title: Create a Quiz App with Timer using HTML CSS & JavaScript* Author:CodingNepal Date: (2020)Availability: (https://www.youtube.com/watch?v=WUBhpSRS_fk)* **/
const next_button = document.querySelector("footer .next_button");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_button.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuestions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue);  
        timeText.textContent = "Time Left"; 
        next_button.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine);
        showResult();
    }
}


function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

   
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"></div>';
let crossIconTag = '<div class="icon cross"></div>';

/**Title: Create a Quiz App with Timer using HTML CSS & JavaScript* Author:CodingNepal Date: (2020)Availability: (https://www.youtube.com/watch?v=WUBhpSRS_fk)* **/
function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){  
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_button.classList.add("show"); 
}

function showResult(){
    rule_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_tab.classList.add("activeResult"); 
    const scoreText = result_tab.querySelector(".score_text");
    if (userScore > 3){ 
       
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
/**Title: Create a Quiz App with Timer using HTML CSS & JavaScript* Author:CodingNepal Date: (2020)Availability: (https://www.youtube.com/watch?v=WUBhpSRS_fk)* **/
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_button.classList.add("show"); 
        }
    }
}



function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;}
