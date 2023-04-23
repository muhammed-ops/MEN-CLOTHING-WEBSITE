function firstnamevalidate(){
    let x = document.getElementById('first').value;
    let text ='';
    if (x == ''){
        text= 'Fill out this field!!';
    }else {
        text = '';
    }
   
    document.getElementById('demo').innerHTML = text;
}

function lastnamevalidate(){
    let x = document.getElementById('last').value;
    let text ='';
    if (x == ''){
        text= 'Fill out this field!!';
    } else {
        text= '';
    }
    document.getElementById('demo1').innerHTML = text;
}

function emailvalidate(){
    let x = document.getElementById('email').value;
    let text ='';
    if (x == ''){
        text= 'Fill out this field!!';
    } else {
        text= '';
    }
    document.getElementById('demo2').innerHTML = text;
}

function dateofbirthvalidate(){
    let x = document.getElementById('dob').value;
    let text ='';
    if (x == ''){
        text= 'Fill out this field!!';
    } else {
        text= '';
    }
    document.getElementById('demo3').innerHTML = text;
}

