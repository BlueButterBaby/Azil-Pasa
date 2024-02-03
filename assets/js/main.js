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
            modal: "modal1",
            modalLabel: "modalLabel1",
            prednosti: `<p>
                            - Prijateljska i privržena priroda<br/>
                            - Odlični sa decom<br/>
                            - Lako obučavanje<br/>
                            - Aktivni saputnici<br/>
                            - Svestrani psi<br/>
                        </p>`
        }
    },
    {
        img:{
            src: "assets/img/mesanac.jpg",
            alt: "Mešanac"
            
        },
        body:{
            naslov: "Mešanac",
            tekst: "Udomljavanje mešanca je prilika da dobijete jedinstvenog i posebnog psa koji će vam doneti mnogo radosti i ljubavi. Bilo da je mešanac malih ili velikih rasa, njegova jedinstvena ličnost i karakter će vas osvojiti i napraviti od njega posebnog člana Vaše porodice.",
            modal: "modal2",
            modalLabel: "modalLabel2",
            prednosti: `<p>
                            - Unikatan izgled<br/>
                            - Zdravstvene prednosti<br/>
                            - Unikatna ličnost<br/>
                            - Prilagodljivost<br/>
                            - Društvo koje spašava<br/>
                        </p>`
        }
    },
    {
        img:{
            src: "assets/img/pomeranac.jpg",
            alt: "Pomeranac"
            
        },
        body:{
            naslov: "Pomeranac",
            tekst: "Udomljavanje pomeranca je prilika da dobijete malog, privrženog i ljubaznog ljubimca koji će vam doneti mnogo radosti i ljubavi. Njihova vesela priroda i ljupki izgled čine ih popularnim izborom za mnoge ljude koji traže živahne i ljubazne pse koji će im biti verni saputnici.",
            modal: "modal3",
            modalLabel: "modalLabel3",
            prednosti: `<p>
                            - Mala veličina<br/>
                            - Prijateljska priroda<br/>
                            - Pogodni za porodice<br/>
                            - Prilagodljivost<br/>
                            - Lako održavanje<br/>
                        </p>`
        }
    },
    {
        img:{
            src: "assets/img/buldog.jpg",
            alt: "Buldog"
            
        },
        body:{
            naslov: "Buldog",
            tekst: "Udomljavanje buldoga je prilika da dobijete ljubaznog, vernog i unikatnog ljubimca koji će vam doneti mnogo radosti i ljubavi. Njihova mirna priroda i karakterističan izgled čine ih popularnim izborom za mnoge ljude koji traže nežnog i privrženog psa koji će im biti odan.",
            modal: "modal4",
            modalLabel: "modalLabel4",
            prednosti: `<p>
                            - Ljubazna i privržena priroda<br/>
                            - Odlični saputnici za porodice<br/>
                            - Niski nivo aktivnosti<br/>
                            - Prilagodljivost<br/>
                            - Karakterističan izgled<br/>
                        </p>`
        }
    }
];

function napraviUdomljavanjeBlok(udomljavanjeBlok){
    let html = `<div class="col-xl-3 col-sm-6 col-12 d-flex justify-content-center">
                    <div class="card" style="width: 24rem;">
                        <img src=${udomljavanjeBlok.img.src} class="card-img-top" alt=${udomljavanjeBlok.img.alt}/>
                        <div class="card-body text-center">
                            <h4 class="card-title bk-darkBlue fw-bold">${udomljavanjeBlok.body.naslov}</h4>
                            <p class="card-text">${udomljavanjeBlok.body.tekst}</p>
                            <button type = "button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${udomljavanjeBlok.body.modal}">Vidi još</button>
                        </div>
                    </div>
                    <div class="modal fade" id=${udomljavanjeBlok.body.modal} tabindex="-1" aria-labelledby="${udomljavanjeBlok.body.modalLabel}" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="${udomljavanjeBlok.body.modalLabel}">Želite li da udomite ovu rasu?</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ${udomljavanjeBlok.body.prednosti}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                                    <a href="kontakt.html" class="btn btn-primary">Udomi</a>
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

//Dinamicki ispis DDL

 let izborOpcija = [
     {id: 1, name: "Želim da saznam više"},
     {id: 2, name: "Želim da udomim ljubimca"},
     {id: 3, name: "Želim da doniram azilu"}
 ];

 let opcije = "";

 function napraviOpciju(o){
    let html = `<option value="${o.id}">${o.name}</option>`;
     return html;
 }

 for(let o of izborOpcija){
     opcije+= napraviOpciju(o);
 }

var ddlElement = document.getElementById('dinamickaDDL');

 if(ddlElement){
    ddlElement.innerHTML += opcije;
 }

//Menjanje cover slika sa tajmerom

let coverSlikeSrc = ["assets/img/slide1.jpg", "assets/img/slide2.jpg", "assets/img/slide3.jpg"];
let coverSlikeAlt = ["Slider Slika 1", "Slider Slika 2", "Slider Slika 3"];
let i = 0;

function promeniSliku(){

    document.getElementById('coverSlika').src = coverSlikeSrc[i];
    document.getElementById('coverSlika').alt = coverSlikeAlt[i];

    if(i < coverSlikeSrc.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout(promeniSliku, 3000); 
}

//Validacija forme

var brojGresaka;

if(document.querySelector("#bkForma") != null){
    document.querySelector("#bkForma").addEventListener("submit", function(event){
        event.preventDefault();
        obradaForme();
    });
}

function obradaForme(){
    let ime = document.querySelector("#bkIme");
    let prezime = document.querySelector("#bkPrezime");
    let email = document.querySelector("#bkEmail");
    let phone = document.querySelector("#bkBrojtel");
    let polNiz = document.getElementsByName("bkRadioGroup");
    let textPolje = document.querySelector("#bkTextarea");
    brojGresaka = 0;

    let regIme, regPrezime, regEmail, regPhone;

    regIme = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,13}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,13}){0,2}$/;
    regPrezime = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,16}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,16}){0,2}$/;
    regEmail = /^[a-z]{3,20}(\d|\.)*(@gmail.com|@yahoo.com|@ict.edu.rs|@hotmail.com)$/;
    regPhone = /^(\+3816[0-9]{5,6}|06[0-9]{8,9})$/;
    regTextPolje = /^[A-ZŠĐŽČĆ]([a-zšđčćž]|\s|[A-ZŠĐŽČĆ]|\,|\.|\?|\!)+$/;
   
    proveraIzraza(regIme, ime, "Ime nije u dobrom formatu, primer: Pera");
    proveraIzraza(regPrezime, prezime, "Prezime nije u dobrom formatu, primer: Perić");
    proveraIzraza(regEmail, email, "Email nije u dobrom formatu, primer: pera123@gmail.com");
    proveraIzraza(regPhone, phone, "Broj telefona nije u dobrom formatu, početi sa +3816 ili 06");
    proveraIzraza(regTextPolje, textPolje, "Koristili ste nedozvoljene karaktere.");

    if(textPolje.value.length < 10){
        textPolje.nextElementSibling.classList.remove("bkHideElement");
        textPolje.nextElementSibling.textContent = "Poruka morati imati minimum 10 karaktera.";
        textPolje.classList.add("bkRedBorder");
        brojGresaka++
        console.log(textPolje.nextElementSibling);
    }

    let polVrednost = "";

    for(let i = 0; i < polNiz.length; i++){
        if(polNiz[i].checked){
            polVrednost = polNiz[i].value;
            break;
            
        }
    }
    proveraCekiranihElemenata(polVrednost, polNiz, "Morate izabrati pol.");

    if(ddlElement.selectedIndex == 0){
        ddlElement.nextElementSibling.classList.remove("bkHideElement");
        ddlElement.nextElementSibling.textContent = "Morate odabrati nesto iz padajuće liste.";
        ddlElement.classList.add("bkRedBorder");
        brojGresaka++;     
    }
    else{
        ddlElement.nextElementSibling.classList.add("bkHideElement");
        ddlElement.nextElementSibling.textContent = "";
        ddlElement.classList.remove("bkRedBorder");
    }

    if (brojGresaka != 0){
        return false;
    }
    
    return true;
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
        niz[0].parentElement.parentElement.nextElementSibling.classList.add("bkRedBorder");
        brojGresaka++;
    }
    else{
        niz[0].parentElement.parentElement.nextElementSibling.classList.add("bkHideElement");
        niz[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
        niz[0].parentElement.parentElement.nextElementSibling.classList.remove("bkRedBorder");
    }
}

//jQuery

$('#bkTopPage').click(function(){
    window.scrollTo(top);
});

$('#bkTopPage').css({
    'position': 'fixed',
    'display': 'none',
  'bottom': '65px',
  'right': '17px',
  'width': '50px',
  'height': '50px',
  'z-index': '2',
  'font-size': '48px',
  'color': '#0098D6',
  'cursor': 'pointer'
});

//jQuery waypoint plugin

if(window.location.pathname == "/index.html" || window.location.pathname =="/Azil-Pasa/index.html"){
    var waypoint = new Waypoint({
        element: document.getElementById('o-nama'),
        handler: function() {
            $('#bkTopPage').fadeIn();
        }
    });
    
    var waypoint2 = new Waypoint({
        element: document.getElementById('carouselSection'),
        handler: function() {
            $('#bkTopPage').fadeOut();
        }
    });
}

if(window.location.pathname == "/pomoc.html" || window.location.pathname =="/Azil-Pasa/pomoc.html"){
    var waypoint3 = new Waypoint({
        element: document.getElementById('volontiranje'),
        handler: function() {
            $('#bkTopPage').fadeIn();
        }
    });
    
    var waypoint4 = new Waypoint({
        element: document.getElementById('udomljavanje'),
        handler: function() {
            $('#bkTopPage').fadeOut();
        }
    });
}

