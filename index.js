const start_button = document.querySelector(".start_button button");
const rule_box = document.querySelector(".rule_box");
const exit_button = rule_box.querySelector(".buttons .quit");
const continue_button = rule_box.querySelector(".button .restart");
const quiz_box = rule_box.querySelector(".button .restart");

start_button.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_button.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_button.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    info_box.classList.remove("activeQuiz");
}
