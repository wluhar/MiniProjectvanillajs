const form=document.querySelector('#addForm');
const itemList=document.querySelector('#items');


form.addEventListener('submit',addItem)

function addItem(e){

e.preventDefault();

let formvalue=document.querySelector('#item').value;

//let re=/[A-Za-z]/ -- try to use regex for this one

let re=/\S/;

let str=re.exec(formvalue);
console.log(str);
console.log(re.test(str));
// let a='';
// console.log(re.test(a));
if(re.test(str)){    
console.log(`submit button was pressed : ${formvalue}`);
}else{
    confirm(`${str} : ${formvalue} : ${re.source}` );
}

}