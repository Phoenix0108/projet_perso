// Fondu (général)


const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})


// Vérification (quiz)


function score(){

    var s=4;
    


    // checkbox

    var Rep1 = document.getElementById('Fernando Menendez')
    var Rep2 = document.getElementById('Sebastian Vettel')
    var Rep3 = document.getElementById('Carlos Sainz JR')
    var Rep4 = document.getElementById('Lewis Hamilton')

    if(Rep2.checked){s=s+1}
    if(Rep4.checked){s=s+1}
    if(Rep3.checked){s=s-1}
    if(Rep1.checked){s=s-1}
    
    //Menu déroulant


    var select = document.getElementById('optin');
    var choice = select.selectedIndex;
    var text =  select.options[choice].value;


    if(text == 'Est') {
        {s=s}
    }
    
    if(text == 'Ouest') {
        {s=s-1}
    }

    // Champs de texte. Résultat attendu : 0

    let x = document.getElementById('Minecraft').value;


    if (isNaN(x) == 0){
        s = s
    }

    if (isNaN(x) || x > 0 || x < 0) {
        s = s - 1
    }

    alert('Votre score est de '+s+' points sur 6')


}

// Convertisseur de euro a dollar

function convertisseur () {
    
    // Cette fonction converti la valeur en euro en dollar américain.
    let x = document.getElementById('value').value;

    if (document.getElementById('usd').checked) {        


        g = 1.14 * x 

        document.getElementById("resultat").value = g;

    } 
    
    if (document.getElementById('euro').checked) {


        g = x / 1.14

        document.getElementById("resultat").value = g;


    }

}

//Fonction calcul

function Calcul() {
    
    entier = Number(document.getElementById("entier").value);
  
    let nb = entier.toString(document.getElementById('conv').value);

    document.getElementById("resultat1").value = nb;

}

//