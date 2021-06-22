// Selection

let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let btn = document.querySelector('#button');

let err01 = document.querySelector('#e-01');
let err02 = document.querySelector('#e-02');
let err03 = document.querySelector('#e-03');

// function
function error(x,y,z){
    x.className = 'error';
    y.innerHTML = z;
}

function succes(x,y){
    x.className = 'succes';
    y.innerHTML = '';
}
//add Event Listener

form.addEventListener('submit',function (e){
    e.preventDefault()
    //name
    if(name.value === '' || name.value === null){
       error(name,err01,'Name is required');
    }
    else{
        succes(name,err01);
    }
    
    //email
    if(email.value === ''){
        error(email,err02,'Email is required');
     }
     else{
         succes(email,err02);
     }

     //phone
    if(phone.value === ''){
        error(phone,err03,'Phone number is required');
     }
     else{
         succes(phone,err03);
     }

    

})