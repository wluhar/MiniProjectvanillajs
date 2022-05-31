const insert_area=document.querySelector('.insert');



window.addEventListener('keydown',(event)=>{


insert_area.innerHTML=`
<div class="key">
${event.key === ' ' ? 'Space' : event.key}
<small>event.key</small>
</div>
<div class="key">
${event.keyCode}
<small>event.keycode</small>
</div>
<div class="key">
${event.code}
<small>event.code</small>
</div>

`

})