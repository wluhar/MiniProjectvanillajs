const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',updates);

updates()

function updates(){
    
   const triggerbottom = window.innerHeight * 0.8;
   boxes.forEach((box)=>{
       const boxtop=box.getBoundingClientRect().top;
       if(boxtop < triggerbottom){
           box.classList.add('active');
       }else{
           box.classList.remove('active');
       }
       })


}