import LiquorIcon from "@mui/icons-material/Liquor";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import CodeIcon from '@mui/icons-material/Code';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import tw from "twin.macro";

import React from "react";
import TeamIllustrationSrc from "./images/team-illustration-2.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShieldIcon from "@mui/icons-material/Shield";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {ReactComponent as LinkedinIcon} from "./images/linkedin-icon.svg";


const Subheading = tw.span`uppercase tracking-widest font-bold text-palette1-100`;
const HighlightedText = tw.span`text-palette1-100`;

export const header = {
    us:"À propos de nous",
    party:"Soirée Type",
    price:"Tarifs",
    contact:"Nous contacter",
    contract:"Faire un devis",
}

export const main = {
    featureLogos: {
        header:"TheDrinkMarket s'utilise ",
        headerHigh:"partout",
        subheading:"adaptable",
        description:"Lorem bla bla bla",
        cards: [
            {image: <LiquorIcon fontSize="large"/>, title:"Bar", description:"Donnez un air de nouveauté à vos habitués !"},
            {image: <NightlifeIcon fontSize="large"/>, title:"Boîte", description:"Attirez du monde pour une soirée hors du commun !"},
            {image: <SportsBarIcon fontSize="large"/>, title:"Asso Etudiante", description:"Choisissez d'ambiancer toute votre promo !"},
        ]
    },
    featureBG: {
        heading:"Ajustez les prix de vos boissons pour qu'elles partent plus vite",
        subheading:"Optimisez vos stocks",
        description:"Lorem ipsum bla bla bla",
        stats: [
            {
                key:"Stat 1",
                value:"500M+",
            },
            {
                key:"Stat 2",
                value:"Depuis 10 ans",
            },
            {
                key:"Stat 3",
                value:"$50K",
            },
        ]
    },
    feature3simple: {
        cards: [
            {
                image: <HdrStrongIcon fontSize="large"/>,
                title: "Une soirée type",
                description: "Venez découvrir à quoi ressemble une soirée type utilisant TheDrinkMarket!",
                url: "/soiree-type"
            },
            {
                image: <SentimentSatisfiedAltIcon fontSize="large"/>,
                title: "Qui sommes-nous ?",
                description: "Vous voulez savoir qui se cache derrière le projet TheDrinkMarket ? Venez voir par vous-même!",
                url: "/about"
            },
            {
                image: <CodeIcon fontSize="large"/>,
                title: "Algorithme",
                description: "Le fonctionnement de TheDrinkMarket vous parait sombre ? On vous détaille le fonctionnement de notre algorithme!",
                url: "/algorithme"
            }
        ],
        linkText: "Découvrir",
        heading: "",
        subheading: "Fonctionnement",
        description: "",
    },
    mainFeature: {
        subheading: "pratique",
        heading: (
            <div>
                Une solution <span tw="text-palette1-100">facile</span> d'utilisation
            </div>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        primaryButtonText: "Déroulement d'une soirée",
        primaryButtonUrl: "/soiree-type",
        imageSrc: TeamIllustrationSrc,
        buttonRounded: true,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        imageCss: null,
        imageDecoratorBlob: false,
        imageDecoratorBlobCss: null,
        textOnLeft: false
    },
    mainFeature2: {
        subheading: "Évolution",
        heading: (
            <>
                TheDrinkMarket évolue en permanence selon vos <span tw="text-palette1-100">besoins</span>
            </>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        primaryButtonText: "Faire un devis",
        primaryButtonUrl: "/devis",
        features: [
            {
                Icon: BriefcaseIcon,
                title: "Professionnel",
                description: "Notre équipe est à votre écoute pour répondre à vos questions ou vos besoins."
            },
            {
                Icon: MoneyIcon,
                title: "Abordable",
                description: "Une soirée où tout le monde s'amuse, clés en main, ça mérite bien une petite facturation ;) !"
            }
        ],
        textOnLeft: true,
        buttonRounded: true,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        showDecoratorBlob: false,
        iconRoundedFull: true,
        iconFilled: true,
        iconContainerCss: null
    },
    faq: {
        subheading: <Subheading>FAQS</Subheading>,
        heading: <>Vous avez une <HighlightedText>Question ?</HighlightedText></>,
        description: "Nous avons peut-être déjà la réponse pour vous!",
        faqs: [
            {
                question: "Super question bien chiante n°1 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°2 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°3 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°4 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    getStarted: {
        text : "Vous voulez tenter l'expérience TheDrinkMarket ?",
        primaryLinkText : "Faire un devis",
        primaryLinkUrl : "/devis",
        pushDownFooter : true,
    },
}

export const footer = {
    links: [
        {
            href:"/soiree-type",
            content:"Soirée Type",
        },
        {
            href:"/about",
            content:"À propos de nous",
        },
        {
            href:"/tarifs",
            content:"Tarifs",
        },
        {
            href:"/contact",
            content:"Nous contacter",
        },
        {
            href:"/devis",
            content:"Faire un devis",
        },
    ]
}

export const hero = {
    main1:"Organisez ",
    main2:" soirée dont vous vous ",
    color1:"LA",
    color2:"souviendrez",
    sub:"Organisez en toute simplicité une soirée où le prix de chacune de vos boissons évolue comme dans un marché financier",
    button:"Nous contacter",
    hook:"Venez en découvrir plus",
}

export const contactForm = {
    subheading: "Nous contacter",
    heading: <>N'hésitez pas à entrer en contact avec <span tw="text-palette1-100">nous</span><wbr/> si vous avez des <span tw="text-palette1-100">questions</span><wbr/></>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    submitButtonText: "Envoyer",
    formAction: "#",
    formMethod: "get",
    textOnLeft: true,
    fields: [
        {
            type:"email",
            name:"email",
            placeholder:"Votre adresse Email",
        },
        {
            type:"text",
            name:"name",
            placeholder:"Nom Complet",
        },
        {
            type:"text",
            name:"structure",
            placeholder:"Votre structure (association, bar, ...)",
        },
        {
            type:"text",
            name:"subject",
            placeholder:"Sujet",
        },
    ],
    message:"Votre Message"
}

export const contactSocials = {
    subheading: "Vous voulez en voir plus ?",
    heading: "Rejoignez nos réseaux sociaux!",
    primaryLinkUrl: "https://www.instagram.com/benji_renoux/",
    secondaryLinkUrl: "https://www.linkedin.com/company/thedrinkmarket/",
    pushDownFooter: true,
}


export const devisForm = {
    subheading: "Demander un devis",
    heading: <>Remplissez le formulaire pour faire une demande de <span tw="text-palette1-100">devis</span><wbr/> ainsi qu'une première prise de <span tw="text-palette1-100">contact</span><wbr/></>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    submitButtonText: "Envoyer",
    formAction: "#",
    formMethod: "get",
    textOnLeft: false,
    fields: [
        {
            type:"email",
            name:"email",
            placeholder:"Votre adresse Email",
        },
        {
            type:"text",
            name:"name",
            placeholder:"Nom Complet",
        },
        {
            type:"text",
            name:"structure",
            placeholder:"Votre structure (association, bar, ...)",
        },
        {
            type:"number",
            name:"scale",
            placeholder:"Nombre moyen de participants attendus",
        },
        {
            type:"text",
            name:"package",
            placeholder:"Package (Basique, Standard, Premium)",
        },

    ],
    message:"Votre Message (optionnel)"
}

export const aboutUs = {
    feature1: {
        heading: (
            <>
                Nous formons une équipe jeune et <span tw="text-palette1-100" > dynamique</span>
            </>
        ),
        subheading: <Subheading>À propos de l'équipe</Subheading>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        primaryButtonText: "",
        primaryButtonUrl: "",
        imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
        buttonRounded: true,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        imageCss: null,
        imageDecoratorBlob: false,
        imageDecoratorBlobCss: null,
        textOnLeft: true,
    },
    feature2: {
        heading: (
            <>
                Développé et designé par des <span tw="text-palette1-100">Etudiants ingénieurs et commerciaux</span>
            </>
        ),
        subheading: "Notre expertise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        primaryButtonText: "Nous contacter",
        primaryButtonUrl: "/contact",
        imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
        buttonRounded: true,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        imageCss: null,
        imageDecoratorBlob: false,
        imageDecoratorBlobCss: null,
        textOnLeft: false,
    },
    featureSatisfaction: {
        subheading: <Subheading>Nos valeurs</Subheading>,
        heading:"Nous les suivons en permanence",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cards:[
            {
                image: <SupportAgentIcon/>,
                title: "Support continu",
                description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            },
            {
                image: <ShieldIcon/>,
                    title: "Equipe talentueuse",
                description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            },
            {
                image: <FavoriteBorderIcon/>,
                    title: "Soirée réussie",
                description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            },
        ],
        linkText:"",
    },
    featureOurTeam:{
        subheading: "Notre équipe",
        heading: "Découvrez TheDrinkMarket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cards: [
                {
                    imageSrc: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
                    position: "Co-Founder",
                    name: "Benjamin Renoux",
                    links: [
                        {
                            url: "https://linkedin.com",
                            icon: LinkedinIcon,
                        },
                    ],
                },
                {
                    imageSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
                    position: "Co-founder",
                    name: "Cédric Jung",
                    links: [

                    {
                        url: "https://linkedin.com",
                        icon: LinkedinIcon,
                    },

                ],
                },
                {
                    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
                    position: "Supreme Chef",
                    name: "Louise Sellami",
                    links: [

                    {
                        url: "https://linkedin.com",
                        icon: LinkedinIcon,
                    },
                ],
                },
        ]
    }

}

export const pricing = {

    pricing: {
        heading:<>
            Packages <HighlightedText>raisonnables</HighlightedText> et <HighlightedText>flexibles</HighlightedText>
        </>,
        subheading:<Subheading>Tarifs</Subheading>,
        plans:[
            {
                name: "Basique",
                price: "150€",
                duration: "24h",
                mainFeature: "Jusqu'à 100 participants",
                features: ["Contenu 1", "Contenu 2", "Contenu 3"],
            },
            {
                name: "Standard",
                price: "200€",
                duration: "24h",
                mainFeature: "Jusqu'à 250 participants",
                features: ["Contenu 1", "Contenu 2", "Contenu 3","Contenu 4"],
                featured: true
            },
            {
                name: "Premium",
                price: "300€",
                duration: "24h",
                mainFeature: "250 participants +",
                features: ["Contenu 1", "Contenu 2", "Contenu 3","Contenu 4", "Contenu 5", "Contenu 6"]
            }
        ],
    },
    testimonials: {
        subheading: "Témoignages",
        heading: "Retours de nos clients",
        testimonials: [
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                quote:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                customerName: "CLP"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                quote:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                customerName: "Plus gros bar de France"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
                quote:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                customerName: "Meilleure boite de France"
            }
        ]
    },

    faq: {
        subheading: <Subheading>FAQS</Subheading>,
        heading: <>Vous avez une <HighlightedText>Question ?</HighlightedText></>,
        //description: "Nous avons surement déjà la réponse pour vous! Jetez un coup d'oeil!",
        faqs: [
            {
                question: "Super question bien chiante n°1 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°2 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°3 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Super question bien chiante n°4 ?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
}


export const exParty = {
    steps1: {
        subheading: "Les étapes préliminaires",
        heading: (
            <>
                Comment se déroule la préparation d'une <span tw="text-palette1-100">soirée</span> avec <span tw="text-palette1-200">TheDrinkMarket</span> ?
            </>
        ),
        imageSrc: TeamIllustrationSrc,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        imageDecoratorBlob: false,
        textOnLeft: false,
        steps: [
            {
                heading: "Le choix",
                description: "Après discussion avec nous, choisissez la solution qui vous conviens le mieux."
            },
            {
                heading: "Première connexion",
                description: "Connectez vous sur le dashboard administrateur de soirée que nous vous donnerons. Des comptes staffeurs/barmans vous serons aussi attribués"
            },
            {
                heading: "Paramétrage de la soirée",
                description: "Choisissez les boissons disponibles pour votre soirées et paramétrez la simulation."
            },
            {
                heading: "Testez",
                description: "Démarrez la simulation une première fois en amont pour vérifier que tout fonctionne correctement et que tout correspond à vos attentes."
            },
            {
                heading: "Réinitialisation",
                description: "Réinitialisez la simulation avant que la soirée commence (vos paramètres seront conservés)"
            }
        ],
        decoratorBlobCss: null,
    },

    steps2: {
        subheading: "Une fois que la soirée a démarré",
        heading: (
            <>
                Que se passe-t-il <span tw="text-palette1-100">pendant</span> la soirée ?
            </>
        ),
        imageSrc: TeamIllustrationSrc,
        imageRounded: true,
        imageBorder: false,
        imageShadow: false,
        imageDecoratorBlob: false,
        textOnLeft: true,
        steps: [
            {
                heading: "Création de compte",
                description: "Donnez le lien de la soirée à vos utilisateurs quelles heures avant son début. Ils pourront ainsi créer leur compte pour la soirée avant son commencement!"
            },
            {
                heading: "Lancez la simulation",
                description: "C'est parti pour un soirée d'enfer!"
            },
            {
                heading: "Commande",
                description: "Un utilisateur commande une boisson"
            },
            {
                heading: "Algorithme",
                description: "Le serveur enregistre la commande et délivre un QRCode de retrait. Il adapte le prix de toutes les boissons en conséquence comme en Bourse"
            },
            {
                heading: "Retrait",
                description: "Un barman/staffeur scan le QRCode de la commande pour vérifier sa validité. Il peut ensuite encaisser le montant affiché de la commande!"
            },
            {
                heading: "En fin de soirée...",
                description: "Vous pouvez exporter en format CSV toutes les commandes qui ont été faites pendant la soirée! Gardez ainsi une trace de vos stocks et vérifiez votre budget :P"
            }
        ],
        decoratorBlobCss: null,
    }
}