let a = 86;
let b = -88;
let c = (a+b);
let d = 1;
let res = (c+d);

let input = document.getElementById("input_1");
let resultBlock = document.getElementsByTagName("div");
let submit = document.getElementById("button_1");
let inputValue = input.value;

submit.addEventListener("click" , function(){

    resultBlock[0].innerText = 'result: ' + res
    
})


