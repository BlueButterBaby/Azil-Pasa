var brojGresaka = 0;
window.onload = function(){
    let taster = document.querySelector("#bkSubmit");
    taster.addEventListener("click", obradaForme);
}

//Validacija forme

function obradaForme(){
    let ime = document.querySelector("#bkIme");
    let prezime = document.querySelector("#bkPrezime");
    let email = document.querySelector("#bkEmail");
    let phone = document.querySelector("#bkBrojtel");
    let polNiz = document.getElementsByName("bkRadioGroup");
    let zelja = document.querySelector("#dinamcikaDDL");
    let textPolje = document.querySelector("#bkTextarea");

    let regIme, regPrezime, regEmail, regPhone;

    regIme = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,13}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,13}){1,3}$/;
    regPrezime = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,16}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,16}){1,3}$/;
    regEmail = /^([a-z] | [0-9]){3,20}@(gmail | yahoo | hotmail)\.com$/; //Nisam siguran za ovu validaciju
    regPhone = /^([3816][0-9]{8,9} | [06][0-9]{8,9})$/;


    proveraIzraza(regIme, ime, "Ime nije u dobrom formatu, primer: Pera");
    proveraIzraza(regPrezime, prezime, "Prezime nije u dobrom formatu, primer: Perić");
    proveraIzraza(regEmail, email, "Email nije u dobrom formatu, primer: pera123@gmail.com");
    proveraIzraza(regPhone, phone, "Broj telefona nije u dobrom formatu, početi sa 3816 ili 06");

    let polVrednost = "";

    for(let i = 0; i < polNiz.length; i++){
        if(polNiz[i].checked){
            polVrednost = polNiz[i].value;
            break;
        }
    }

    proveraCekiranihElemenata(polVrednost, polNiz, "Morate izabrati pol.");

    let zeljaVrednost = zelja.options[zelja.selectedIndex].value;

    if(zeljaVrednost == "0"){
        zelja.nextElementSibling.classList.remove("bkHideElement");
        zelja.nextElementSibling.innerHTML = "Izaberite polje.";
        zelja.classList.add("bkRedBorder");
        brojGresaka++;
    }
    else{
        zelja.nextElementSibling.classList.add("bkHideElement");
        zelja.nextElementSibling.innerHTML = "";
        zelja.classList.remove("bkRedBorder");
    }
}


function proveraIzraza(regIzraz, vrednost, poruka){
    if(!regIzraz.test(vrednost.value)){
        vrednost.nextElementSibling.classList.remove("bkHideElement");
        vrednost.nextElementSibling.innerHTML = poruka;
        vrednost.classList.add("bkRedBorder");
        brojGresaka++;
    }
    else{
        vrednost.nextElementSibling.classList.add("bkHideElement");
        vrednost.nextElementSibling.innerHTML = "";
        vrednost.classList.remove("bkRedBorder");
    }
}

function proveraCekiranihElemenata(vrednostCekiranihElemenata, niz, poruka){
    if(vrednostCekiranihElemenata == ""){
        niz[0].parentElement.parentElement.nextElementSibling.classList.remove("bkHideElement");
        niz[0].parentElement.parentElement.nextElementSibling.innerHTML = poruka;
        niz[0].parentElement.parentElement.classList.add("bkRedBorder");
        brojGresaka++;
    }
    else{
        niz[0].parentElement.parentElement.nextElementSibling.classList.add("bkHideElement");
        niz[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
        niz[0].parentElement.parentElement.classList.remove("bkRedBorder");
    }
}


//Dinamicki ispis menija

let links = [
    {
        path: "index.html",
        text: "Početna",
        isActive: false
    },
    {
        path: "pomoc.html",
        text: "Kako pomoći",
        isActive: false
    },
    {
        path: "kontakt.html",
        text: "Kontakt",
        isActive: false
    },
    {
        path: "o-autoru.html",
        text: "O autoru",
        isActive: false
    }
]

var fullPath = window.location.pathname;
//console.log(fullPath);
pathName = fullPath.split("/").pop();
//console.log(pathName);


function napraviLink(link){
    if(pathName == "index.html"){
        link.isActive = true;
    }
    if(pathName == "pomoc.html"){
        isActive = true;
    }
    if(pathName == "kontakt.html"){
        isActive = true;
    }
    if(pathName == "o-autoru.html"){
        isActive = true;
    }
    let html = `<li class="nav-item"><a class="nav-link text-end fw-bold fs-4 bk-lightBlue`+ (link.isActive ? ' active"' + 'aria-current="page"' : `"`) + ` href = "` + link.path + `">` + link.text + `</a></li>`;
    return html;           
}

let meni = ""

for (let link of links){
    meni += napraviLink(link)
}

let navMeni = document.querySelector("#meni")

if(navMeni) {
    navMeni.innerHTML = meni
}

//Dinamicki ispis DDL

let izborOpcija = [
    {id: 0, name: "Izaberite..."},
    {id: 1, name: "Želim da saznam više"},
    {id: 2, name: "Želim da udomim životinju"},
    {id: 3, name: "Želim da doniram azilu"}
]

let ddlOpcija = document.querySelector("#dinamickaDDL");

let options = " ";

for(let o of izborOpcija){
    options+= `<option value="${o.id}">${o.name}</option>`;
}

ddlOpcija.innerHTML = options;
