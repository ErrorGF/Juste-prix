
var nb_coup = 0;
var nb = Math.floor(100*Math.random());

//alert(nb); // pour voir la solution

function jeux (){
    var nombre = document.getElementById('solution').value;
    
    nb_coup++;
    
    if(nombre < nb) { // c'est plus 
        alert("c'est plus");
        document.getElementById('solution').value = '';
    }
    if(nombre > nb) { // c'est moins
        alert("c'est moins ");
        document.getElementById('solution').value = '';
    }
    if(nombre == nb) { // La personne a gagné 
        alert("Bravo , le nombre était "+ nb +" Tu as gagné en "+ nb_coup +" coup(s)");
        var image_gagne = document.getElementById("gagne");
        image_gagne.src = "images.jpg";
    }
}
