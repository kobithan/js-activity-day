function submit1(){
    var a =  document.getElementById("number1").value;
    var b =  document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b);
    var d = parseInt(a) * parseInt(b);
    var e = parseInt(a) - parseInt(b);
    var f = parseInt(a) / parseInt(b);

    document.getElementById("result").innerHTML="i. The addition of the two numbers is:" + c;
    document.getElementById("result1").innerHTML="ii. The multiplication of the two numbers is:" + d;
    document.getElementById("result2").innerHTML="iii. The subtraction of the two numbers is:" + e;
    document.getElementById("result3").innerHTML="iv. The division of the two numbers is:" + f;
}
