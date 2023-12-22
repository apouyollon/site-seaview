let equipe_database = [
    {
        'nom_equipier': 'Julie Eudé',
        'fonction_equipier': 'Gérante',
        'description_equipier': "Entreprenante, organisée, énergique, sociable, empathique, les qualités ne manquent pas pour décrire notre cheffe. Julie possède un don naturel pour comprendre les gens et leurs idées, et saura veiller à la réussite de chaque projet que vous lui confierez.",
        'photo_equipier': 'assets/teammates/julie.png',
        'id': 0
    },
    {
        'nom_equipier': 'Alexandre Gousset',
        'fonction_equipier': 'UI & UX Designer',
        'description_equipier': "Alexandre est un artiste dans l'âme. Le graphisme, la musique, la photographie, il apprécie tout. Notre designer se montre toujours fort de proposition, et saura vous proposer un design aussi esthétique qu'ergonomique.",
        'photo_equipier': 'assets/teammates/alexandre.jfif',
        'id': 1
    },
    {
        'nom_equipier': 'Laïla Gérard',
        'fonction_equipier': 'Experte SEO & SEA',
        'description_equipier': "Vous avez besoin d'une spécialiste pour vous mettre en valeur ? Nous avons la personne qu'il vous faut. Laïla veille toujours d'un oeil expert sur le marché à l'affût des bonnes opportunités, pour vous offrir une communication originale.",
        'photo_equipier': 'assets/teammates/laila.png',
        'id': 2
    },
    {
        'nom_equipier': 'Antoine Pouyollon',
        'fonction_equipier': 'Développeur front & back',
        'description_equipier': "Voici Antoine, notre développeur. C'est lui qui donne vie à vos idées grâce à la magie du code. Il est un peu timide, mais c'est un penseur rationnel, qui cherche toujours une approche pratique.",
        'photo_equipier': 'assets/teammates/antoine.jfif',
        'id': 3
    },
];

let services_database = [
    {
        'nom_service': 'Conception et refonte de sites web',
        'description_service': "Les entreprises possédant un site bien construit ont tendance à attirer davantage de clients. Un site web esthétique, sécurisé et régulièrement mis à jour montre une entreprise fiable et sérieuse.<br><br>Chez Seaview, nous vous proposons des sites web responsifs, fluides et aérés. Selon vos besoins, nous pouvons vous proposer un site construit sur le CMS Wordpress ou le coder intégralement. Nous vous accompagnons dans le choix d'un hébergeur, inclus dans nos tarifs. Conscients des inégalités d'accès à Internet, nous plaçons l'accessibilité web au coeur de nos priorités.",
        'id': 0,
        'src_image': "assets/projects/project-0.jpg",
        'alt_image': "Atelier Levent",
        'src_mockup': "assets/projects/mockup-0.png",
        'alt_mockup': "Mockup Site web Atelier Levent"
    },
    {
        'nom_service': "Création d'identité visuelle",
        'description_service': "L'identité visuelle est très importante. C'est elle qui vous distingue de vos concurrents. On la retrouve sur tous vos canaux de communications : votre site web, vos réseaux sociaux, vos supports imprimés...<br><br>Lorsque nous créons votre identité visuelle, nous vous proposons un logo et une charte graphique, dans laquelle nous vous proposons des couleurs et des typographies reflétant votre identité.",
        'id': 1,
        'src_image': "assets/projects/project-1.png",
        'alt_image': "Logo Move'Mates",
        'src_mockup': "assets/projects/mockup-1.png",
        'alt_mockup': "Mockup Application Move'Mates"
    },
    {
        'nom_service': "Audit ergonomique",
        'description_service': "Un bon site web est un site facile et agréable à utiliser pour tous les utilisateurs.<br><br>Lorsque vous nous confiez la refonte de votre site web, nous apportons notre oeil expert sur votre site pour en optimiser l'ergonomie et l'accessibilités. Nous effectuons différents tests logiciels, pour en vérifier la performance; et des tests utilisateurs pour en vérifier l'accessibilité. Nous basons notre analyse sur les lois de l'UX, les heuristiques et les normes WCAG.<br><br>Nous vous proposons ensuite nos proposition d'amélioration.",
        'id': 2,
        'src_image': "assets/projects/project-2.png",
        'alt_image': "Image La belle-iloise",
        'src_mockup': "assets/projects/mockup-2.png",
        'alt_mockup': "Mockup site web La belle-iloise"
    },
    {
        'nom_service': "SEO & SEA",
        'description_service': "Le SEO (search engine optimisation) comprend l'ensemble des techniques qui permettent aux utilisateurs de trouver votre site. Plus votre site est bien référencé, plus vous apparaissez haut dans les résultats Google. La plupart des utilisateurs ne cherchent pas de résultat au delà de la première page donc il est important d'être bien référencé.<br><br>Pour être bien référencé, votre site doit proposer une bonne expérience utilisateur et utiliser les mots les plus cohérents par rapport à votre sujet. Seaview vous accompagne dans la rédaction de votre contenu pour vous aider à atteindre le résultat Google le plus élevé possible. Vous pouvez aussi faire le choix d'acheter des parts sur des mots-clés pour être mieux référencé. C'est le SEA (Search Engine Advertising).",
        'id': 3,
        'src_image': "assets/projects/project-3.png",
        'alt_image': "Photographie artistique",
        'src_mockup': "assets/projects/mockup-3.png",
        'alt_mockup': "Mockup site web photographe"
    },
    {
        'nom_service': "Production graphique web",
        'description_service': "La tendance actuelle n'est plus au format imprimé mais au format numérique, moins consommateur en papier. <br><br>Adeptes de la suite Adobe Creative Cloud, nous réalisons vos illustrations et vos design digitalisés, selon vos besoins.",
        'id': 4,
        'src_image': "assets/projects/project-4.jpg",
        'alt_image': "Food-truck",
        'src_mockup': "assets/projects/mockup-4.png",
        'alt_mockup': "Mockup flyer food-truck"
    },
    {
        'nom_service': "Motion design",
        'description_service': "Le design statique est un peu daté de nos jours. Le motion design devient alors très à la mode. Plus simple à réaliser, donc moins couteux en temps et en argent, que les autres méthodes d'animation, le motion design aide à dynamiser les productions design modernes.<br><br>Seaview vous propose des animations motions designs pour animer vos logos ou des vidéos entièrement réalisées en motion design pour votre communication.",
        'id': 5,
        'src_image': "assets/projects/project-5.png",
        'alt_image': "Motion design VVF",
        'src_mockup': "assets/projects/mockup-5.png",
        'alt_mockup': "Mockup motion design VVF"
    }
];

let avis_database = [
    {
        'photo_avis': 'assets/clients/user.png',
        'titre_avis': 'Très satisfaite',
        'avis': "Très heureuse d'avoir confié mon projet à Julie et son équipe. Ils m'ont rapidement proposé une nouvelle identité visuelle dont je suis très satisfaite.",
        'nom_client': 'Sarah V.',
        'nbr_etoiles': 5,
        'id': 0
    },
    {
        'photo_avis': 'assets/clients/user2.svg',
        'titre_avis': 'Une équipe communicative',
        'avis': "L'équipe de Seaview est accueillante. Ils prennent le temps de vous expliquer leurs choix et comment utiliser exploiter judicieusement leurs livrables.",
        'nom_client': 'Rémi L.',
        'nbr_etoiles': 4,
        'id': 1
    },
    {
        'photo_avis': 'assets/clients/user1.svg',
        'titre_avis': 'De bonnes idées',
        'avis': "Je ne regrette pas d'avoir confié un projet à Seaview, ils ont été réactifs, avaient de bonnes idées. Je les recommande.",
        'nom_client': 'Sébastien A.',
        'nbr_etoiles': 4,
        'id': 2
    }
];

let socialmedias_database = [
    {
        'icon': 'assets/socialmedias/facebook.png',
        'name': 'Facebook',
        'lien': 'https://www.facebook.com/people/Laila-Gerard/pfbid0LgJT14E7BTQX8DAZwduB398FQNh7CSfobUt3SAFKfrAbhHXpsCyZ8Capvgb5yGgql/'
    },
    {
        'icon': 'assets/socialmedias/instagram.png',
        'name': 'Instagram',
        'lien': 'https://www.instagram.com/pht.pelo_/?hl=fr'
    },
    {
        'icon': 'assets/socialmedias/linkedin.png',
        'name': 'Linkedin',
        'lien': 'https://www.linkedin.com/in/antoine-pouyollon-web-development/'
    }
]









function show_equipe() {
    for (let e=0; e<equipe_database.length; e++) {

        let equipier = `
        <section class='equipier'>
            <img src='`+ equipe_database[e].photo_equipier +`' 
            alt='`+ equipe_database[e].nom_equipier +`' - '`+ equipe_database[e].fonction_equipier_equipier +`'
            title='`+ equipe_database[e].nom_equipier +`' - '`+ equipe_database[e].fonction_equipier_equipier +`'>
            <div class='equipier_content' />
                <h3>`+ equipe_database[e].nom_equipier +`</h3>
                <h4>`+ equipe_database[e].fonction_equipier +`</h4>
                <p>`+ equipe_database[e].description_equipier +`</p>
            </div>
        </section>`;

        $('#notre_equipe').append(equipier);
    }
}

function show_services() {

    for (let e=0; e<services_database.length; e++) {

        let title_service =`
        <btn class="title_service" onclick="show_description_service(`+ services_database[e].id +`)">
        `+ services_database[e].nom_service +`</btn>`;

        $('#list_btn_services').append(title_service);

        let content_service = `
        <section class='content_service service_`+ services_database[e].id +`'>
            <p class='service_paragraph'> `+ services_database[e].description_service +`</p>
            <div class='img_container'>
                <img class='service_image imageservice_`+ services_database[e].id +`' 
                onmouseover='change_image_to_mockup(`+ services_database[e].id +`)'  
                src='`+ services_database[e].src_image +`' 
                alt='`+ services_database[e].alt_image +`' />
                <img class='service_image mockup_image mockupservice_`+ services_database[e].id +`' 
                onmouseleave='change_mockup_to_image(`+ services_database[e].id +`)'
                    src='`+ services_database[e].src_mockup +`' 
                    alt='`+ services_database[e].alt_mockup +`' />
            </div>
        </section>`;

        $('#list_services').append(content_service);
    }

    $('.content_service').hide();
    $('.mockup_image').hide();
}

function show_description_service(p_id) {
    for (let e=0; e<services_database.length; e++) {
        if (e != p_id) {
            $('.service_' + e).hide();
        }
        else {
            $('.service_' + p_id).slideToggle(500);
        }     
    }  
} 

function change_image_to_mockup(p_id) {
    $('.mockupservice_' + p_id).fadeIn(500);
}

function change_mockup_to_image(p_id) {
    $('.mockupservice_' + p_id).fadeOut(500);
}

function show_avis() {
    for (let e=0; e<avis_database.length; e++) {
        let avis = `
        <section class='avis'>
        <img class='user-images' src='`+ avis_database[e].photo_avis +`' 
        alt='Avatar client' />
            <div class='avis_content'>
                <h4>`+ avis_database[e].titre_avis +`</h4>
                <p>`+ avis_database[e].avis +`</p>
                <cite>`+ avis_database[e].nom_client +`</cite>
            </div>
            <div class="section-etoiles etoiles_`+ avis_database[e].id +`"></div>
        </section>`;

        $('#temoignages').append(avis);

        for (let i=0; i<avis_database[e].nbr_etoiles; i++) {
            let etoile = `<img class='star' src='assets/clients/star.png'>`;
            $('.etoiles_'+avis_database[e].id).append(etoile);
        }
    }
}

function show_socialmedias() {
    for (let e=0; e<avis_database.length; e++) {
        let socialmedia = `
        <a href='`+ socialmedias_database[e].lien +`' target="_blank">
            <img class='social-medias-icons' src='`+ socialmedias_database[e].icon +`' 
            alt='`+ socialmedias_database[e].name +`' />
        </a>`;

        $('#social_medias').append(socialmedia);
    }
}


const helmet = require("helmet");
const app = express();
app.use(
  helmet({
    xFrameOptions: { action: "sameorigin" },
  }),
);


// code menu-burger
let showMenu = false;

$(document).ready(function(){
    $(".menu-btn").on("click", function(){
        if(!showMenu) {
            $('.menu-btn__burger').addClass('open');
            $('.nav').addClass('open');
            $('.menu-nav').addClass('open');
            $('.menu-nav__item').addClass('open');
        
            showMenu = true;
            $(".menu-nav__item").on("click", function(){
                $('.menu-btn__burger').removeClass('open');
                $('.nav').removeClass('open');
                $('.menu-nav').removeClass('open');
                $('.menu-nav__item').removeClass('open');
            
                showMenu = false;
            });
          } else {
            $('.menu-btn__burger').removeClass('open');
            $('.nav').removeClass('open');
            $('.menu-nav').removeClass('open');
            $('.menu-nav__item').removeClass('open');
        
            showMenu = false;
          }
    });
});



show_equipe();
show_services();
show_avis();
show_socialmedias();