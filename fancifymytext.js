
function helloWorld(){
    alert("Hello, world!");
}

function bigger(){
    document.getElementById("inputText-1").style.fontSize = "24pt";
}

function fancy(){
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue"; 
    document.getElementById("inputText-1").style.textDecoration = "underline";
}

function boring(){
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black"; 
    document.getElementById("inputText-1").style.textDecoration = "none";
}

function moo(){
   const str = document.getElementById("inputText-1").value;
   const parts = str.split(" ");
   for(var i = 0; i < parts.length; i++){
        let part = parts[i].trim();
        part += "-Moo";
        parts[i] = part;
   }
   document.getElementById("inputText-1").value = parts.join(" ");
}