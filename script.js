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
            titrePopup.innerHTML = txt.titre;

            popupParts[0].innerHTML = txt.p1;
            popupParts[1].innerHTML = txt.p2;
            popupParts[2].innerHTML = txt.p3;
            popupContainer.classList.add('active');
        }
    });
}

closeTop.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

closeBottom.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

const txtProjet = [{
    id: "0",
    titre: "Projet ESUPEC - Médiathèque",
    p1: "<h2>Contexte</h2><p>Le contexte de ce projet était de permettre à la médiathèque intercommunale de Cholet de pouvoir gérer informatiquement leurs ressources. Leur souhait était d’avoir une application web leur permettant de gérer les achats, les emprunts de livres et les adhérents. L’application ne devant être utilisée que par le personnel de la médiathèque.<br> Pour ce projet, nous avons dû utiliser un serveur MySQL, un outil comme « Sublime Text » et la méthode MVC pour coder l’application.</p>",
    p2: "<h2>Fonctionnalités</h2><p>Quand le personnel se connecte à l’application, il est dirigé sur une page lui donnant accès à toutes les fonctionnalités dont il pourrait avoir besoin. <br> <br><img src='img/Projet0/acc.PNG'> <br> <br>Le personnel de la bibliothèque peut grâce à des formulaires, ajouter des adhérents, des livres (ou des exemplaires de livres) ainsi que des emprunts. <br><projetHover src='Images/Projet0/ajout-adherents.PNG'> <br> <br><img src='img/Projet0/ajout-exemplaire.PNG'><br> <br>Le personnel peut aussi vérifier s'il y a des emprunts qui arrive en fin de date et voir l’adhérent qui l’a emprunté. <br></p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec toutes les fonctionnalités opérationnelles de l’application. Quand une personne se connecte elle peut accéder aux listes des adhérents, aux ouvrages disponibles et aux emprunts non rendus. Ce projet m’a permis d’apprendre et mettre en place la méthode MVC dans un projet, ainsi que d’améliorer mes connaissances en PHP.</p>",
}, {
    id: "1",
    titre: "Projet ESUPEC – Laboratoire LBc",
    p1: "<h2>Contexte</h2><p>Le contexte de ce projet était de permettre au laboratoire LBc de pouvoir mettre à disposition du service de gestion du personnel une application web permettant la gestion des frais de déplacements des visiteurs médicaux. L’application ne pouvant être utilisée que par le personnel du service de gestion du personnel, ainsi que les visiteurs médicaux voulant déposer leurs frais pour être remboursés. Pour ce projet, nous avons dû utiliser un serveur MySQL, un outil comme « Sublime Text » et la méthode MVC pour coder l’application.</p>",
    p2: "<h2>Fonctionnalités</h2><p>Quand une personne se connecte (avec son login et mot de passe), elle est automatiquement détectée en tant que visiteur ou gestionnaire du personnel. <br><img src='img/Projet1/acc-V.PNG'><img src='img/Projet1/acc-C.PNG'><br> Suite à cela, si c'est un visiteur, il peut soit ajouter des frais ou consulter l’historique de ses fiches. <br> Si c’est un membre du service de gestion du personnel, il peut valider les fiches qui ont été préalablement remplies par les visiteurs. <br></p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec toutes les fonctionnalités opérationnelles de l’application. Quand une personne se connecte elle peut, selon ses fonctions, ajouter ou valider des frais.</p>",
}, {
    id: "2",
    titre: "Projet IOT ESAIP - Voiture Autonome",
    p1: "<h2>Contexte</h2><p>Projet de groupe qui s’est tenu lors de la première semaine de la Majeure IOT de mon semestre 7 à l’ESAIP. Il avait pour but premier de nous permettre de découvrir le monde des objets connectés Arduino, tout en créant une voiture pouvant suivre un objectif, ou dans notre cas, suivre les trajectoires d’un objet sur un modèle réduit.</p>",
    p2: "<h2>Fonctionnalités</h2><p>Notre véhicule avait donc pour but de suivre un simple petit objet (baguette, main, cahier…), étant donné la petite taille de notre représentation. Pour cela nous lui avons configuré différents capteurs. Le premier est un capteur distance qui, à l’aide d’ultrason, récupère les informations permettant de calculer la distance qui le sépare d’un obstacle. Nous voulions avant tout faire en sorte que la voiture puisse s’arrêter ou reculer si elle se trouvait trop près de l’objectif, et qu’elle s’immobilise automatiquement si elle se faisait distancer par l’objet suivi.<br>Ensuite nous lui avons installé deux capteurs infra-rouges. Ces capteurs retournent une valeur lorsque l’objet passe devant. Ceux-ci nous permettent donc de savoir si l’objet que nous suivons décide de se diriger sur la droite ou sur la gauche. Couplé au capteur de distance, cela nous permettait aussi de ne pas tourner la voiture si l’un  des capteurs infra-rouges détectait un obstacle, alors que le capteur de distance ne détectait rien.<br>Ensuite, nous avons dû prendre en main la partie électronique : nous avons installé un des différents capteurs ainsi que les moteurs de la voiture.</p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec les fonctionnalités attendues. Nous avons cependant pu tester la limite de fiabilité des capteurs dont nous disposions. En effet, les différents capteurs infra-rouges avaient des problèmes de détection sous certaines conditions, ce qui résultait dans certains cas à une absence totale de repérage d’obstacle. De plus, nous avions un projet d’amélioration : faire en sorte que la voiture puisse chercher elle-même un objet à suivre, même lorsqu’elle ne détectait rien. Cependant la puissance électrique dont nous disposions n’était pas suffisante pour alimenter les deux moteurs nécessaires pour faire fonctionner les roues, ainsi qu’un autre moteur permettant de faire tourner la tête du robot.</p>",
}, {
    id: "3",
    titre: "Projet ESAIP - Design4Green",
    p1: "<h2>Contexte</h2><p>Ce projet s’est déroulé lors du concours Design4Green organisé par l’ESAIP, en partenariat avec d’autres écoles d’informatique francophones, avec une duréemaximale de 48 H. Le but du projet était de créer en équipe un site web ayant le meilleur design et la plus basse consommation d’énergie totale, dans le but de faire un site écologique, tout en respectant les critères de créations demandés et les fonctionnalités attendues.</p>",
    p2: "<h2>Fonctionnalités</h2><p>L’application web devait, pour la création d’un site par un client, permettre de rassembler une liste de critères à suivre pour pouvoir créer un site web green. Celui-ci devait ainsi permettre l’affichage des différents critères en fonction de leurs types, mais aussi l’accès à plus de renseignement sur chaque critère. Avec cette liste de données il était possible à chacune des étapes d’ajouter dans un panier de nouveaux critères.<br>Pour pouvoir y accéder, nous avons fait le choix d’avoir une base de données SQLite avec une connexion à la base de données en PHP. Ce choix nous a permis d’alléger la consommation énergétique du site comparé à un site web avec une base de données distante. En effet, avec SQLite, la base de données se trouve directement en dur sur le serveur, ce qui permet d’alléger le poids de chaque requête. Lors de la validation de ce panier, le site devait générer un document PDF qui servait de récapitulatif de tous les critères.</p>",
    p3: "<h2>Synthèse</h2><p>Le projet a été mené jusqu’au bout avec toutes les fonctionnalités demandées. L’ajout dans le panier et la génération de documents PDF se sont réalisés avec succès. Cependant, la faiblesse du site était son design. Nous avons privilégié la fonctionnalité du site avant tout, en dépit du style final et du document PDF généré à la fin.</p>",
}];

const txtStage = [{
    id: "0",
    titre: "Stage MAAF",
    p1: "<h2>Présentation du stage</h2><p>La MAAF est une société d’assurance nationalement reconnue et son siège social se trouve à Chauray, Niort (79). Il s’agit d’une des enseignes du groupe COVÉA, une SGAM (Société de Groupe d’Assurance Mutuelle), regroupant aussi les MMA, la GMF et Apgis.</p>",
    p2: "<h2>Tâches à réaliser</h2><p>M’adapter au CRM Salesforce ainsi qu’à la gestion de projet de manière Agile. Pour prendre en mains Salesforce j’ai dû utiliser Trailhead, qui est un site uniquement basé sur l’apprentissage de Salesforce, avec les fonctionnalités et les différents aspects de programmations qui y sont liés. Salesforce utilise une programation orientée objets avec le langage APEX, plus une infrastructure de développement Web, nommée Visualforce. Il utilise aussi pour lagestion des bases de données les langages SOQL et SOSL.La mission était la création de rapport et d’un tableau de bord Salesforce pour vérifier le bon fonctionnement d’un batch de purge. Le premier rapport permet de visualiser les demandes qui arrivaient au terme prévu, demande ouverte depuis plus de 25 mois (droit à l’oubli). Tandis que le deuxième permet de voir les demandes qui auraient dû être supprimées par le batch de purge. Le tableau de bord permet de voir plus simplement ces deux rapports en évitant les détails inutiles et en priorisant les informations majeures.Ma dernière mission était d’écrire et de réaliser des tests pour le batch de purge créé lors de ma troisième mission. Ma troisième mission était la création d’un batch de purge similaire à celui de ma deuxième mission. Le batch avait pour but de supprimer certains contrats qui avaient des particularités (contrats qui ne sont plus liés à une demande ou encore ceux qui devraient être supprimé en fonction du droit à l’oubli).</p>",
    p3: "<h2>Réalisation</h2><p>Le tableau de bord réalisé au cours de ma deuxième mission. <br><img src='img/Stage0/tableauDeBord.PNG'> <br> <br>Extrait du batch de purge réalisé lors de ma troisième mission. <br><img src='img/Stage0/batchPurge.PNG'> <br> <br>Extrait du test du batch de purge.<img src='img/Stage0/testBatchPurge.PNG'> <br></p>",
}, {
    id: "1",
    titre: "Stage Beaupréau en Mauges",
    p1: "<h2>Présentation du stage</h2><p>Beaupréau-en-Mauges est la 5ème commune du Maine-et-Loire. Elle est située au cœurs des Mauges, entre les villes d'Angers, Cholet et Nantes.</p>",
    p2: "<h2>Tâches à réaliser </h2><p>Réaliser un applicatif web permettant une gestion informatique des documents pour le service d’urbanisme. Cet applicatif devait permettre l’ajout et la modification des documents, mais aussi un triage grâce à des filtres, et en sortir des statiques. De plus l’applicatif devait pouvoir générer des documents sous format PDF.</p>",
    p3: "<h2>Réalisation</h2><p>Accueil vers le site permettant le choix du type de document d'urbanisme.<br><img src='img/Stage1/accSite.png'> <br> <br> Accueil vers la partie Permis de Construire (exemple d'un onglets)<br><img src='img/Stage1/accPC.png'> <br> <br> Tableau visualisant tous les Permis de Construire<br><img src='img/Stage1/allPC.png'> <br> <br> Partie statistique des Permis de Construire<br><img src='img/Stage1/statPC.png'> <br> <br> Partie génération des documents (au choix) d'un Permis de Construire<br><img src='img/Stage1/genPC.png'> <br> <br></p>",
}];
