var display1=document.getElementById('display');
display1.addEventListener('click' , number_click)


var btn7=document.getElementById('seven');
btn7.addEventListener('click',number_click);

var btn8=document.getElementById('eight');
btn8.addEventListener('click',number_click);

var btn9=document.getElementById('nine');
btn9.addEventListener('click',number_click);


var btn6=document.getElementById('six');
btn6.addEventListener('click',number_click);

var btn5=document.getElementById('five');
btn5.addEventListener('click',number_click);

var btn4=document.getElementById('four');
btn4.addEventListener('click',number_click);

var btn2=document.getElementById('two');
btn2.addEventListener('click',number_click);

var btn3=document.getElementById('three');
btn3.addEventListener('click',number_click);

var btn1=document.getElementById('one');
btn1.addEventListener('click',number_click);

var btn_add=document.getElementById('add');
btn_add.addEventListener('click',number_click);

var btn_sub=document.getElementById('subtract');
btn_sub.addEventListener('click',number_click);

var btn_mult=document.getElementById('multiply');
btn_mult.addEventListener('click',number_click);

var btn_zerobtn=document.getElementById('zero');
btn_zerobtn.addEventListener('click',number_click);

var btn_decimalbtn=document.getElementById('decimal');
btn_decimalbtn.addEventListener('click',number_click);

var btn_dividebtn=document.getElementById('divide');
btn_dividebtn.addEventListener('click',number_click);

var btn_calculatebtn=document.getElementById('calculate');
btn_calculatebtn.addEventListener('click',calculate_logic,);

var btn_calearbtn=document.getElementById('calear')
btn_calearbtn.addEventListener('click',btn_clear);




// ///////////////////////////////////////////////////



function number_click(e){
    var result=e.target.value;
    display1.value+=result;
}


function calculate_logic(e){
    if(display1.value === ""){
        display1.value="";
    }else{
        var ans= display1.value;
        ans=parseFloat(ans);
        ans=eval(display1.value);
        display1.value=ans;
    }
}


function btn_clear(e){
    display1.value="";
}




