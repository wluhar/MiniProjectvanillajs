let names=document.querySelector('#name');
let age=document.querySelector('#age');
let phonenbr=document.querySelector('#phone');

let btn=document.querySelector('#button');

// let named=names.addEventListener('keyup',(e)=>{
//     console.log(e.target.value);
// })
let newArr=[];
let valueof=(e)=>{
    e.preventDefault();
    let named=names.value;
    let aged=age.value;
    let phonenbrs=phonenbr.value;
     //console.log(named,aged,phonenbrs);
    // console.log(named);
//let newArr=[];

newArr.push([
        {
            Name:`${named}`,
            Age :`${aged}`,
            PhoneNumber:`${phonenbrs}`
        }
    ]);

  console.log(newArr.values);
  
    
}

btn.addEventListener('click',valueof)




