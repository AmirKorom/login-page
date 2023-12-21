class formValidator{

constructor(elem){

var form = $(elem);

form.addEventListener("input",(event)=>{

var elemsInForm = event.target.id;

console.log(`#${elemsInForm}`);

switch(elemsInForm){

case "name": var name = $(`#${elemsInForm}`); var nameV = name.value.length; 
break;
case "family": var family = $(`#${elemsInForm}`); var familyV = family.value.length;

}

if(nameV<=2||nameV>=20){

var nameValidId = form.childNodes;

console.log(nameValidId);

var nameValid = $(`#${nameValidId}`);

nameValid.innerHTML="adslkjf";

}

if(familyV<=2||familyV>=20){

    var familyValidId = family.nextSibling.nodeType;

    console.log(familyValidId);

var familyValid = $(`#${familyValidId}`);

familyValid.innerHTML="adslkjf";

    }

})

}

}

var $ = function(elem){

var elemS1 = elem.slice(0,1);

var elemS2 = elem.slice(elem.length-(elem.length-1),elem.length+1);

console.log(elemS2);

if(elemS1 == "#"){

return document.getElementById(elemS2);

}

};

var fv = new formValidator("#form");

function put(value){

console.log(value);

document.getElementById("nameValid").innerHTML=value;

}
