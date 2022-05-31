const songs=['applause','boo','gasp','tada','victory','wrong'];

songs.forEach((song)=>{ 
 const songButton=document.createElement('button');
 songButton.classList.add('btn');
 songButton.innerText=song;
 document.querySelector('.buttons').appendChild(songButton);

})


// const newsound=['after-1','after-2','after-3'
// ,'after-4'
// ,'after-5'
// ,'after-6'
// ,'after-7'
// ,'after-8'
// ,'after-9'
// ,'after-10'
// ];

// newsound.forEach((sound)=>
// {
//  const btn=document.createElement('button');
//  btn.classList.add('btn');
//  btn.innerText=sound;
//  const buttons=document.querySelector('.buttons');
//  buttons.appendChild(btn);
// })