class Regisztracio {
    #nev;
    #jelszo;

    constructor(nev, jelszo) {
        this.#nev = nev;
        this.#jelszo = jelszo;
    }

    get nev() {
        return this.#nev;
    }

    get jelszo() {
        return  this.#jelszo;
    }
}



function usernevSzinezes() {
    let hossz = document.getElementById("nevhossz");
    if(hossz.value > 20)
    {   
        
        document.classList.add("hibas");
    }
}

function jelszoSzinezes() {
    let hossz = document.getElementById("jelszohossz");
    if(hossz.value < 8)
    {   
        
        document.classList.add("hibas");
    }
}

function jelszoIsmetles() {
    jelszo = document.getElementById("jelszo");
    ismetles = document.getElementById("jelszo_ujra");
    if(jelszo != ismetles) {
        document.getElementById("hiba").innerHTML = "Nem egyezik";
        
    } else {
        document.getElementById("hiba").innerHTML = "";
    }
}

function usernevHossz() {
    let userHossz = document.getElementById("nev").value.length;
    document.getElementById("nevhossz").innerHTML = userHossz;
}

function jelszoHossz() {
    let jelszoHossz = document.getElementById("jelszo").value.length;
    document.getElementById("jelszohossz").innerHTML = jelszoHossz;  
}

function init() {
    document.getElementById("nev").addEventListener("input", usernevHossz);
    document.getElementById("jelszo").addEventListener("input", jelszoHossz);
    document.getElementById("nevhossz").addEventListener("keyup", usernevSzinezes);
    document.getElementById("jelszohossz").addEventListener("keyup", jelszoSzinezes);
    document.getElementById("jelszo_ujra").addEventListener("mouseout", jelszoIsmetles);
}

document.addEventListener("DOMContentLoaded", init);