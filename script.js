var div=document.createElement('div');
div.style.textAlign='center';
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','id');
input.setAttribute('placeholder','Enter pokemon id');

var button=document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('class','btn btn-primary');
button.innerHTML='Search Pokemon';
button.addEventListener('click',foo);
let Name=document.createElement('div');
Name.setAttribute('id','name');
let Move=document.createElement('div');
Move.setAttribute('id','ability');
let Weight=document.createElement('div');
Weight.setAttribute('id','weight');
div.append(input,button,Name,Weight);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById('id').value;   
    let url=`https://pokeapi.co/api/v2/pokemon/${res}`;   

    let result=await fetch(url);  
    let result1=await result.json();  
    console.log(result1.name);   
    Name.innerHTML=`Pokemon Name: ${result1.name}`  
    console.log(result1.weight);
    Weight.innerHTML=`Pokemon Weight: ${result1.weight}`;
    
    }
    catch(error){
        console.log('Pokemon not found!!!')
    }
}