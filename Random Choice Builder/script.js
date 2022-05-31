const textarea=document.querySelector('.textarea');
const tagsel=document.querySelector('.tags');

textarea.focus()


textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
     
        setTimeout(()=>{
            e.target.value='';
        },10)

        randomSelect();
    }
})

function createTags(input){
const tags=input.split(',')
.filter(tag => tag.trim() !== '')
.map(tag => tag.trim());

tagsel.innerHTML='';

tags.forEach(tag => {

    const newtag=document.createElement('span');
    newtag.classList.add('tag');
    newtag.innerText=tag;
    tagsel.appendChild(newtag);

});


}

function randomSelect(){
    // console.log(Math.floor(Math.random()*90));
    const times=30
    
    const interval = setInterval(()=>{
        const randomTag=pickRandomTag();

        highlight(randomTag)
        setTimeout(()=>{
            removeHighlight(randomTag)
        },100)
    },100)

       setTimeout(()=>{
           clearInterval(interval)
           setTimeout(()=>{const tag=pickRandomTag();
            highlight(tag)
 },100)
           
       },times*100) 



}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length )] 
}

function highlight(tag){
 
    tag.classList.add('highlight');

}

function removeHighlight(tag){
    tag.classList.remove('highlight');

}