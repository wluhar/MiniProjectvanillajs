const github=new Github;
const ui=new UI;

const searchuser=document.querySelector('#searchuser');

searchuser.addEventListener('keyup',(e)=>{
    const usertext=e.target.value
    
    if(usertext !== ''){

       github.GetUsers(usertext).then(data =>{
            if (data.profile.message === 'Not Found'){
                //show Alert in ui.js
            }else{
                //show profile in ui.js
                ui.showProfile(data.profile);
            }
        })
            

    }else{
        //clear the profile in ui.js
    }
    
})