var form=document.getElementById("form");
var inp_name=document.getElementById("inp_name");
var inp_surname=document.getElementById("inp_surname");
var input3=document.getElementById("input3");
var answer=document.getElementById("answer");
var sub_btn =document.getElementById("sub_btn");
var message =document.getElementById("message");

var symbols = ['*', '/', '+', '-'];
var rand_sym = symbols[Math.floor((Math.random() * symbols.length ))];
var rand_num1 = Math.floor(Math.random() *100 + 1);
var rand_num2 = Math.floor(Math.random() *100 + 1);
var netice=  rand_num1 + rand_sym +  rand_num2 ;
var check= Math.floor(eval(netice));
console.log(check);
input3.value=netice;

form.addEventListener("submit",function(event){
    event.preventDefault();
    if ( (inp_name.value != '' && inp_surname.value != '') && (answer.value == check)) {
     message.innerText="YEAP YEAP YEAP YEAP YEAP!"
    } else {
        message.innerText="no no no no no" 
    }
})
