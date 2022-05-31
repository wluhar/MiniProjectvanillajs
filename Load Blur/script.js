const background = document.querySelector('.bg');
const load=document.querySelector('.loading-text'); 

let start=0;

const time=setInterval( blur , 30)

function blur(){
    start ++ 
   if(start > 99){
    clearInterval(time); 
    }
    load.innerText=`${start}%`
    load.style.opacity= scale(start,0,100,1,0);
    background.style.filter=`blur(${scale(start,0,100,30,0)}px)`
}


const scale=( num,min,max,minn,maxx)=>{

    return (num-min)*(maxx-minn)/(max-min)+minn;

}




