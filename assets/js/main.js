// Sta ces sve uraditi sa javascriptom za sajt:

//Navigacioni meni ispisati dinamicki - DONE
//Sa tajmerom menjati cover slike
//Blok nasa porodica ispisati dinamicki - DONE
//Blok udomljavanje ispisati dinamicki (PROBAJ ONCLICK DOGADJAJ DA DODAS)- 
//DDL ispisati dinamicki u formi
//Odraditi Regexe za formu
//jQuery moras da uradis za nesto, nzm za sta iskreno


//Dinamicki ispisi

//Nav menu

let links = [
    {
        path: "index.html",
        text: "Početna",
        isActive: true
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
];

function napraviLink(link){
    let html = `<li class="nav-item"><a class="nav-link text-end fw-bold fs-4 bk-lightBlue` + `${link.isActive ? ` active` : ``}"` + `href = "` + link.path + `"` + `>` + link.text + `</a></li>`;
    return html;           
}

let meni = "";

for(let link of links){
    meni += napraviLink(link);
}

let meniIspis = document.querySelector("#meni");

if(meniIspis) {
    meniIspis.innerHTML = meni;
}


//Porodica blok

let porodicaBlokovi = [
    {
        img: {
            src: "assets/img/veterinar.jpg",
            alt: "Veterinar"
        },
        body: {
            ime: "Dr. Marko Jovanović",
            struka: "Veterinar",
            opis: "Naš veterinar, Marko, ima strast prema brizi o životinjama i bogato iskustvo u veterinarskoj medicini. On je odgovoran za zdravstveno stanje i dobrobit svih naših pasa. Njegove dužnosti uključuju redovne preglede, vakcinaciju, lečenje bolesti i povreda, kao i pružanje hitne veterinarske nege kada je to potrebno."
        }
    },
    {
        img: {
            src: "assets/img/trener.jpg",
            alt: "Trener"
        },
        body: {
            ime: "Stefan Popović",
            struka: "Trener",
            opis: "Stefan je naš stručnjak za obuku pasa. On radi sa našim štićenicima kako bi im pomogao da razviju osnovne veštine, socijalizuju se i postanu spremni za usvajanje. Stefan koristi pozitivne metode obuke kako bi stvorio poverenje i izgradio veze sa psima. Njegova strpljenje i predanost su ključne u pomaganju psima da se prilagode novim situacijama i ljudima."
        }
    },
    {
        img: {
            src: "assets/img/negovatelj.jpg",
            alt: "Negovatelj"
        },
        body: {
            ime: "Milica Nikolić",
            struka: "Negovatelj",
            opis: "Naš negovatelj pasa, Milica, je srce našeg azila. Ona svakodnevno brine o našim štićenicima pružajući im ljubav, hranu, vodu, redovnu šetnju i igru. Ona se takođe stara o higijeni pasa, održavanju prostora čistim i udobnim, kao i o socijalizaciji pasa kako bi se osećali sigurno i srećno."
        }
    },
    {
        img: {
            src: "assets/img/luna.jpg",
            alt: "Pas Luna"
        },
        body: {
            ime: "Luna",
            struka: "Pas Pomagač",
            opis: "Luna je izuzetno poslušna, inteligentna i veoma pažljiva. Ona je obučena da pruža asistenciju u raznim situacijama, kao što su donošenje predmeta, otvaranje vrata, upozoravanje na zvukove ili mirise, pružanje emocionalne podrške i osiguravanje bezbednosti."
        }
    }
];

function napraviPorodicaBlok(porodicaBlok){
    let html = `<div class="col-xl-3 col-sm-6 col-12 d-flex justify-content-center">
                    <div class="card " style="width: 24rem;">
                        <img src=${porodicaBlok.img.src} class="card-img-top" alt=${porodicaBlok.img.alt}/>
                        <div class="card-body">
                            <h4 class="card-title text-center bk-darkBlue fw-bold">${porodicaBlok.body.ime}</h4>
                            <h5 class="card-subtitle mb-2 text-center bk-lightBlue fw-bold">${porodicaBlok.body.struka}</h5>
                            <p class="card-text">${porodicaBlok.body.opis}</p>
                        </div>
                    </div>
                </div>`;
    return html;
}

let porodicaBlok = "";

for(let blok of porodicaBlokovi){
    porodicaBlok += napraviPorodicaBlok(blok);
}

let porodicaIspis = document.querySelector("#porodicaDiv");

if(porodicaIspis){
    porodicaIspis.innerHTML = porodicaBlok;
}

//Udomljavanje blok

let udomljavanjeBlokovi = [
    {
        img:{
            src: "assets/img/labrador.jpg",
            alt: "Labrador Retriver"
        },
        body:{
            naslov: "Labrador Retriver",
            tekst: "Labradorski retriveri su izuzetno popularne rase pasa za udomljavanje iz mnogo razloga. Takođe je prilika da imate odanog, veselog i svestranog ljubimca koji će vam doneti puno radosti i ljubavi u život.",
            //modalTarget: modal1,
        }
    }
]

function napraviUdomljavanjeBlok(udomljavanjeBlok){
    let html = `<div class="col-xl-3 col-sm-6 col-12 d-flex justify-content-center">
                    <div class="card" style="width: 24rem;">
                        <img src=${udomljavanjeBlok.img.src} class="card-img-top" alt=${udomljavanjeBlok.img.alt}/>
                        <div class="card-body text-center">
                            <h4 class="card-title bk-darkBlue fw-bold">${udomljavanjeBlok.body.naslov}</h4>
                            <p class="card-text">${udomljavanjeBlok.body.tekst}</p>
                            <button type = "button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalTarget}">Vidi još</button>
                        </div>
                    </div>

                    <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modalLabel1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="modalLabel1">Želite li da udomite ovu rasu?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <p>- Prijateljska i privržena priroda<br/>
                                    - Odlični sa decom<br/>
                                    - Lako obučavanje<br/>
                                    - Aktivni saputnici<br/>
                                    - Svestrani psi<br/>
                                </p>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                                <button type="button" class="btn btn-primary">Udomi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    return html;
}

let udomljavanjeBlok = "";

for (let blok of udomljavanjeBlokovi){
    udomljavanjeBlok += napraviUdomljavanjeBlok(blok);
}

let udomljavanjeIspis = document.querySelector("#udomljavanjeDiv");

if(udomljavanjeIspis){
    udomljavanjeIspis.innerHTML = udomljavanjeBlok;
}


//Menjanje cover slika sa tajmerom

let coverSlike = [
    {
        src: "assets/img/slide1.jpg",
        alt: "Slider Slika 1"
    },
    {
        src: "assets/img/slide2.jpg",
        alt: "Slider Slika 2"
    },
    {
        src: "assets/img/slide3.jpg",
        alt: "Slider Slika 3"
    }
];















// ************************************************************

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







//Dinamicki ispis DDL

let izborOpcija = [
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
