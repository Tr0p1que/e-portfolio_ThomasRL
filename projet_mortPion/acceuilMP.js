
let titre = document.getElementById('titre');
let click = document.getElementById('click');
let boutton_jouer = document.getElementById('jouer');
let boutton_alea = document.getElementById('boutton_alea');
let fond = document.getElementById('fond');
let la_fete = document.getElementById('la_fete');
let stopper = document.getElementById('stopper');
var x;

function couleur_alea_text(objet) {
    objet.style.color = "#"+
    ((Math.floor(Math.random() * 255)).toString(16))+
    ((Math.floor(Math.random() * 255)).toString(16))+
    ((Math.floor(Math.random() * 255)).toString(16));
}

function couleur_alea_fond(objet) {
    objet.style.backgroundColor = "#"+
    ((Math.floor(Math.random() * 255)).toString(16))+
    ((Math.floor(Math.random() * 255)).toString(16))+
    ((Math.floor(Math.random() * 255)).toString(16));
}

function couleur_alea_tout() {
    couleur_alea_fond(document.body);
    couleur_alea_text(titre); 
    couleur_alea_fond(boutton_jouer)
}

click.onclick = function() {couleur_alea_tout()};

titre.onclick = function() {couleur_alea_text(titre)};
boutton_alea.onclick = function() {couleur_alea_fond(boutton_jouer)};
fond.onclick = function() {couleur_alea_fond(document.body)};
la_fete.onclick = function() {
    x = setInterval(couleur_alea_tout,500);
}
stopper.onclick = function() {
    clearInterval(x);
}