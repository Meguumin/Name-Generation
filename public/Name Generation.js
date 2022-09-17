
let First;
let Last;
let FullName;
let space = " ";

function CallAll() {
    GetName();
    GetLastName();
    Congregate();
}

function SetText(){  
  CallAll();
  document.getElementById("name").innerHTML = "Click To Generate";;
}

function GetName(){
  
  fetch('names.txt')   
  .then(response => response.text())   
  .then(data => {	
    
    const text = data; 
    data = text.split(/\r?\n/);  
    let name = Math.round(Math.random() * 18240);
    First = data[name]  
    
    
   // console.log(First)
  });
}


function GetLastName(){
  
  fetch('lastnames.txt')   
  .then(response => response.text())   
  .then(data => {	
    
    const text = data; 
    data = text.split(/\r?\n/);  
    let lastname = Math.round(Math.random() * 88800);
    Last = data[lastname];
   // console.log(Last)
  });
}

function Congregate(){
  FullName = First + space + Last;
  document.getElementById("name").innerHTML = FullName;
  //console.log(FullName);
}


// function callHelperTest() {
  //  fetch("/helper_test");
     
  //}
  



