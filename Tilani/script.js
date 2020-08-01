var i = 0;

var name = "Manage your physical stores, marketplace sales and e-commerce from a single program.";

function typeName(){
    var nameBlock = document.getElementById("demo");
    nameBlock.innerHTML += name.charAt(i);
    i+= 1;
    setTimeout(typeName, 50)
}

document.body.onload = typeName