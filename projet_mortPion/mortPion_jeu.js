
//-------------------------------HTML Elements----------------------

// jeu :
let a1 = document.getElementById('case_A1'); let a2 = document.getElementById('case_A2'); let a3 = document.getElementById('case_A3'); let a4 = document.getElementById('case_A4'); let a5 = document.getElementById('case_A5'); let a6 = document.getElementById('case_A6'); let a7 = document.getElementById('case_A7'); let a8 = document.getElementById('case_A8'); let a9 = document.getElementById('case_A9');
let b1 = document.getElementById('case_B1'); let b2 = document.getElementById('case_B2'); let b3 = document.getElementById('case_B3'); let b4 = document.getElementById('case_B4'); let b5 = document.getElementById('case_B5'); let b6 = document.getElementById('case_B6'); let b7 = document.getElementById('case_B7'); let b8 = document.getElementById('case_B8'); let b9 = document.getElementById('case_B9');
let c1 = document.getElementById('case_C1'); let c2 = document.getElementById('case_C2'); let c3 = document.getElementById('case_C3'); let c4 = document.getElementById('case_C4'); let c5 = document.getElementById('case_C5'); let c6 = document.getElementById('case_C6'); let c7 = document.getElementById('case_C7'); let c8 = document.getElementById('case_C8'); let c9 = document.getElementById('case_C9');
let d1 = document.getElementById('case_D1'); let d2 = document.getElementById('case_D2'); let d3 = document.getElementById('case_D3'); let d4 = document.getElementById('case_D4'); let d5 = document.getElementById('case_D5'); let d6 = document.getElementById('case_D6'); let d7 = document.getElementById('case_D7'); let d8 = document.getElementById('case_D8'); let d9 = document.getElementById('case_D9');
let e1 = document.getElementById('case_E1'); let e2 = document.getElementById('case_E2'); let e3 = document.getElementById('case_E3'); let e4 = document.getElementById('case_E4'); let e5 = document.getElementById('case_E5'); let e6 = document.getElementById('case_E6'); let e7 = document.getElementById('case_E7'); let e8 = document.getElementById('case_E8'); let e9 = document.getElementById('case_E9');
let f1 = document.getElementById('case_F1'); let f2 = document.getElementById('case_F2'); let f3 = document.getElementById('case_F3'); let f4 = document.getElementById('case_F4'); let f5 = document.getElementById('case_F5'); let f6 = document.getElementById('case_F6'); let f7 = document.getElementById('case_F7'); let f8 = document.getElementById('case_F8'); let f9 = document.getElementById('case_F9');
let g1 = document.getElementById('case_G1'); let g2 = document.getElementById('case_G2'); let g3 = document.getElementById('case_G3'); let g4 = document.getElementById('case_G4'); let g5 = document.getElementById('case_G5'); let g6 = document.getElementById('case_G6'); let g7 = document.getElementById('case_G7'); let g8 = document.getElementById('case_G8'); let g9 = document.getElementById('case_G9');
let h1 = document.getElementById('case_H1'); let h2 = document.getElementById('case_H2'); let h3 = document.getElementById('case_H3'); let h4 = document.getElementById('case_H4'); let h5 = document.getElementById('case_H5'); let h6 = document.getElementById('case_H6'); let h7 = document.getElementById('case_H7'); let h8 = document.getElementById('case_H8'); let h9 = document.getElementById('case_H9');
let i1 = document.getElementById('case_I1'); let i2 = document.getElementById('case_I2'); let i3 = document.getElementById('case_I3'); let i4 = document.getElementById('case_I4'); let i5 = document.getElementById('case_I5'); let i6 = document.getElementById('case_I6'); let i7 = document.getElementById('case_I7'); let i8 = document.getElementById('case_I8'); let i9 = document.getElementById('case_I9');

let jeu_1 = document.getElementById('jeu_1');
let jeu_2 = document.getElementById('jeu_2');
let jeu_3 = document.getElementById('jeu_3');
let jeu_4 = document.getElementById('jeu_4');
let jeu_5 = document.getElementById('jeu_5');
let jeu_6 = document.getElementById('jeu_6');
let jeu_7 = document.getElementById('jeu_7');
let jeu_8 = document.getElementById('jeu_8');
let jeu_9 = document.getElementById('jeu_9');

let tab_jeu = [jeu_1,jeu_2,jeu_3,jeu_4,jeu_5,jeu_6,jeu_7,jeu_8,jeu_9];

let jeu_princ = document.getElementById('jeu');

let jeu_sec = document.getElementById('jeu_sec');
let s1 = document.getElementById('case_S1'); let s2 = document.getElementById('case_S2'); let s3 = document.getElementById('case_S3'); let s4 = document.getElementById('case_S4'); let s5 = document.getElementById('case_S5'); let s6 = document.getElementById('case_S6'); let s7 = document.getElementById('case_S7'); let s8 = document.getElementById('case_S8'); let s9 = document.getElementById('case_S9');
let tab_s = [s1,s2,s3,s4,s5,s6,s7,s8,s9];

let jeu_min = document.getElementById('jeu_mini');
let m1 = document.getElementById('case_M1'); let m2 = document.getElementById('case_M2'); let m3 = document.getElementById('case_M3'); let m4 = document.getElementById('case_M4'); let m5 = document.getElementById('case_M5'); let m6 = document.getElementById('case_M6'); let m7 = document.getElementById('case_M7'); let m8 = document.getElementById('case_M8'); let m9 = document.getElementById('case_M9');

let revenir = document.getElementById('revenir');

// Options
let menu_options = document.getElementById('menu_options');
let boutton_menu = document.getElementById('boutton_menu');
let nouvelle_partie = document.getElementById('newGame');
let ordinateur = document.getElementById('ordi');

// accessoires :
let choix_zone = document.getElementById('zone');
let choix_couleur = document.getElementById('choix_couleur');
let valider_couleur = document.getElementById('entrer_choix');


// ------------------Classes----------------------

class Case{
    constructor(couleur,secteur,num,html) {
        this.c=couleur; // 0 : Blanc ,  1: Bleu ,  2: Rouge
        this.sec=secteur; // 1:A,B,C..
        this.num=num; //1,2,3...
        this.html=html;
    }

    change_couleur(c){
        if (this.c == 0) {
            this.c = c;
        }
    }


}


class jeu_i{
    constructor(secteur,fini,cases,html) {
        this.fini = fini; // 0 : non ,  1: Bleu ,  2: Rouge
        this.sec=secteur; // 1:A,2:B,3:C..
        this.cases = cases;
        this.html = html;
    }

    jeu_fini(){
        return this.fini != 0;
    }

    jeu_complet() {
        return (this.cases[0].c != 0 && this.cases[1].c != 0 && this.cases[2].c != 0 && this.cases[3].c != 0 && this.cases[4].c != 0 && this.cases[5].c != 0 && this.cases[6].c != 0 && this.cases[7].c != 0 && this.cases[8].c != 0)
    }
}


// ----------------------------- Variables globales ------------------------------

let tour = 0; // 0: bleu 1: rouge
let sect= -1;
let carreNULL =  new Case(0,-1,-1,null);
let DernierCoup = [carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,
    carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,
    carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,
    carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,
    carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,
    carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL,carreNULL]
var iDernier = -1;
let couleur_fond = "401d40" ;
var ordiON = false;

//--------------------------Fonctions de jeu-------------------

function jeuVide(){
    let le_jeu = [];
    let cases_jeu_1 = []; cases_jeu_1.push(new Case(0,1,1,a1));cases_jeu_1.push(new Case(0,1,2,a2));cases_jeu_1.push(new Case(0,1,3,a3));cases_jeu_1.push(new Case(0,1,4,a4));cases_jeu_1.push(new Case(0,1,5,a5));cases_jeu_1.push(new Case(0,1,6,a6));cases_jeu_1.push(new Case(0,1,7,a7));cases_jeu_1.push(new Case(0,1,8,a8));cases_jeu_1.push(new Case(0,1,9,a9));
    let cases_jeu_2 = []; cases_jeu_2.push(new Case(0,2,1,b1));cases_jeu_2.push(new Case(0,2,2,b2));cases_jeu_2.push(new Case(0,2,3,b3));cases_jeu_2.push(new Case(0,2,4,b4));cases_jeu_2.push(new Case(0,2,5,b5));cases_jeu_2.push(new Case(0,2,6,b6));cases_jeu_2.push(new Case(0,2,7,b7));cases_jeu_2.push(new Case(0,2,8,b8));cases_jeu_2.push(new Case(0,2,9,b9));
    let cases_jeu_3 = []; cases_jeu_3.push(new Case(0,3,1,c1));cases_jeu_3.push(new Case(0,3,2,c2));cases_jeu_3.push(new Case(0,3,3,c3));cases_jeu_3.push(new Case(0,3,4,c4));cases_jeu_3.push(new Case(0,3,5,c5));cases_jeu_3.push(new Case(0,3,6,c6));cases_jeu_3.push(new Case(0,3,7,c7));cases_jeu_3.push(new Case(0,3,8,c8));cases_jeu_3.push(new Case(0,3,9,c9));
    let cases_jeu_4 = []; cases_jeu_4.push(new Case(0,4,1,d1));cases_jeu_4.push(new Case(0,4,2,d2));cases_jeu_4.push(new Case(0,4,3,d3));cases_jeu_4.push(new Case(0,4,4,d4));cases_jeu_4.push(new Case(0,4,5,d5));cases_jeu_4.push(new Case(0,4,6,d6));cases_jeu_4.push(new Case(0,4,7,d7));cases_jeu_4.push(new Case(0,4,8,d8));cases_jeu_4.push(new Case(0,4,9,d9));
    let cases_jeu_5 = []; cases_jeu_5.push(new Case(0,5,1,e1));cases_jeu_5.push(new Case(0,5,2,e2));cases_jeu_5.push(new Case(0,5,3,e3));cases_jeu_5.push(new Case(0,5,4,e4));cases_jeu_5.push(new Case(0,5,5,e5));cases_jeu_5.push(new Case(0,5,6,e6));cases_jeu_5.push(new Case(0,5,7,e7));cases_jeu_5.push(new Case(0,5,8,e8));cases_jeu_5.push(new Case(0,5,9,e9));
    let cases_jeu_6 = []; cases_jeu_6.push(new Case(0,6,1,f1));cases_jeu_6.push(new Case(0,6,2,f2));cases_jeu_6.push(new Case(0,6,3,f3));cases_jeu_6.push(new Case(0,6,4,f4));cases_jeu_6.push(new Case(0,6,5,f5));cases_jeu_6.push(new Case(0,6,6,f6));cases_jeu_6.push(new Case(0,6,7,f7));cases_jeu_6.push(new Case(0,6,8,f8));cases_jeu_6.push(new Case(0,6,9,f9));
    let cases_jeu_7 = []; cases_jeu_7.push(new Case(0,7,1,g1));cases_jeu_7.push(new Case(0,7,2,g2));cases_jeu_7.push(new Case(0,7,3,g3));cases_jeu_7.push(new Case(0,7,4,g4));cases_jeu_7.push(new Case(0,7,5,g5));cases_jeu_7.push(new Case(0,7,6,g6));cases_jeu_7.push(new Case(0,7,7,g7));cases_jeu_7.push(new Case(0,7,8,g8));cases_jeu_7.push(new Case(0,7,9,g9));
    let cases_jeu_8 = []; cases_jeu_8.push(new Case(0,8,1,h1));cases_jeu_8.push(new Case(0,8,2,h2));cases_jeu_8.push(new Case(0,8,3,h3));cases_jeu_8.push(new Case(0,8,4,h4));cases_jeu_8.push(new Case(0,8,5,h5));cases_jeu_8.push(new Case(0,8,6,h6));cases_jeu_8.push(new Case(0,8,7,h7));cases_jeu_8.push(new Case(0,8,8,h8));cases_jeu_8.push(new Case(0,8,9,h9));
    let cases_jeu_9 = []; cases_jeu_9.push(new Case(0,9,1,i1));cases_jeu_9.push(new Case(0,9,2,i2));cases_jeu_9.push(new Case(0,9,3,i3));cases_jeu_9.push(new Case(0,9,4,i4));cases_jeu_9.push(new Case(0,9,5,i5));cases_jeu_9.push(new Case(0,9,6,i6));cases_jeu_9.push(new Case(0,9,7,i7));cases_jeu_9.push(new Case(0,9,8,i8));cases_jeu_9.push(new Case(0,9,9,i9));

    le_jeu.push(new jeu_i(1,0,cases_jeu_1,jeu_1));
    le_jeu.push(new jeu_i(2,0,cases_jeu_2,jeu_2));
    le_jeu.push(new jeu_i(3,0,cases_jeu_3,jeu_3));
    le_jeu.push(new jeu_i(4,0,cases_jeu_4,jeu_4));
    le_jeu.push(new jeu_i(5,0,cases_jeu_5,jeu_5));
    le_jeu.push(new jeu_i(6,0,cases_jeu_6,jeu_6));
    le_jeu.push(new jeu_i(7,0,cases_jeu_7,jeu_7));
    le_jeu.push(new jeu_i(8,0,cases_jeu_8,jeu_8));
    le_jeu.push(new jeu_i(9,0,cases_jeu_9,jeu_9));
    return le_jeu;
}

let le_jeu = jeuVide();

function jeuSecVide(){
    let le_jeu_sec = [];le_jeu_sec.push(new Case(0,-1,1,s1));le_jeu_sec.push(new Case(0,-1,2,s2));le_jeu_sec.push(new Case(0,-1,3,s3));le_jeu_sec.push(new Case(0,-1,4,s4));le_jeu_sec.push(new Case(0,-1,5,s5));le_jeu_sec.push(new Case(0,-1,6,s6));le_jeu_sec.push(new Case(0,-1,7,s7));le_jeu_sec.push(new Case(0,-1,8,s8));le_jeu_sec.push(new Case(0,-1,9,s9));

    return le_jeu_sec;
}

let le_jeu_sec = jeuSecVide();

function jeuMinVide(){
    let le_jeu_min = []; le_jeu_min.push(new Case(0,-1,1,m1));le_jeu_min.push(new Case(0,-1,2,m2));le_jeu_min.push(new Case(0,-1,3,m3));le_jeu_min.push(new Case(0,-1,4,m4));le_jeu_min.push(new Case(0,-1,5,m5));le_jeu_min.push(new Case(0,-1,6,m6));le_jeu_min.push(new Case(0,-1,7,m7));le_jeu_min.push(new Case(0,-1,8,m8));le_jeu_min.push(new Case(0,-1,9,m9));


    return le_jeu_min;
}

let le_jeu_min = jeuMinVide();




function peut_jouer(carre,s) {
    return (carre.c == 0 && (s == sect || sect == -1));    
}



function prochain_secteur(carre) {
    if (carre.num == 1) {
        return le_jeu[0];
    }
    else if (carre.num == 2) {
        return le_jeu[1];
    }
    else if (carre.num == 3) {
        return le_jeu[2];
    }
    else if (carre.num == 4) {
        return le_jeu[3];
    }
    else if (carre.num == 5) {
        return le_jeu[4];
    }
    else if (carre.num == 6) {
        return le_jeu[5];
    }
    else if (carre.num == 7) {
        return le_jeu[6];
    }
    else if (carre.num == 8) {
        return le_jeu[7];
    }
    else if (carre.num == 9) {
        return le_jeu[8];
    }
}




function changer_couleur(carre,c) {
    carre.c = c;
    if (c == 1) {
        carre.html.style.backgroundColor = 'blue';
    }
    else if (c == 2) {
        carre.html.style.backgroundColor = 'red';
    }
    else {
        carre.html.style.backgroundColor = 'white';
    }
}

function afficher_jeu_i(s) {
    for (let i = 0; i<9;i++) {
        changer_couleur(le_jeu_sec[i],le_jeu[s-1].cases[i].c);
        
    }
    if (s == 1) {
        s5.textContent = "A";
    }
    if (s == 2) {
        s5.textContent = "B";
    }
    if (s == 3) {
        s5.textContent = "C";
    }
    if (s == 4) {
        s5.textContent = "D";
    }
    if (s == 5) {
        s5.textContent = "E";
    }
    if (s == 6) {
        s5.textContent = "F";
    }
    if (s == 7) {
        s5.textContent = "G";
    }
    if (s == 8) {
        s5.textContent = "H";
    }
    if (s == 9) {
        s5.textContent = "I";
    }
}


function jouer(carre,c) {
    if (peut_jouer(carre,carre.sec)) {
        changer_couleur(carre,c);
        if (coup_gagnant(carre,tour)){
            changer_couleur(le_jeu_min[carre.sec-1],tour+1);
        }
        tour = 1-tour;
        sect = prochain_secteur(carre).sec;
        afficher_jeu_i(sect);
        if (le_jeu[carre.num-1].jeu_complet()) {
            sect = -1;
        }
        tab_jeu[carre.sec-1].style.backgroundColor = 'green';
        tab_jeu[carre.num -1].style.backgroundColor = 'red';
        iDernier = iDernier + 1;
        DernierCoup[iDernier] = carre;
        if (tour == 1 && ordiON) {
            
            setTimeout(jouer_ordi, 500,le_jeu[prochain_secteur(carre).sec - 1]);
        }
        
        
    }
}

function jouer_annexe(carre,c) {
    if (peut_jouer(carre,sect)) {
        jouer(le_jeu[sect-1].cases[carre.num-1],c);
    }
}

function coup_gagnant(carre,tour) {
    if (!le_jeu[carre.sec-1].jeu_fini()) {
        if (le_jeu[carre.sec-1].cases[0].c == tour+1 && le_jeu[carre.sec-1].cases[1].c == tour+1 && le_jeu[carre.sec-1].cases[2].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[3].c == tour+1 && le_jeu[carre.sec-1].cases[4].c == tour+1 && le_jeu[carre.sec-1].cases[5].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[6].c == tour+1 && le_jeu[carre.sec-1].cases[7].c == tour+1 && le_jeu[carre.sec-1].cases[8].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[2].c == tour+1 && le_jeu[carre.sec-1].cases[5].c == tour+1 && le_jeu[carre.sec-1].cases[8].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[0].c == tour+1 && le_jeu[carre.sec-1].cases[3].c == tour+1 && le_jeu[carre.sec-1].cases[6].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[1].c == tour+1 && le_jeu[carre.sec-1].cases[4].c == tour+1 && le_jeu[carre.sec-1].cases[7].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[0].c == tour+1 && le_jeu[carre.sec-1].cases[4].c == tour+1 && le_jeu[carre.sec-1].cases[8].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
        else if (le_jeu[carre.sec-1].cases[2].c == tour+1 && le_jeu[carre.sec-1].cases[4].c == tour+1 && le_jeu[carre.sec-1].cases[6].c == tour+1) {
            le_jeu[carre.sec-1].fini = tour+1;
            return true;
        }
    }
    return false;
}

function coup_precedent() {
    if (DernierCoup[iDernier].sec > 0 && iDernier >=0) {
        DernierCoup[iDernier].html.style.backgroundColor = "white";
        DernierCoup[iDernier].c = 0;
        sect = DernierCoup[iDernier].sec;
        afficher_jeu_i(sect);
        tour = 1-tour;
        DernierCoup[iDernier] = carreNULL;
        iDernier = iDernier - 1;
    }
}

//--------------------------Fonctions Ordi-------------------

function nb_bleu_rouge(sec,col) {
    let nb = 0;
    for (let i=0;i<9;i++) {
        if (le_jeu[sec-1].cases[i].c == col) {
            nb = nb+1;
        }
    }
    return nb;
}

function heu(jeui) { // renvoie un tableau avec les heuristiques de chaque case de jeui (plus h[i] est petit plus il faut jouer en i)
    let h = [10,10,10,10,10,10,10,10,10];
    for (let i = 0; i<9; i++) {
        // si la case est déjà coloriée, val max
        if (jeui.cases[i].c == 2 && jeui.fini == 0) {
            h[i] = h[i] + 200;
            // Les cases à côté d'une case rouge sont intéressantes

            if (i <6) {
                h[i+3] = h[i+3] -5;
            }
            if (i > 2) {
                h[i-3] = h[i-3] -5;
            }
            if (i % 3 != 0) {
                h[i-1] = h[i-1] -5;
            }
            if (i % 3 == 0) {
                h[i+1] = h[i+1] -5;
            }
            if (i == 1 || i == 4 || i == 7) {
                h[i+1] = h[i+1] -5;
            }
        }
        else if (jeui.cases[i].c != 0) {
            h[i] = h[i] + 200;
        }
        else {
            // si la case est gagnante pour rouge, -9, pour bleu , -7
            changer_couleur(jeui.cases[i],2);
            if (coup_gagnant(jeui.cases[i],tour)) {
                jeui.fini = 0;
                changer_couleur(jeui.cases[i],0);
                h[i] = h[i]-9;
            }
            changer_couleur(jeui.cases[i],0);
            changer_couleur(jeui.cases[i],1);
            if (coup_gagnant(jeui.cases[i],1-tour)) {
                jeui.fini = 0;
                changer_couleur(jeui.cases[i],0);
                h[i] = h[i]-7;
            }
            changer_couleur(jeui.cases[i],0);
        }

        //sinon, calcul d'une heuristique
        h[i] = h[i] + nb_bleu_rouge(jeui.cases[i].num,1) + nb_bleu_rouge(jeui.cases[i].num,2);
    }
    return h;
}

function jouer_ordi(jeui) {
    let min = 301;
    let sect_min  = jeui.sec;
    let case_min = -1;
    

    if (jeui.jeu_complet()) {
        let h_min = [];
        let tab_case_min = [];
        let h = [];
        for (let i = 0; i < 9; i++) {
            h_min[i] = 301;
            if (le_jeu[i].jeu_complet()) {
                h_min[i] = 300;
            }
            else {
                h = heu(le_jeu[i]);
                for (let j = 0; j<9;j++) {
                    if (h[j] < h_min[i]) {
                        tab_case_min[i] = j;
                        h_min[i] = h[j];
                    }
                }
            }
        }
        for (let k = 0; k<9; k++) {
            if (h_min[k] < min) {
                case_min = tab_case_min[k];
                min = h_min[k];
                sect_min = k+1;
            }
        }
    }
    
    // Calcul des heuristiques de chaque case
    else {
        let h = [];
        h = heu(jeui);

        // Récupérer la valeur minimale
    
        for (let j = 0; j<9;j++) {
            if (h[j] < min) {
                case_min = j;
                min = h[j];
            }
        }
    }
    

    jouer(le_jeu[sect_min-1].cases[case_min],tour+1);

}


// Evenements ---------------------------------

// jeu :
a1.onclick = function() {jouer(le_jeu[0].cases[0],tour+1)};a2.onclick = function() {jouer(le_jeu[0].cases[1],tour+1)};a3.onclick = function() {jouer(le_jeu[0].cases[2],tour+1)};a4.onclick = function() {jouer(le_jeu[0].cases[3],tour+1)};a5.onclick = function() {jouer(le_jeu[0].cases[4],tour+1)};a6.onclick = function() {jouer(le_jeu[0].cases[5],tour+1)};a7.onclick = function() {jouer(le_jeu[0].cases[6],tour+1)};a8.onclick = function() {jouer(le_jeu[0].cases[7],tour+1)};a9.onclick = function() {jouer(le_jeu[0].cases[8],tour+1)};
b1.onclick = function() {jouer(le_jeu[1].cases[0],tour+1)};b2.onclick = function() {jouer(le_jeu[1].cases[1],tour+1)};b3.onclick = function() {jouer(le_jeu[1].cases[2],tour+1)};b4.onclick = function() {jouer(le_jeu[1].cases[3],tour+1)};b5.onclick = function() {jouer(le_jeu[1].cases[4],tour+1)};b6.onclick = function() {jouer(le_jeu[1].cases[5],tour+1)};b7.onclick = function() {jouer(le_jeu[1].cases[6],tour+1)};b8.onclick = function() {jouer(le_jeu[1].cases[7],tour+1)};b9.onclick = function() {jouer(le_jeu[1].cases[8],tour+1)};
c1.onclick = function() {jouer(le_jeu[2].cases[0],tour+1)};c2.onclick = function() {jouer(le_jeu[2].cases[1],tour+1)};c3.onclick = function() {jouer(le_jeu[2].cases[2],tour+1)};c4.onclick = function() {jouer(le_jeu[2].cases[3],tour+1)};c5.onclick = function() {jouer(le_jeu[2].cases[4],tour+1)};c6.onclick = function() {jouer(le_jeu[2].cases[5],tour+1)};c7.onclick = function() {jouer(le_jeu[2].cases[6],tour+1)};c8.onclick = function() {jouer(le_jeu[2].cases[7],tour+1)};c9.onclick = function() {jouer(le_jeu[2].cases[8],tour+1)};
d1.onclick = function() {jouer(le_jeu[3].cases[0],tour+1)};d2.onclick = function() {jouer(le_jeu[3].cases[1],tour+1)};d3.onclick = function() {jouer(le_jeu[3].cases[2],tour+1)};d4.onclick = function() {jouer(le_jeu[3].cases[3],tour+1)};d5.onclick = function() {jouer(le_jeu[3].cases[4],tour+1)};d6.onclick = function() {jouer(le_jeu[3].cases[5],tour+1)};d7.onclick = function() {jouer(le_jeu[3].cases[6],tour+1)};d8.onclick = function() {jouer(le_jeu[3].cases[7],tour+1)};d9.onclick = function() {jouer(le_jeu[3].cases[8],tour+1)};
e1.onclick = function() {jouer(le_jeu[4].cases[0],tour+1)};e2.onclick = function() {jouer(le_jeu[4].cases[1],tour+1)};e3.onclick = function() {jouer(le_jeu[4].cases[2],tour+1)};e4.onclick = function() {jouer(le_jeu[4].cases[3],tour+1)};e5.onclick = function() {jouer(le_jeu[4].cases[4],tour+1)};e6.onclick = function() {jouer(le_jeu[4].cases[5],tour+1)};e7.onclick = function() {jouer(le_jeu[4].cases[6],tour+1)};e8.onclick = function() {jouer(le_jeu[4].cases[7],tour+1)};e9.onclick = function() {jouer(le_jeu[4].cases[8],tour+1)};
f1.onclick = function() {jouer(le_jeu[5].cases[0],tour+1)};f2.onclick = function() {jouer(le_jeu[5].cases[1],tour+1)};f3.onclick = function() {jouer(le_jeu[5].cases[2],tour+1)};f4.onclick = function() {jouer(le_jeu[5].cases[3],tour+1)};f5.onclick = function() {jouer(le_jeu[5].cases[4],tour+1)};f6.onclick = function() {jouer(le_jeu[5].cases[5],tour+1)};f7.onclick = function() {jouer(le_jeu[5].cases[6],tour+1)};f8.onclick = function() {jouer(le_jeu[5].cases[7],tour+1)};f9.onclick = function() {jouer(le_jeu[5].cases[8],tour+1)};
g1.onclick = function() {jouer(le_jeu[6].cases[0],tour+1)};g2.onclick = function() {jouer(le_jeu[6].cases[1],tour+1)};g3.onclick = function() {jouer(le_jeu[6].cases[2],tour+1)};g4.onclick = function() {jouer(le_jeu[6].cases[3],tour+1)};g5.onclick = function() {jouer(le_jeu[6].cases[4],tour+1)};g6.onclick = function() {jouer(le_jeu[6].cases[5],tour+1)};g7.onclick = function() {jouer(le_jeu[6].cases[6],tour+1)};g8.onclick = function() {jouer(le_jeu[6].cases[7],tour+1)};g9.onclick = function() {jouer(le_jeu[6].cases[8],tour+1)};
h1.onclick = function() {jouer(le_jeu[7].cases[0],tour+1)};h2.onclick = function() {jouer(le_jeu[7].cases[1],tour+1)};h3.onclick = function() {jouer(le_jeu[7].cases[2],tour+1)};h4.onclick = function() {jouer(le_jeu[7].cases[3],tour+1)};h5.onclick = function() {jouer(le_jeu[7].cases[4],tour+1)};h6.onclick = function() {jouer(le_jeu[7].cases[5],tour+1)};h7.onclick = function() {jouer(le_jeu[7].cases[6],tour+1)};h8.onclick = function() {jouer(le_jeu[7].cases[7],tour+1)};h9.onclick = function() {jouer(le_jeu[7].cases[8],tour+1)};
i1.onclick = function() {jouer(le_jeu[8].cases[0],tour+1)};i2.onclick = function() {jouer(le_jeu[8].cases[1],tour+1)};i3.onclick = function() {jouer(le_jeu[8].cases[2],tour+1)};i4.onclick = function() {jouer(le_jeu[8].cases[3],tour+1)};i5.onclick = function() {jouer(le_jeu[8].cases[4],tour+1)};i6.onclick = function() {jouer(le_jeu[8].cases[5],tour+1)};i7.onclick = function() {jouer(le_jeu[8].cases[6],tour+1)};i8.onclick = function() {jouer(le_jeu[8].cases[7],tour+1)};i9.onclick = function() {jouer(le_jeu[8].cases[8],tour+1)};

s1.onclick = function() {jouer_annexe(le_jeu_sec[0],tour+1)};s2.onclick = function() {jouer_annexe(le_jeu_sec[1],tour+1)};s3.onclick = function() {jouer_annexe(le_jeu_sec[2],tour+1)};s4.onclick = function() {jouer_annexe(le_jeu_sec[3],tour+1)};s5.onclick = function() {jouer_annexe(le_jeu_sec[4],tour+1)};s6.onclick = function() {jouer_annexe(le_jeu_sec[5],tour+1)};s7.onclick = function() {jouer_annexe(le_jeu_sec[6],tour+1)};s8.onclick = function() {jouer_annexe(le_jeu_sec[7],tour+1)};s9.onclick = function() {jouer_annexe(le_jeu_sec[8],tour+1)};

revenir.onclick = function() {coup_precedent()};
boutton_menu.onclick = function() {
    menu_options.hidden = !(menu_options.hidden);
}
ordinateur.onclick = function() {
    if (ordiON) {
        ordiON = false;
        ordinateur.textContent = "Ordinateur OFF";
    }
    else {
        ordiON = true;
        ordinateur.textContent = "Ordinateur ON";
    }
}

nouvelle_partie.onclick = function() {window.location.reload()};

// accessoires :
valider_couleur.onclick = function() {
    if (choix_zone.value == "fond"){
        document.body.style.backgroundColor = "#"+choix_couleur.value;
    }
    else if (choix_zone.value == "tableau"){
        jeu_princ.style.backgroundColor = "#"+choix_couleur.value;
    }
}
