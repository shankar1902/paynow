var payment = document.forms['pay']['payment'];
var name = document.forms['pay']['name'];
var  number= document.forms['pay']['numver'];
var  exp= document.forms['pay']['exp'];
var  code= document.forms['pay']['code'];
var  zip= document.forms['pay']['zip'];

var paynow_error=document.querySelector('.paynow_error');

payment.addEventListener('textInput',paymentVerify);
name.addEventListener('textInput',nameVerify);
number.addEventListener('textInput',numberVerify);
exp.addEventListener('textInput',expVerify);
code.addEventListener('textInput',codeVerify);
zip.addEventListener('textInput',zipVerify);


function PayNowvalid() {
  if(payment.value.length <=2){
    paynow_error.style.display = "block";
    payment.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Amount";
    payment.focus();
    return false;
  }
  if(name.value.length <=4){
    paynow_error.style.display = "block";
    name.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Card Holder";
    name.focus();
    return false;
  }
  if(number.value.length <=16){
    paynow_error.style.display = "block";
    number.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Card Number";
    number.focus();
    return false;
  }
  if(exp.value.length <=4){
    paynow_error.style.display = "block";
    exp.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Expiry MM / YY";
    exp.focus();
    return false;
  }
  if(code.value.length <=3){
    paynow_error.style.display = "block";
    code.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Cvv Code";
    code.focus();
    return false;
  }
  if(zip.value.length <=6){
    paynow_error.style.display = "block";
    zip.style.border = "1px solid red";
    paynow_error.innerText = "Please fill up your Postal Code";
    zip.focus();
    return false;
  }
}
function paymentVerify() {
  if(payment.value.length <=1){
    paynow_error.style.display = "block";
    payment.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function nameVerify() {
  if(name.value.length <=1){
    paynow_error.style.display = "block";
    name.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function numberVerify() {
  if(number.value.length <=1){
    paynow_error.style.display = "block";
    number.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function cardVerify() {
  if(card.value.length <=1){
    paynow_error.style.display = "block";
    card.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function expVerify() {
  if(exp.value.length <=1){
    paynow_error.style.display = "block";
    exp.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function codeVerify() {
  if(code.value.length <=1){
    paynow_error.style.display = "block";
  code.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}
function zipVerify() {
  if(zip.value.length <=1){
    paynow_error.style.display = "block";
    zip.style.border = "1px solid #3498db";
    paynow_error.innerText = "";
    return true;
  }
}