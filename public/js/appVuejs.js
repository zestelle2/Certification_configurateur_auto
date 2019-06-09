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
        titleCategory: "",
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
        tableCategoryDisplay : "",
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
            this.choiceCategoryPictureInstant ();


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
            this.choiceCategoryPictureInstant ();


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
            this.choiceCategoryPictureInstant ();
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
            this.choiceCategoryPictureInstant ();


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
            this.titleCategory = "persointerieur";
            console.log(this.titleCategory + " dans choiceInside");

            this.deleteArrayEquipmentPush();
            this.choiceCategoryPictureInstant ();

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
            this.choiceCategoryPictureInstant ();
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
            this.choiceCategoryPictureInstant ();

        },
        /* choix EQUIPEMENT 2 CONDUITE */
        choiceCameraRecul: function () {
            this.cameraRecul = true;
        },
        choiceStationnementArriere: function () {
            this.stationnementArriere = true;
        },
        choiceStationnementArriereAvant: function () {
            this.stationnementArriereAvant = true;
        },
        choiceEchappementSport : function () {
            this.echappementSport =true;
        },
        /* CHOICE EQUIPEMENT 2 Confort */
        choicePackRangement: function () {
            this.packRangement =true;
        },
        choiceRegulateurVitesse: function () {
            this.regulateurVitesse =true;
        },
        choiceRetroExterieur : function () {
            this.retroExterieur =true;
        },
        choiceRetroInterieur : function () {
            this.retroInterieur =true;
        },
        /* EQUIPEMENT 2 Media Navigation */
        choiceAudioFocal : function () {
            this.audioFocal = true;
        },
        choiceAudioPremium : function () {
            this.audioPremium = true;
        },
        choiceAudioStandard : function () {
            this.audioStandard = true ; 
        },
        choiceAlpineMetrics : function () {
            this.alpineMetrics = true;
        },
        /* EQUIPEMENT 2 Perso exterieur */
        choiceEtrierBleu : function () {
            this.etrierBleu =true;            
        },
        choiceEtrierGris : function () {
            this.etrierGris = true;
        },
        choiceLogoAlpine : function ()  {
            this.logoAlpine =true;
        },
        /* EQUIPEMENT 2 Perso Interieur */
        choiceLogoVolant : function () {
            this.logoVolant = true;
        },
        choicePackCarbone : function () {
            this.packCarbone = true;
        },
        choicePedalAlu : function () {
            this.pedalAlu = true;
        },
        choiceSiegeChauffant : function () {
            this.siegeChauffant =true ;
        },
        /* EQUIPEMENT 2 SECURITE */
        choiceAideFreinage : function () {
            this.aideFreinage = true;
        },
        choiceAirbag : function () { 
           this.airbag = true; 
         },
        choiceFreinageHautePerfomance () {
            this.freinageHautePerfomance = true;
        },
        choiceReposePied : function () {
            this.reposePied = true;
        },
        choicePackHeritage : function () {
            this.packHeritage = true;
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
        /* image qui change en fonction de la category */
        choiceCategoryPictureInstant () {
            // nous avons choisi une catégorie 
            this.choiceCategory = true;

            // on ajoute l'image correspondante à la fin du tableau en fonction de la catégory
            switch (this.titleCategory) {
                case 'securite':
                    let arrayEquipmentDay = this.arrayEquipment.push(this.arrayEquipment[5]);
                    let tableCategoryDis = this.tableCategory.push(this.tableCategory[0]);

                    break;
                case 'perso exterieur':
                    let arrayEquipmentplay = this.arrayEquipment.push(this.arrayEquipment[4]);
                    let tableCategoryDiay = this.tableCategory.push(this.tableCategory[1]);
                    
                    break;
                case 'persointerieur':
                    console.log("je suis dans intérieur");
                    let arrayEquipmentDisp = this.arrayEquipment.push(this.arrayEquipment[6]);
                    let tableCategoryDisy = this.tableCategory.push(this.tableCategory[2]);
                    break;
                case 'media et navigation':
                    let arrayEquipmentDplay = this.arrayEquipment.push(this.arrayEquipment[3]);
                    let tableCategoryDplay = this.tableCategory.push(this.tableCategory[3]);
                    break;
                case 'design':
                    let arrayEquipmentDsplay = this.arrayEquipment.push(this.arrayEquipment[2]);
                    let tableCategoryDispay = this.tableCategory.push(this.tableCategory[4]);
                    break;
                case 'confort':
                    console.log(" je  suis dans confort ");
                    let arrayEquipmentDisploay = this.arrayEquipment.push(this.arrayEquipment[1]);
                    let tableCategoryDistay = this.tableCategory.push(this.tableCategory[5]);
                    break;
                case 'conduite':
                    console.log( "je suis dans conduite");
                    let arrayEquipmentDisplay = this.arrayEquipment.push(this.arrayEquipment[0]);
                    let tableCategoryDisplaylab = this.tableCategory.push(this.tableCategory[6]);       
                    break;
                default:
                    console.log( "je ne suis dans aucune category , refait ton code !");
            }
            
            // on stock la valeur numero 7 dans un tableau 
            this.i = 7;
            this.arrayEquipmentDisplay = this.arrayEquipment[2];
            this.tableCategoryDisplay = this.tableCategory[4];
            
            if(this.arrayEquipment.length  === 9 ) {
                console.log("miam");
                this.i = 8;
                this.arrayEquipmentDisplay = this.arrayEquipment[this.i-1];
                this.tableCategoryDisplay = this.tableCategory[this.i-1];
            }
            if(this.arrayEquipment.length === 10) {
                this.i = 9;
                this.deleteArrayEquipmentPush();
                console.log("je suis sortie");
                this.arrayEquipmentDisplay = this.arrayEquipment[this.i-2];
                this.tableCategoryDisplay = this.tableCategory[this.i-2];
            }
        },
        deleteElementConduite: function () {
            var tableauDesign = [ this.cameraRecul,
                                    this.stationnementArriere,
                                    this.stationnementArriereAvant,
                                    this.echappementSport
            ];
            var tableauConduiteString = [ "cameraRecul",
                "stationnementArriere",
                "stationnementArriereAvant",
                "echappementSport"
            ]; 
            for (i = 0 ;  i < tableauConduite.length ; i++ ) {
             

                if (tableauConduite[i] === true) {
                    switch (tableauConduiteString[i]) {
                        case 'cameraRecul':
                            this.cameraRecul = false;
                            break;
                        case 'stationnementArriere':
                            console.log("je rentre dans le switch")
                            this.stationnementArriere = false;
                            console.log("stationne arriere etape 2  " +this.stationnementArriere);

                            break;
                        case 'stationnementArriereAvant':
                            this.stationnementArriereAvant = false;
                            break;
                        case 'echappementSport':
                            this.echappementSport =false;
                            break;
                        default:
                    
                    }
                }
            }
        },
        deleteElementDesign: function () {
            if (this.reposePied ==true) {
                this.reposePied =false;
            }
            if (this.packHeritage ==true) {
                this.packHeritage =false;
            } 
        },
        deleteElementConfort : function() {
            if (this.packRangement == true) {
                this.packRangement = false;
            }
            if (this.regulateurVitesse == true){
                this.regulateurVitesse = false;
            }
            if (this.retroExterieur == true ) {
                this.retroExterieur = false;
            }
            if (this.retroInterieur == true) {
                this.retroInterieur = false;
            }
        },
         deleteElementMedia : function () {
            if (this.audioFocal == true) {
                this.audioFocal = false;
            }
            if (this.audioPremium == true){
                this.audioPremium = false;
            }
            if (this.audioStandard == true) {
               this.audioStandard = false;
            }
            if (this.alpineMetrics == true) {
                this.alpineMetrics = false ;
            }
         },
         deleteElementPersoExterieur : function () {
            // if(this.etrierBleu == true) : false,
            // this.etrierGris : false,
            // this.logoAlpine :false,
         }
        
         
        
          
    }
    
})
