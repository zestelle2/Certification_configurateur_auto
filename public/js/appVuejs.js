var allSection = new Vue ({
    delimiters: ['${', '}'],
    el:'#appVue',
    data: {
        legende:false,
        pure: false,
        priceVersion: 0,
        priceTotal: 0,
        priceTotalDisplay: 0,
        message:"",

        pictureBefore : "design",

        /*progress bar */
        valideProgress1: false ,
        valideProgress2: false ,
        valideProgress3: false ,
        valideProgress4: false ,
        valideProgress5: false ,
        valideProgress6: false ,
        valideProgress7: false ,

        /* Section Couleur */
        priceColor: 0,
        black: false,
        white: false,
        blue: false,
        pictureBlackPure : ["/picture/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg"
                            ],
        pictureBluePure : ["./picture/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg"
                            ],
        pictureWhitePure: ["./picture/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
                            "/picture/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg"
                            ],

        pictureBlackLegende :["/picture/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg"
                            ],
        pictureBlueLegende :["/picture/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg"
                            ],
        pictureWhiteLegende: ["/picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",        
                            "/picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            "/picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg"
                        ],
        pictureCarouselColor: ["./picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",        
                            "..//picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                            "..//picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            "..//picture/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg"
                            ],
        
        /* choix des jantes */
        priceRims: 0,
        standartRims : false,
        seracRims:false,
        legendeRims: false,
        seeRimsPicture : ["/picture/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg",
                        "/picture/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg",
                        "/picture/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",

                        "/picture/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg",
                        "/picture/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg",
                        "/picture/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                
                        "/picture/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg",
                        "/picture/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg",
                        "/picture/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg",

                        "/picture/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                    ],
        /* choix sellerie */
        priceSeat: 0,
        cndSeat : false,
        cnpSeat:false,
        cnSeat: false,
        cbSeat: false,
        seeSeatPicture : ["/picture/configurateur/interieurs/selection/cuir-noir_dinamica (1).jpg",
                        "/picture/configurateur/interieurs/selection/cuir-noir_perfore (2).jpg",
                        "/picture/configurateur/interieurs/selection/cuir-noir (3).jpg",
                        "/picture/configurateur/interieurs/selection/cuir-brun (4).jpg",
                    ],
        /* choix equipements */
        choiceCategory: false,
        titleCategoryFirst:"design",

        titleCategory: "design",
        i: 0,
        priceEquipements: 0,
        driving: false,
        confort:false,
        design: false,
        media: false,
        inside: false,
        outside: false,
        security: false,                            
        seeEquipementsPicture : ["/picture/configurateur/equipements/selection/conduite (1).jpg",
                        "/picture/configurateur/equipements/selection/confort (2).jpg",
                        "/picture/configurateur/equipements/selection/design (3).jpg",
                        "/picture/configurateur/equipements/selection/media-nav (4).jpg",
                        "/picture/configurateur/equipements/selection/perso-ext (5).jpg",
                        "/picture/configurateur/equipements/selection/perso-int (6).jpg",
                        "/picture/configurateur/equipements/selection/securite (7).jpg",
                    ],
        /* EQUIPEMENT 2 image */

        arrayEquipmentDisplay : "",
        tableCategoryDisplay : "conduite",
        arrayFistPictureEquipement :"/picture/configurateur/equipements/selection/conduite.jpg",


        arrayEquipment : [
            "/picture/configurateur/equipements/selection/conduite.jpg",
            "/picture/configurateur/equipements/selection/confort.jpg",
            "/picture/configurateur/equipements/selection/design.jpg",
            "/picture/configurateur/equipements/selection/media-nav.jpg",
            "/picture/configurateur/equipements/selection/perso-ext.jpg",
            "/picture/configurateur/equipements/selection/securite.jpg",
            "/picture/configurateur/equipements/selection/perso-int.jpg",
        ],
        tableCategory : [ "securite" , "perso exterieur ",
                            " perso interieur ", "media et navigation"
                            , "design" ,"confort" , 
                            "conduite" ],

        /* EQUIPEMENT 2 Conduite */
        cameraRecul : false,
        stationnementArriere : false,
        stationnementArriereAvant: false,
        echappementSport : false,
        /* EQUIPEMENT 2 Confort */
        packRangement : false,
        regulateurVitesse : false,
        retroExterieur: false,
        retroInterieur : false,
        /* EQUIPEMENT 2 Media Navigation */
        audioFocal : false,
        audioPremium : false,
        audioStandard: false,
        alpineMetrics : false,
        /* EQUIPEMENT 2 Perso exterieur */
        etrierBleu : false,
        etrierGris : false,
        logoAlpine :false,
        /* EQUIPEMENT 2 Perso Interieur */
        logoVolant : false,
        packCarbone : false,
        pedalAlu : false,
        siegeChauffant : false,
        /* EQUIPEMENT 2 SECURITE */
        aideFreinage : false,    
        airbag : false,
        freinageHautePerfomance : false,
         /* EQUIPEMENT 2 DESIGN */
         reposePied : false,
         packHeritage: false,
                

    },
    methods: {
        /* Choix de version */
        buttonVersionLegende: function() {
           
            this.pure =false;
            this.legende = true;
            this.valideProgress1= true;
            this.priceVersion= 58500;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                
        },
        buttonVersionPure: function() {
            this.legende = false;
            this.valideProgress1= true;
            this.pure = true;
            this.priceVersion= 54700;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            
        },
        choiceColorBlack: function (){
            this.black = true;
            this.white = false;
            this.blue = false;
            this.priceColor= 840;
            /*la bar de progressionn */
            this.valideProgress2 = true;

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            if(this.legende) {
                this.pictureCarouselColor= this.pictureBlackLegende;
            }
            else{
                this.pictureCarouselColor= this.pictureBlackPure;
            }
            this.pictureCarouselColor;
        },
        choiceColorBlue: function (){
            /* choix des couleur */   
            this.black = false;
            this.white = false;
            this.blue = true;

            /*la bar de progressionn */
            this.valideProgress2 = true;

            /* le Prix */
            this.priceColor= 1800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            /* selon la version */
            if(this.legende) {
                this.pictureCarouselColor= this.pictureBlueLegende;
            }
            else{
                this.pictureCarouselColor= this.pictureBluePure;
            }
            this.pictureCarouselColor;
        },
        choiceColorWhite: function (){
            this.black = false;
            this.white = true;
            this.blue = false;
            /*la bar de progressionn */
            this.valideProgress2 = true;
          
            /* le Prix */
            this.priceRims = 1000;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCarouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },
        choiceRimsSerac: function () {
            this.message = "SERAC";
            this.standartRims = false;
            this.seracRims =true;
            this.legendeRims = false;

            /*la bar de progressionn */
            this.valideProgress3 = true;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

             /* le Prix */
             this.priceRims = 1000;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
                if( this.black){
                    
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[6]);
                }
                    
                else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[0]);
                }
                else if (this.white ){
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[3]);
                }
                else {
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[3]);
                }
              
            
            },
        choiceRimsLegende: function () {
            this.message = "LEGENDE";
            this.standartRims = false;
            this.seracRims =false;
            this.legendeRims = true;

            /*la bar de progressionn */
            this.valideProgress3 = true;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

             /* le Prix */
             this.priceRims = 0;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
             if( this.black){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[7]);
            }
                
            else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[1]);
            }
            else if (this.white ){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[4]);
            }
            else {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[4]);
            }
        },
        choiceRimsStandard: function () {
            this.message = "STANDARD";
            this.standartRims = true;
            this.seracRims =false;
            this.legendeRims = false;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

            /*la bar de progressionn */
            this.valideProgress3 = true;

             /* le Prix */
             this.priceRims = 0;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
            if( this.black){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[8]);
            }
            else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[2]);
            }
            else if (this.white ){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[5]);
            }
            else {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[5]);
            }
            /* TO DO : LE CHOIX  DE JANTE LEGENDE SEULEMENT SI ON A */
        },
        /* selon seat */
        choiceSeatCnd: function () {
            this.cndSeat = true;
            this.cnpSeat = false;
            this.cnSeat = false;
            this.cbSeat = false;

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCarouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },
        choiceSeatCnp: function () {
            this.cndSeat = false;
            this.cnpSeat = true;
            this.cnSeat = false;
            this.cbSeat = false;

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCacameraReculrouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },
        choiceSeatCn: function () {
            this.cndSeat = false;
            this.cnpSeat = false;
            this.cnSeat = true;
            this.cbSeat = false;

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCarouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },
        choiceSeatCb: function () {
            this.cndSeat = false;
            this.cnpSeat = false;
            this.cnSeat = false;
            this.cbSeat = true;

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCarouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },

        /* CHOIX EQUIPEMENT */
        /* image qui change en fonction de la category */
        choiceCategoryPictureInstant () {
            // nous avons choisi une catégorie 
            this.choiceCategory = true;

            //  on ajoute l'image correspondante à la fin du tableau en fonction de la catégory
            switch (this.titleCategoryFirst) {
                case 'conduite':
                    this.tableCategoryDisplay = "conduite";

                    this.driving = false;        
                    this.design = true;
                    this.confort = false;
                    this.media = false;
                    this.inside = false;
                    this.outside = false;
                    this.security = false;

                    this.choiceCategory = true;
                    this.titleCategory = "design";
                    this.titleCategoryFirst ="design"
                    this.arrayFistPictureEquipement = "/picture/configurateur/equipements/selection/conduite.jpg"

                    break;
                case 'design':
                        this.tableCategoryDisplay = "design";
                        this.choiceCategory = true;
                        this.titleCategory = "conduite";
                        this.titleCategoryFirst ="conduite";

                      
                        this.confort = false;
                        this.media = false;
                        this.inside = false;
                        this.outside = false;
                        this.security = false;
                        this.design = false;
                        this.driving = true;
                        
                        this.arrayFistPictureEquipement = "/picture/configurateur/equipements/selection/design.jpg"

                    break;
                
                default:
                    console.log( "je ne suis dans aucune category , refait ton code !");
            }
            
          
        },
        choiceDriving: function () {
            this.driving = true;
            this.confort = false;
            this.design = false;
            this.media = false;
            this.inside = false;
            this.outside = false;
            this.security = false;

            this.choiceCategory = true;
            this.titleCategory = "conduite";

            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant("conduite");


        },
        choiceConfort: function () {
            this.driving = false;
            this.confort = true;
            this.design = false;
            this.media = false;
            this.inside = false;
            this.outside = false;
            this.security = false; 

            this.choiceCategory = true;
            this.titleCategory = "confort";

            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant ("confort");


        },
        choiceDesign: function () {
            this.driving = false;
            this.confort = false;
            this.design = true;
            this.media = false;
            this.inside = false;
            this.outside = false;
            this.security = false;

            this.choiceCategory = true;
            this.titleCategory = "design";
            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant ("design");
        },
        choiceMedia: function () {
            this.driving = false;
            this.confort = false;
            this.design = false;
            this.media = true;
            this.inside = false;
            this.outside = false;
            this.security = false; 

            this.choiceCategory = true;
            this.titleCategory = "media et navigation";
            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant ("media et navigation");


        },
        choiceInside: function () {
            this.driving = false;
            this.confort = false;
            this.design = false;
            this.media = false;
            this.inside = true;
            this.outside = false;
            this.security = false;

            this.choiceCategory = true;
            this.titleCategory = "perso interieur";
            console.log(this.titleCategory + " dans choiceInside");

            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant ("perso interieur");

        },
        choiceOutside: function () {
            this.driving = false;
            this.confort = false;
            this.design = false;
            this.media = false;
            this.inside = false;
            this.outside = true;
            this.security = false; 

            this.choiceCategory = true;
            this.titleCategory = "perso exterieur";
            this.choiceCategoryPictureInstant ("perso exterieur");
            this.deleteArrayEquipmentPush();

        },
        choiceSecurity: function () {
            this.driving = false;
            this.confort = false;
            this.design = false;
            this.media = false;
            this.inside = false;
            this.outside = false;
            this.security = true; 

            this.choiceCategory = true;
            this.titleCategory = "securite";
            this.deleteArrayEquipmentPush();
            // this.choiceCategoryPictureInstant ();

        },
        /* choix EQUIPEMENT 2 CONDUITE */
        choiceCameraRecul: function () {
            this.cameraRecul = true;
 
            this.priceEquipements = this.priceEquipements + 1200;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceStationnementArriere: function () {
            this.stationnementArriere = true;

            this.priceEquipements = this.priceEquipements + 420;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceStationnementArriereAvant: function () {
            this.stationnementArriereAvant = true;

            this.priceEquipements = this.priceEquipements + 720;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceEchappementSport : function () {
            this.echappementSport =true;

            this.priceEquipements = this.priceEquipements + 1500;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        /* CHOICE EQUIPEMENT 2 Confort */
        choicePackRangement: function () {
            this.packRangement =true;
            var pricePackRangement= 504;
            this.priceEquipements = this.priceEquipements + 504;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceRegulateurVitesse: function () {
            this.regulateurVitesse =true;
            var priceRegulateur= 0;
            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceRetroExterieur : function () {
            this.retroExterieur =true;
            var priceRetroExterieur= 504;
            this.priceEquipements = this.priceEquipements + 504;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        },
        choiceRetroInterieur : function () {
            this.retroInterieur =true;
            var priceRetroInterieur= 0;
            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        /* EQUIPEMENT 2 Media Navigation */
        choiceAudioFocal : function () {
            this.audioFocal = true;

            this.priceEquipements = this.priceEquipements + 600;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceAudioPremium : function () {
            this.audioPremium = true;

            this.priceEquipements = this.priceEquipements + 1200;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceAudioStandard : function () {
            this.audioStandard = true ; 

            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceAlpineMetrics : function () {
            this.alpineMetrics = true;

            this.priceEquipements = this.priceEquipements + 204;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        /* EQUIPEMENT 2 Perso exterieur */
        choiceEtrierBleu : function () {
            this.etrierBleu =true;        
            
            this.priceEquipements = this.priceEquipements + 384;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceEtrierGris : function () {
            this.etrierGris = true;

            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceLogoAlpine : function ()  {
            this.logoAlpine =true;

            this.priceEquipements = this.priceEquipements + 120;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        /* EQUIPEMENT 2 Perso Interieur */
        choiceLogoVolant : function () {
            this.logoVolant = true;

            this.priceEquipements = this.priceEquipements + 84;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choicePackCarbone : function () {
            this.packCarbone = true;

            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choicePedalAlu : function () {
            this.pedalAlu = true;

            this.priceEquipements = this.priceEquipements + 120;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceSiegeChauffant : function () {
            this.siegeChauffant =true ;

            this.priceEquipements = this.priceEquipements + 400;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        /* EQUIPEMENT 2 SECURITE */
        choiceAideFreinage : function () {
            this.aideFreinage = true;

            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceAirbag : function () { 
           this.airbag = true; 

           this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
         },
        choiceFreinageHautePerfomance () {
            this.freinageHautePerfomance = true;

            this.priceEquipements = this.priceEquipements + 1000;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceReposePied : function () {
            this.reposePied = true;

            this.priceEquipements = this.priceEquipements + 96;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choicePackHeritage : function () {
            this.packHeritage = true;

            this.priceEquipements = this.priceEquipements + 180;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }, 
        deleteArrayEquipmentPush: function () {

            if(this.arrayEquipment.length === 10 ) 
            {
                console.log("l'élement a était supprimer");
                let PictureDisplay  = this.arrayEquipment.splice(7, 1);
                let PictureDisplay2  = this.tableCategory.splice(7, 1);
            }
            else {
                console.log("l'élement est vivant");
            }

        },
        deleteElementConduite: function (el) {
    
            var tableauConduiteString = [ "cameraRecul",
                "stationnementArriere",
                "stationnementArriereAvant",
                "echappementSport"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauConduiteString.length ; i++ ) {
                console.log(tableauConduiteString[i]);
                
                switch (tableauConduiteString[i]) {
                    case 'cameraRecul':
                        if(el == 'cameraRecul')
                        {
                            this.cameraRecul = false;
                            
                        }
                        
                        break;
                    case 'stationnementArriere':
                        if(el == 'stationnementArriere')
                        {
                            this.stationnementArriere = false;
                        }
                        break;
                    case 'stationnementArriereAvant':
                        if(el == 'stationnementAvant')
                            {
                                this.stationnementArriereAvant = false;
                        }  
                        break;
                    case 'echappementSport':
                        if(el == 'echappementSport')
                        {
                            this.echappementSport =false;
                        }  
                        break;
                    default:
                
                }
                
            }
        },
        deleteElementDesign: function (el) {

            var tableauDesignString = [ "reposePied",
                "packHeritage"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauDesignString.length ; i++ ) {
                console.log(tableauDesignString[i]);
                
                switch (tableauDesignString[i]) {
                    case 'reposePied':
                        if(el == 'reposePied')
                        {
                            this.reposePied = false;
                            this.priceEquipements = this.priceEquipements - 96;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }
                        
                        break;
                    case 'packHeritage':
                        if(el == 'packHeritage')
                        {
                            this.packHeritage = false;
                            this.priceEquipements = this.priceEquipements - 180;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }
                        break;
                    default:
                
                }
                
            }

        },
        deleteElementConfort : function(el) {

            var tableauConfortString = [ "packRangement",
                "regulateurVitesse",
                "retroExterieur",
                "retroInterieur"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauConfortString.length ; i++ ) {
                console.log(tableauConfortString[i]);
                
                switch (tableauConfortString[i]) {
                    case 'retroInterieur':
                        if(el == 'retroInterieur')
                        {
                            this.retroInterieur = false;
                            this.priceEquipements = this.priceEquipements - 0;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        
                        break;
                    case 'retroExterieur':
                        if(el == 'retroExterieur')
                        {
                            this.retroExterieur = false;
                            this.priceEquipements = this.priceEquipements - 504;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        break;
                    case 'regulateurVitesse':
                        if(el == 'regulateurVitesse')
                            {
                                this.regulateurVitesse = false;
                                this.priceEquipements = this.priceEquipements - 0;
                                this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                                let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                                this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    case 'packRangement':
                        if(el == 'packRangement')
                        {
                            this.packRangement =false;
                            this.priceEquipements = this.priceEquipements - 504;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    default:
                
                }
                
            }

        },
         deleteElementMedia : function (el) {

            var tableauElementMediaString = [ "audioFocal",
                "audioPremium",
                "audioStandard",
                "alpineMetrics"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauElementMediaString.length ; i++ ) {
                console.log(tableauElementMediaString[i]);
                
                switch (tableauElementMediaString[i]) {
                    case 'audioFocal':
                        if(el == 'audioFocal'){

                            this.audioFocal = false;
                            this.priceEquipements = this.priceEquipements - 600;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        
                        break;
                    case 'audioPremium':
                        if(el == 'audioPremium'){

                            this.audioPremium = false;
                            this.priceEquipements = this.priceEquipements - 1200;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        break;
                    case 'audioStandard':
                        if(el == 'audioStandard'){

                            this.audioStandard = false;
                            this.priceEquipements = this.priceEquipements - 0;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    case 'alpineMetrics':
                        if(el == 'alpineMetrics'){

                            this.packRangement =false;
                            this.priceEquipements = this.priceEquipements - 204;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    default:
                
                }
                
            }

         },
         deleteElementPersoExterieur : function (el) {

            var tableauElementPersoExterieur = [ "etrierBleu",
                "etrierGris",
                "logoAlpine"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauElementPersoExterieur.length ; i++ ) {
                console.log(tableauElementPersoExterieur[i]);
                
                switch (tableauElementPersoExterieur[i]) {
                    case 'etrierBleu':
                        if(el == 'etrierBleu'){

                            this.etrierBleu = false;
                            this.priceEquipements = this.priceEquipements - 384;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        
                        break;
                    case 'etrierGris':
                        if(el == 'etrierGris'){

                            this.etrierGris = false;
                            this.priceEquipements = this.priceEquipements - 0;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        break;
                    case 'logoAlpine':
                        if(el == 'logoAlpine'){

                            this.logoAlpine = false;
                            this.priceEquipements = this.priceEquipements - 120;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    default:
                
                }
                
            }
        },
        deleteElementPersoInterieur : function (el) {
            
            var tableauPersoInterieurString = [ "logoVolant",
            "packCarbone",
            "pedalAlu",
            "siegeChauffant"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauPersoInterieurString.length ; i++ ) {
                console.log(tableauPersoInterieurString[i]);
                
                switch (tableauPersoInterieurString[i]) {
                    case 'logoVolant':
                        if(el == 'logoVolant'){

                            this.logoVolant = false;
                            this.priceEquipements = this.priceEquipements - 84;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        
                        break;
                    case 'packCarbone':
                        if(el == 'packCarbone'){

                            this.packCarbone = false;
                            this.priceEquipements = this.priceEquipements - 0;

                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                        }
                        break;
                    case 'pedalAlu':
                        if(el == 'pedalAlu'){

                            this.pedalAlu = false;
                            this.priceEquipements = this.priceEquipements - 120;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    case 'siegeChauffant':
                        if(el == 'siegeChauffant'){

                            this.siegeChauffant =false;
                            this.priceEquipements = this.priceEquipements - 400;
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    default:
                
                }
                
            }
        }, deleteElementSecurity : function (el) {

            var tableauElementSecurity = [ "aideFreinage",
                "airbag",
                "freinageHautePerfomance"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauElementSecurity.length ; i++ ) {
                console.log(tableauElementSecurity[i]);
                
                switch (tableauElementSecurity[i]) {
                    case 'aideFreinage':
                        if(el == 'aideFreinage'){
    
                            this.aideFreinage = false;
                            this.priceEquipements = this.priceEquipements - 0;
    
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
                        }
                        
                        break;
                    case 'airbag':
                        if(el == 'airbag'){
    
                            this.airbag = false;
                            this.priceEquipements = this.priceEquipements - 0;
    
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
                        }
                        break;
                    case 'freinageHautePerfomance':
                        if(el == 'freinageHautePerfomance'){
    
                            this.freinageHautePerfomance = false;
                            this.priceEquipements = this.priceEquipements - 1000;
                            
                            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements; 
                            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
                            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        }  
                        break;
                    default:
                
                }
                
            }
        }
    
    }
    
})
