import {createContext, useState, useEffect, useContext } from "react";

const Context = createContext();

const Provider = ({ children}) => {
    const [content, setContent] = useState({
        "logo": {
            "id": 1262,
            "name": "Logo SOQUIJ > Retour à l'accueil",
            "url": "https://aristote.soquij.qc.ca/a/media/logos/sqj-headerlogo.svg",
            "alias": "logo",
            "attributAlt": "Logo SOQUIJ > Retour à l'accueil",
            "lienDto": {
                "texte": "Accueil",
                "cible": null,
                "messageAccessibilite": null,
                "iconeDto": null,
                "affichages": null,
                "urlTo": "/a/fr/accueil"
            }
        },
        "navigationDto": {
            "menuPrincipalDtos": [
                {
                    "lienDto": {
                        "texte": "Produits",
                        "cible": null,
                        "messageAccessibilite": null,
                        "iconeDto": null,
                        "affichages": null,
                        "urlTo": "/a/fr/produits/"
                    },
                    "megaMenuDto": {
                        "megaMenuColonneImageDto": {
                            "titreColonne": " Tous les produits",
                            "html": "<p>SOQUIJ offre une gamme de produits complets pour divers secteurs d’activités et pour les professionnels juridique et non-juridique.</p>",
                            "imageDto": {
                                "id": 1628,
                                "name": "Image Produits Megamenu",
                                "url": "https://aristote.soquij.qc.ca/a/media/produits/image-produits-megamenu.jpg",
                                "alias": "image",
                                "attributAlt": "",
                                "lienDto": null
                            },
                            "lienDto": {
                                "texte": "Découvrir",
                                "cible": "",
                                "messageAccessibilite": null,
                                "iconeDto": null,
                                "affichages": null,
                                "urlTo": "/a/fr/produits/"
                            },
                            "couleurTrait": "Bleu"
                        },
                        "megaMenuColonneTexteDtos": [
                            {
                                "titreColonne": "Savoir judiciaire",
                                "lienDtos": [
                                    {
                                        "texte": "Plumitifs",
                                        "cible": "",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/plumitifs/"
                                    },
                                    {
                                        "texte": "Avis d’exécutions forcées",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/avis-executions-forcees/"
                                    }
                                ],
                                "couleurTrait": "Bleu Tadoussac"
                            },
                            {
                                "titreColonne": "Savoir juridique",
                                "lienDtos": [
                                    {
                                        "texte": "Recherche juridique",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/recherche-juridique/"
                                    },
                                    {
                                        "texte": "Aide à la citation",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/aide-citation/"
                                    },
                                    {
                                        "texte": "Loi sur la protection de la jeunesse annotée",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/lpja/"
                                    }
                                ],
                                "couleurTrait": "Rouge Rougemont"
                            },
                            {
                                "titreColonne": "Informer",
                                "lienDtos": [
                                    {
                                        "texte": "L'Express",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/express/"
                                    },
                                    {
                                        "texte": "L'Express Travail",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "/a/fr/produits/express-travail/"
                                    }
                                ],
                                "couleurTrait": "Vert Tremblant"
                            }
                        ],
                        "contentType": "megaMenu"
                    }
                },
                {
                    "lienDto": {
                        "texte": "Formations",
                        "cible": "_blank",
                        "messageAccessibilite": null,
                        "iconeDto": null,
                        "affichages": null,
                        "urlTo": "https://formations.soquij.qc.ca"
                    },
                    "megaMenuDto": {
                        "megaMenuColonneImageDto": {
                            "titreColonne": "Centre de formation",
                            "html": "<p>Formations courtes ou longues sur nos produits, webinaires et conférences thématiques, notre Centre de formation a beaucoup à offrir!</p>",
                            "imageDto": {
                                "id": 2977,
                                "name": "Calendrier Formations 500X300",
                                "url": "https://aristote.soquij.qc.ca/a/media/formation/calendrier-formations_500x300.png",
                                "alias": "image",
                                "attributAlt": "",
                                "lienDto": null
                            },
                            "lienDto": {
                                "texte": "Consultez le calendrier",
                                "cible": null,
                                "messageAccessibilite": null,
                                "iconeDto": null,
                                "affichages": null,
                                "urlTo": "https://formations.soquij.qc.ca/page/calendrier/10?source=megamenu"
                            },
                            "couleurTrait": "Fermont"
                        },
                        "megaMenuColonneTexteDtos": [
                            {
                                "titreColonne": "Formations par produit",
                                "lienDtos": [
                                    {
                                        "texte": "Plumitifs",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalog/topCategory//289"
                                    },
                                    {
                                        "texte": "Recherche juridique",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalog/topCategory//290"
                                    }
                                ],
                                "couleurTrait": "Saguenay"
                            },
                            {
                                "titreColonne": "Vidéoformations",
                                "lienDtos": [
                                    {
                                        "texte": "Toutes les vidéoformations",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalog/subCategory//297"
                                    },
                                    {
                                        "texte": "Le coffre-fort patrimonial : gardien de la vie numérique",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/videoformation-le-coffre-fort-patrimonial-gardien-de-la-vie-/891/-1/-1"
                                    },
                                    {
                                        "texte": "Antécédents judiciaires et refus d'embauche : discrimination ou non?",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/videoformation-antecedents-judiciaires-et-refus-d-embauche-d/505/-1/-1"
                                    },
                                    {
                                        "texte": "Diffamation à l'ère des médias sociaux",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/videoformation-diffamation-a-l-ere-des-medias-sociaux/504/-1/-1"
                                    }
                                ],
                                "couleurTrait": "Rouge"
                            },
                            {
                                "titreColonne": "Tutoriels gratuits",
                                "lienDtos": [
                                    {
                                        "texte": "Tutoriels Plumitifs",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/tutoriels-sur-le-service-plumitif/535/-1/-1"
                                    },
                                    {
                                        "texte": "Tutoriels Recherche juridique",
                                        "cible": null,
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/tutoriels-sur-le-service-recherche-juridique/584/-1/-1"
                                    }
                                ],
                                "couleurTrait": "Bleu"
                            },
                            {
                                "titreColonne": "Formation interactive",
                                "lienDtos": [
                                    {
                                        "texte": "Capsule Plumitifs - Antécédents judiciaires et criminels",
                                        "cible": "_blank",
                                        "messageAccessibilite": null,
                                        "iconeDto": null,
                                        "affichages": null,
                                        "urlTo": "https://formations.soquij.qc.ca/catalogItemDetails/capsule-interactive-plumitifs-antecedents-judiciaires-et-cri/336/-1/-1"
                                    }
                                ],
                                "couleurTrait": "Bleu"
                            }
                        ],
                        "contentType": "megaMenu"
                    }
                },
                {
                    "lienDto": {
                        "texte": "Trouver une décision",
                        "cible": "",
                        "messageAccessibilite": null,
                        "iconeDto": null,
                        "affichages": null,
                        "urlTo": "http://citoyens.soquij.qc.ca/"
                    },
                    "megaMenuDto": null
                }
            ]
        },
        "boutonActionDtos": [
            {
                "texte": "Nous joindre",
                "cible": null,
                "messageAccessibilite": null,
                "iconeDto": null,
                "affichages": null,
                "urlTo": "/a/fr/nous-joindre/"
            },
            {
                "texte": "Se connecter",
                "cible": null,
                "messageAccessibilite": null,
                "iconeDto": null,
                "affichages": null,
                "urlTo": "/a/connexion/"
            }
        ],
        "lienSecondaireDtos": [
            {
                "texte": "Blogue",
                "cible": "_blank",
                "messageAccessibilite": null,
                "iconeDto": null,
                "affichages": null,
                "urlTo": "https://blogue.soquij.qc.ca/"
            },
            {
                "texte": "Carrières",
                "cible": "_blank",
                "messageAccessibilite": null,
                "iconeDto": null,
                "affichages": null,
                "urlTo": "https://carrieres.soquij.qc.ca"
            },
            {
                "texte": "Centre d'aide",
                "cible": "_blank",
                "messageAccessibilite": null,
                "iconeDto": {
                    "id": 1286,
                    "name": "Icone Question",
                    "url": "https://aristote.soquij.qc.ca/a/media/icones/icone-question.svg",
                    "alias": "iconeLien",
                    "attributAlt": "Des réponses à toutes vos questions. S'ouvrira dans une nouvelle fenêtre.",
                    "lienDto": null
                },
                "affichages": null,
                "urlTo": "https://aide.soquij.qc.ca"
            }
        ],
        "contentType": "header"
    })
    const [logo, setLogo] = useState({
        "url": "https://aristote.soquij.qc.ca/a/media/logos/sqj-headerlogo.svg",
        "attributAlt": "Logo SOQUIJ > Retour à l'accueil",
        "lienDto": {
            "texte": "Accueil",
            "urlTo": "/a/fr/accueil"
        }
    })
    const [navigation, setNavigation] = useState({"menuPrincipalDtos": []})
    const [liensSecondaires, setLiensSecondaires ] = useState([])
    const [boutonActionDtos, setBoutonActionDtos] = useState( [])
    const fetchContent = async () =>  {
        const response = await fetch(`https://api-aristote.soquij.qc.ca/Contenu/fr`);
        const data = await response.json();
        setContent(data)
        setLogo(data.headerDto.logo)
        setNavigation(data.headerDto.navigationDto)
        setLiensSecondaires(data.headerDto.lienSecondaireDtos)
        setBoutonActionDtos(data.headerDto.boutonActionDtos)
        console.log(data.headerDto.boutonActionDtos)
    }
    useEffect(() => {
        fetchContent()
    }, [])

    const exposed = {
        content,
        logo,
        navigation,
        liensSecondaires,
        boutonActionDtos,
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useContent = () => useContext(Context)

export default Provider;