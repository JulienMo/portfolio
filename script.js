// Effet navbar
const nav = document.querySelector('.navbar');
const acc = document.querySelector('#li-accueil');
const ctc = document.querySelector('#li-contact');
window.addEventListener('scroll', () => {
    if (window.scrollY > window.screen.height) {
        nav.classList.add('scroll');
        acc.classList.add('scroll');
        ctc.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
        acc.classList.remove('scroll');
        ctc.classList.remove('scroll');
    }
});

const listForm = document.querySelectorAll('.formation');
const listFormInv = document.querySelectorAll('.formation-inverse');
listForm.forEach((form) => {
    let p = form.querySelector('p');
    let strong = form.querySelector('strong');
    form.addEventListener('mouseover', () => {
        addHover(p);
        addHover(strong);
    });
    form.addEventListener('mouseleave', () => {
        deleteHover(p);
        deleteHover(strong);
    });
});
listFormInv.forEach((form) => {
    let p = form.querySelector('p');
    let strong = form.querySelector('strong');
    form.addEventListener('mouseover', () => {
        addHover(p);
        addHover(strong);
    });
    form.addEventListener('mouseleave', () => {
        deleteHover(p);
        deleteHover(strong);
    });
});

const listExp = document.querySelectorAll('.experience');
const listExpInv = document.querySelectorAll('.experience-inverse');
listExp.forEach((exp) => {
    let p = exp.querySelector('p');
    let strong = exp.querySelector('strong');
    exp.addEventListener('mouseover', () => {
        addHover(p);
        addHover(strong);
    });
    exp.addEventListener('mouseleave', () => {
        deleteHover(p);
        deleteHover(strong);
    });
});
listExpInv.forEach((exp) => {
    let p = exp.querySelector('p');
    let strong = exp.querySelector('strong');
    exp.addEventListener('mouseover', () => {
        addHover(p);
        addHover(strong);
    });
    exp.addEventListener('mouseleave', () => {
        deleteHover(p);
        deleteHover(strong);
    });
});

function addHover(elm) {
    elm.classList.add('hover');
}
function deleteHover(elm) {
    elm.classList.remove('hover');
}

/*Gestion des popup*/
const popupContainer = document.querySelector('#popup-container');
const popup = popupContainer.querySelector('#popup');
const titrePopup = popupContainer.querySelector("#popupTitle");
const popupParts =  popupContainer.querySelectorAll('.popupPart');
let closeTop = document.querySelector('#closeTop');
let closeBottom = document.querySelector('#closeBottom');

const listProjet = document.querySelectorAll('.linkProjet');
const listStage = document.querySelectorAll('.linkStage');

listProjet.forEach((open) => {
    open.addEventListener('click', () => {
        fillPopup(open, txtProjet);
    });
});

listStage.forEach((open) => {
    open.addEventListener('click', () => {
        fillPopup(open, txtStage);
    });
});

// function that fills the pop up
function fillPopup(open, text){
    const idPopup = open.id;
    text.forEach((txt) => {
        if (idPopup == txt.id) {
            console.log(text[idPopup].titre);
            titrePopup.innerHTML = text[idPopup].titre;

            popupParts[0].innerHTML = text[idPopup].p1;
            popupParts[1].innerHTML = text[idPopup].p2;
            popupParts[2].innerHTML = text[idPopup].p3;
            popupContainer.classList.add('active');
        }
    });
}

popupContainer.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

closeTop.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

closeBottom.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

const txtProjet = [{
    id: "0",
    titre: "Projet IOT ESAIP - Voiture Autonome",
    p1: "<h2>Contexte</h2><p></p>",
    p2: "<h2>Fonctionnalités</h2><p></p>",
    p3: "<h2>Synthèse</h2><p></p>",
}, {
    id: "1",
    titre: "Projet ESUPEC - Médiathèque",
    p1: "<h2>Contexte</h2><p>Le contexte de ce projet était de permettre à la médiathèque intercommunale de Cholet de pouvoir gérer informatiquement leurs ressources. Leur souhait était d’avoir une application web leur permettant de gérer les achats, les emprunts de livres et les adhérents. L’application ne devant être utilisée que par le personnel de la médiathèque.<br> Pour ce projet, nous avons dû utiliser un serveur MySQL, un outil comme « Sublime Text » et la méthode MVC pour coder l’application.</p>",
    p2: "<h2>Fonctionnalités</h2><p>Quand le personnel se connecte à l’application, il est dirigé sur une page lui donnant accès à toutes les fonctionnalités dont il pourrait avoir besoin. <br> <br><img src='img/Projet1/acc.PNG'> <br> <br>Le personnel de la bibliothèque peut grâce à des formulaires, ajouter des adhérents, des livres (ou des exemplaires de livres) ainsi que des emprunts. <br><projetHover src='Images/Projet1/ajout-adherents.PNG'> <br> <br><img src='img/Projet1/ajout-exemplaire.PNG'><br> <br>Le personnel peut aussi vérifier s'il y a des emprunts qui arrive en fin de date et voir l’adhérent qui l’a emprunté. <br></p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec toutes les fonctionnalités opérationnelles de l’application. Quand une personne se connecte elle peut accéder aux listes des adhérents, aux ouvrages disponibles et aux emprunts non rendus. Ce projet m’a permis d’apprendre et mettre en place la méthode MVC dans un projet, ainsi que d’améliorer mes connaissances en PHP.</p>",
}, {
    id: "2",
    titre: "Projet ESUPEC – Laboratoire LBc",
    p1: "<h2>Contexte</h2><p>Le contexte de ce projet était de permettre au laboratoire LBc de pouvoir mettre à disposition du service de gestion du personnel une application web permettant la gestion des frais de déplacements des visiteurs médicaux. L’application ne pouvant être utilisée que par le personnel du service de gestion du personnel, ainsi que les visiteurs médicaux voulant déposer leurs frais pour être remboursés. Pour ce projet, nous avons dû utiliser un serveur MySQL, un outil comme « Sublime Text » et la méthode MVC pour coder l’application.</p>",
    p2: "<h2>Fonctionnalités</h2><p>Quand une personne se connecte (avec son login et mot de passe), elle est automatiquement détectée en tant que visiteur ou gestionnaire du personnel. <br><img src='img/Projet2/acc-V.PNG'><img src='img/Projet2/acc-C.PNG'><br> Suite à cela, si c'est un visiteur, il peut soit ajouter des frais ou consulter l’historique de ses fiches. <br> Si c’est un membre du service de gestion du personnel, il peut valider les fiches qui ont été préalablement remplies par les visiteurs. <br></p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec toutes les fonctionnalités opérationnelles de l’application. Quand une personne se connecte elle peut, selon ses fonctions, ajouter ou valider des frais.</p>",
}, {
    id: "3",
    titre: "Projet ESAIP - Design4Green",
    p1: "<h2>Contexte</h2><p></p>",
    p2: "<h2>Fonctionnalités</h2><p></p>",
    p3: "<h2>Synthèse</h2><p></p>",
}];

const txtStage = [{
    id: "0",
    titre: "Stage MAAF",
    p1: "<h2>Présentation du stage</h2><p>La MAAF est une société d’assurance nationalement reconnue et son siège social se trouve à Chauray, Niort (79). Il s’agit d’une des enseignes du groupe COVÉA, une SGAM (Société de Groupe d’Assurance Mutuelle), regroupant aussi les MMA, la GMF et Apgis.</p>",
    p2: "<h2>Tâches à réaliser</h2><p>M’adapter au CRM Salesforce ainsi qu’à la gestion de projet de manière Agile. Pour prendre en mains Salesforce j’ai dû utiliser Trailhead, qui est un site uniquement basé sur l’apprentissage de Salesforce, avec les fonctionnalités et les différents aspects de programmations qui y sont liés. Salesforce utilise une programation orientée objets avec le langage APEX, plus une infrastructure de développement Web, nommée Visualforce. Il utilise aussi pour lagestion des bases de données les langages SOQL et SOSL.La mission était la création de rapport et d’un tableau de bord Salesforce pour vérifier le bon fonctionnement d’un batch de purge. Le premier rapport permet de visualiser les demandes qui arrivaient au terme prévu, demande ouverte depuis plus de 25 mois (droit à l’oubli). Tandis que le deuxième permet de voir les demandes qui auraient dû être supprimées par le batch de purge. Le tableau de bord permet de voir plus simplement ces deux rapports en évitant les détails inutiles et en priorisant les informations majeures.Ma dernière mission était d’écrire et de réaliser des tests pour le batch de purge créé lors de ma troisième mission. Ma troisième mission était la création d’un batch de purge similaire à celui de ma deuxième mission. Le batch avait pour but de supprimer certains contrats qui avaient des particularités (contrats qui ne sont plus liés à une demande ou encore ceux qui devraient être supprimé en fonction du droit à l’oubli).</p>",
    p3: "<h2>Réalisation</h2><p></p>",
}, {
    id: "1",
    titre: "Stage Beaupréau en Mauges",
    p1: "<h2>Présentation du stage</h2><p>Beaupréau-en-Mauges est la 5ème commune du Maine-et-Loire. Elle est située au cœurs des Mauges, entre les villes d'Angers, Cholet et Nantes.</p>",
    p2: "<h2>Tâches à réaliser </h2><p>Réaliser un applicatif web permettant une gestion informatique des documents pour le service d’urbanisme. Cet applicatif devait permettre l’ajout et la modification des documents, mais aussi un triage grâce à des filtres, et en sortir des statiques. De plus l’applicatif devait pouvoir générer des documents sous format PDF.</p>",
    p3: "<h2>Réalisation</h2><p>Accueil vers le site permettant le choix du type de document d'urbanisme.<br><img src='img/Stage2/accSite.png'> <br> <br> Accueil vers la partie Permis de Construire (exemple d'un onglets)<br><img src='img/Stage2/accPC.png'> <br> <br> Tableau visualisant tous les Permis de Construire<br><img src='img/Stage2/allPC.png'> <br> <br> Partie statistique des Permis de Construire<br><img src='img/Stage2/statPC.png'> <br> <br> Partie génération des documents (au choix) d'un Permis de Construire<br><img src='img/Stage2/genPC.png'> <br> <br></p>",
} ];
