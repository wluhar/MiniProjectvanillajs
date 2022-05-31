const counterBtn=document.querySelector('.counterbtn');
const counterSpace=document.querySelector('.counterdigit');

let counter=0

counterBtn.addEventListener('click',()=>{
    if(counter === 10){
        counter=0
    }else
    {
        counter++
    }       

    counterSpace.innerText=counter;
    
})