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

        /* les 6 categorie Equipement */
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

        valideConduite : false,
        valideConfort : false,
        valideMedia : false,
        validePersoExterieur : false,
        validePersoInterieur : false,
        valideSecurite: false,
        valideDesign : false,


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
        logoAlpine : false,
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

        /* ACCESSOIRE */
        priceAccessoire : 0,


         /* CHOIX ACCESSOIRE : Transport et protection*/
        alarm : false,
        chaine :false,
        extincteur : false,
        fixation : false,
        kitSecurite: false,
        obd : false,
        validAccessoireTransportProtection : false,

       /* CHOIX ACCESSOIRE : Multimedia*/
        supportCamera : false,
        supportSmartphone : false,
        validAccesoireMultimedia : false,
       
     /* CHOIX ACCESSOIRE : Interieur*/
        filet : false,
        tapis : false,
        validAccesoireInterieur : false,


        /* CHOIX ACCESSOIRE : Materiel de Garage*/
        chargeurBatterie : false,
        kitOutils : false,
        validAccesoireMaterielGarage: false,
        
        /* CHOIX ACCESSOIRE : Exterieur*/
        antivol : false,
        cabochons : false,
        housse : false,
        validAccesoireExterieur: false,

        /*PRIX et NOM des equipement et des accessoire */
        versionChoice : "",
        colorChoice : "",
        seatChoice : "",

        seatPrice : 0 ,

        /*Price equipement */
        footrestPrice : 0.0,
        heritagePackPrice : 0.0,
        helpParkingBackPrice : 0.0,
        helpParkingBeforePrice : 0.0,
        reverseCameraPrice : 0.0,
        sportExhaustPrice : 0.0,
        storagePackPrice : 0.0,
        cruiseControlPrice : 0,
        outsideRetroPrice : 0.0,
        interiorMirrorPrice : 0,
        focalSoundPrice : 0.0,
        premiumAudioPrice : 0.0,
        soundPrice : 0,
        alpineMetricsPrice : 0.0,
        bleuCalliperPrice : 0.0,
        greyCalliperPrice : 0,
        alpineLogoPrice : 0.0,
        wheelLogoPrice : 0.0,
        carbonePackPrice : 0,
        aluminumPedalPrice : 0.0,
        heatedSeatPrice : 0.0,
        brakeAssistPrice : 0,
        highPerformanceBrakePrice : 0.0,
        airbagPrice : 0,

        /*Price Accessoire */
        alarmPrice : 0.0,
        chainPrice : 0.0,
        extinguishingPrice : 0.0,
        fixationPrice : 0.0,
        kitSecurityPrice : 0.0,
        obdPrice : 0.0,
        cameraSupportPrice : 0.0,
        smartphoneSupportPrice : 0.0,
        netPrice : 0.0,
        matPrice : 0.0,
        batteryChargerPrice : 0.0,
        kitToolsPrice : 0.0,
        antiTheftPrice : 0.0,
        cabochonsPrice : 0.0,
        coverPrice : 0.0,




    },
    methods: {
        /* Choix de version */
        buttonVersionLegende: function() {
           
            this.pure =false;
            this.legende = true;
            this.versionChoice = "legende";

            this.valideProgress1= true;
            this.priceVersion= 58500;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                
        },
        buttonVersionPure: function() {
            this.legende = false;
            this.versionChoice = "pure";


            this.valideProgress1= true;
            this.pure = true;
            this.priceVersion= 54700;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        choiceColorBlack: function (){
            this.black = true;
            this.colorChoice = "black";

            this.white = false;
            this.blue = false;
            this.priceColor= 840;
            /*la bar de progressionn */
            this.valideProgress2 = true;

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 

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
            this.colorChoice = "blue";

            /*la bar de progressionn */
            this.valideProgress2 = true;

            /* le Prix */
            this.priceColor= 1800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
            this.colorChoice = "white";

            /*la bar de progressionn */
            this.valideProgress2 = true;
          
            /* le Prix */
            this.priceRims = 1000;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
            this.seatChoice="cnd";

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
            this.seatChoice="cnp";

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
            this.seatChoice="cn";

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
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
            this.seatChoice="cb";

            /*la bar de progressionn */
            this.valideProgress4 = true;
          
            /* le Prix */
            this.priceSeat = 800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            
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
            this.reverseCameraPrice = 1200;
 
            this.priceEquipements = this.priceEquipements + this.reverseCameraPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
            this.validConduite();
        },
        choiceStationnementArriere: function () {
            this.stationnementArriere = true;
            this.helpParkingBackPrice = 420;


            this.priceEquipements = this.priceEquipements + this.helpParkingBackPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConduite();
        },
        choiceStationnementArriereAvant: function () {
            this.stationnementArriereAvant = true;
            this.helpParkingBeforePrice = 750;


            this.priceEquipements = this.priceEquipements + this.helpParkingBeforePrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConduite();
        },
        choiceEchappementSport : function () {
            this.echappementSport =true;
            this.sportExhaustPrice = 1500;


            this.priceEquipements = this.priceEquipements + this.sportExhaustPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConduite();
        },
        validConduite : function () {
            if (this.cameraRecul || this.stationnementArriere || this.stationnementArriereAvant || this.echappementSport)
            {
                this.valideConduite = true;
            }
            else{
                this.valideConduite = false;
            }
            this.validEquipement();
        },
        /* CHOICE EQUIPEMENT 2 Confort */
        choicePackRangement: function () {
            this.packRangement =true;
            this.storagePackPrice = 504;

            this.priceEquipements = this.priceEquipements + this.storagePackPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
            this.validConfort();
        },
        choiceRegulateurVitesse: function () {
            this.regulateurVitesse =true;
            this.cruiseControlPrice = 0;

            this.priceEquipements = this.priceEquipements + this.cruiseControlPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConfort();
        },
        choiceRetroExterieur : function () {
            this.retroExterieur =true;
            this.outsideRetroPrice = 504;
    

            this.priceEquipements = this.priceEquipements + outsideRetroPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConfort();

        },
        choiceRetroInterieur : function () {
            this.retroInterieur =true;
            this.interiorMirrorPrice = 0;

            this.priceEquipements = this.priceEquipements + this.interiorMirrorPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConfort();
        },
        validConfort : function () {
            if (this.packRangement || this.regulateurVitesse || this.retroExterieur || this.retroInterieur )
            {
                this.valideConfort = true;
            }
            else {
                this.valideConfort = false;
            }
            this.validEquipement();
        },

        /* EQUIPEMENT 2 Media Navigation */
        choiceAudioFocal : function () {
            this.audioFocal = true;
            this.focalSoundPrice = 600;

            this.priceEquipements = this.priceEquipements + this.focalSoundPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
            this.validMedia();
        },
        choiceAudioPremium : function () {
            this.audioPremium = true;
            this.premiumAudioPrice = 1200;

            this.priceEquipements = this.priceEquipements + this.premiumAudioPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validMedia();
        },
        choiceAudioStandard : function () {
            this.audioStandard = true ;
            this.soundPrice = 0;

            this.priceEquipements = this.priceEquipements + this.soundPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validMedia();
        },
        choiceAlpineMetrics : function () {
            this.alpineMetrics = true;
            this.alpineMetricsPrice = 204;

            this.priceEquipements = this.priceEquipements + this.alpineMetricsPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validMedia();
        },
        validMedia : function () {
            if (this.audioFocal || this.audioPremium || this.audioStandard  || this.alpineMetrics  )
            {
                this.valideMedia = true;
            }
            else {
                this.valideMedia = false;
            }
            this.validEquipement();
        },
        /* EQUIPEMENT 2 Perso exterieur */
        choiceEtrierBleu : function () {
            this.etrierBleu = true;
            this.bleuCalliperPrice = 384;

            this.priceEquipements = this.priceEquipements + this.bleuCalliperPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
            this.validPersoExterieur();
        },
        choiceEtrierGris : function () {
            this.etrierGris = true;
            this.greyCalliperPrice = 0;

            this.priceEquipements = this.priceEquipements + this.greyCalliperPrice ;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoExterieur();
        },
        choiceLogoAlpine : function ()  {
            this.logoAlpine =true;
            this.alpineLogoPrice = 120;

            this.priceEquipements = this.priceEquipements + alpineLogoPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoExterieur();
        },
        validPersoExterieur : function () {
            if (this.etrierBleu || this.etrierGris || this.logoAlpine )
            {
                this.validePersoExterieur = true;
            }else {
                this.validePersoExterieur = false;
            }
            this.validEquipement();
        },
        /* EQUIPEMENT 2 Perso Interieur */
        choiceLogoVolant : function () {
            this.logoVolant = true;
            this.wheelLogoPrice = 84;

            this.priceEquipements = this.priceEquipements +  this.wheelLogoPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
            this.validPersoInterieur();
        },
        choicePackCarbone : function () {
            this.packCarbone = true;
            this.carbonePackPrice = 0;

            this.priceEquipements = this.priceEquipements + this.carbonePackPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoInterieur();
            },
        choicePedalAlu : function () {
            this.pedalAlu = true;
            this.aluminumPedalPrice = 120;

            this.priceEquipements = this.priceEquipements + aluminumPedalPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoInterieur();
        },
        choiceSiegeChauffant : function () {
            this.siegeChauffant =true ;
            this.heatedSeatPrice = 400;

            this.priceEquipements = this.priceEquipements + this.heatedSeatPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoInterieur();
        },
        validPersoInterieur : function () {
            if (this.logoVolant || this.packCarbone || this.pedalAlu || this.siegeChauffant )
            {
                this.validePersoInterieur = true;
            }else {
                this.validePersoInterieur = false;
            }

            this.validEquipement();
        },
        /* EQUIPEMENT 2 SECURITE */
        choiceAideFreinage : function () {
            this.aideFreinage = true;
            this.brakeAssistPrice = 0;

            this.priceEquipements = this.priceEquipements + this.brakeAssistPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validSecurite();
        },
        choiceAirbag : function () { 
            this.airbag = true;
            this.airbagPrice = this.airbagPrice;

            this.priceEquipements = this.priceEquipements + 0;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validSecurite();
        },
        choiceFreinageHautePerfomance () {
            this.freinageHautePerfomance = true;
            this.highPerformanceBrakePrice = 1000;

            this.priceEquipements = this.priceEquipements + this.highPerformanceBrakePrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validSecurite();
        },
        validSecurite : function () {
            if (this.aideFreinage || this.airbag || this.freinageHautePerfomance)
            {
                this.valideSecurite = true;
            }else {
                this.valideSecurite = false;
            }
            this.validEquipement();
        },
        /*design */
        choiceReposePied : function () {
            this.reposePied = true;
            this.footrestPrice = 96;

            this.priceEquipements = this.priceEquipements + this.footrestPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validDesign();
            },
        choicePackHeritage : function () {
            this.packHeritage = true;
            this.heritagePackPrice = 180;


            this.priceEquipements = this.priceEquipements + this.heritagePackPrice;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validDesign();
        },
        validDesign : function () {
            if (this.reposePied || this.packHeritage )
            {
                this.valideDesign = true;
            }else {
                this.valideDesign = false;
            }
            this.validEquipement();

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
                            this.reverseCameraPrice = 0.0;

                            this.priceEquipements = this.priceEquipements - 1200;

                        }       
                        break;
                    case 'stationnementArriere':
                        if(el == 'stationnementArriere')
                        {
                            this.stationnementArriere = false;
                            this.helpParkingBackPrice = 0.0;

                            this.priceEquipements = this.priceEquipements - 420;

                        }
                        break;
                    case 'stationnementArriereAvant':
                        if(el == 'stationnementAvant')
                            {
                                this.stationnementArriereAvant = false;
                                this.helpParkingBeforePrice = 0.0;

                                this.priceEquipements = this.priceEquipements - 750;

                        }  
                        break;
                    case 'echappementSport':
                        if(el == 'echappementSport')
                        {
                            this.echappementSport =false;
                            this.sportExhaustPrice = 0.0;

                            this.priceEquipements = this.priceEquipements - 1500;


                        }  
                        break;
                    default:
                }
            }

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validConduite();
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
                            this.footrestPrice= 0.0;
                            this.priceEquipements = this.priceEquipements - 96;

                        }

                        break;
                    case 'packHeritage':
                        if(el == 'packHeritage')
                        {
                            this.packHeritage = false;
                            this.heritagePackPrice = 0.0;

                            this.priceEquipements = this.priceEquipements - 180;

                        }
                        break;
                    default:
                
                }
                
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validDesign();

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
                            this.interiorMirrorPrice =0;
                            this.priceEquipements = this.priceEquipements - 0;

                        }
                        
                        break;
                    case 'retroExterieur':
                        if(el == 'retroExterieur')
                        {
                            this.retroExterieur = false;
                            this.outsideRetroPrice = 0.0;

                            this.priceEquipements = this.priceEquipements - 504;

                        }
                        break;
                    case 'regulateurVitesse':
                        if(el == 'regulateurVitesse')
                            {
                                this.regulateurVitesse = false;
                                this.cruiseControlPrice = 0;

                                this.priceEquipements = this.priceEquipements - 0;
                        }  
                        break;
                    case 'packRangement':
                        if(el == 'packRangement')
                        {
                            this.packRangement =false;
                            this.storagePackPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 504;
                        }  
                        break;
                    default:
                }

                this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
                let val = (this.priceTotal/1).toFixed().replace('" "', ',');
                this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                this.validConfort();
            }

        },
         deleteElementMediaEquipment : function (el) {
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
                            this.focalSoundPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 600;

                        }
                        
                        break;
                    case 'audioPremium':
                        if(el == 'audioPremium') {
                            this.audioPremium = false;
                            this.premiumAudioPrice =0.0;
                            this.priceEquipements = this.priceEquipements - 1200;

                        }
                        break;
                    case 'audioStandard':
                        if(el == 'audioStandard'){
                            this.audioStandard = false;
                            this.soundPrice = 0;
                            this.priceEquipements = this.priceEquipements - 0;

                        }  
                        break;
                    case 'alpineMetrics':
                        if(el == 'alpineMetrics'){
                            this.packRangement =false;
                            this.alpineMetricsPrice =0.0;

                            this.priceEquipements = this.priceEquipements - 204;

                        }  
                        break;
                    default:
                }
            }

             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
             let val = (this.priceTotal/1).toFixed().replace('" "', ',');
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             this.validMedia();
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
                            this.bleuCalliperPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 384;

                        }
                        break;
                    case 'etrierGris':
                        if(el == 'etrierGris'){
                            this.etrierGris = false;
                            this.priceEquipements = this.priceEquipements - 0;
                        }
                        break;
                    case 'logoAlpine':
                        if(el == 'logoAlpine'){
                            this.logoAlpine = false;
                            this.alpineLogoPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 120;
                        }  
                        break;
                    default:
                }
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoExterieur();
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
                            this.wheelLogoPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 84;
                        }
                        
                        break;
                    case 'packCarbone':
                        if(el == 'packCarbone'){
                            this.packCarbone = false;
                            this.priceEquipements = this.priceEquipements - 0;
                        }
                        break;
                    case 'pedalAlu':
                        if(el == 'pedalAlu'){
                            this.pedalAlu = false;
                            this.aluminumPedalPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 120;
                        }  
                        break;
                    case 'siegeChauffant':
                        if(el == 'siegeChauffant'){
                            this.siegeChauffant =false;
                            this.heatedSeatPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 400;
                        }  
                        break;
                    default:
                }
                
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validPersoInterieur();
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
                            this.brakeAssistPrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 0;

                        }
                        
                        break;
                    case 'airbag':
                        if(el == 'airbag'){
                            this.airbag = false;
                            this.priceEquipements = this.priceEquipements - 0;

                        }
                        break;
                    case 'freinageHautePerfomance':
                        if(el == 'freinageHautePerfomance'){
                            this.freinageHautePerfomance = false;
                            this.highPerformanceBrakePrice = 0.0;
                            this.priceEquipements = this.priceEquipements - 1000;

                        }  
                        break;
                    default:
                }
            }

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validSecurite();
        },
        validEquipement : function(){

            if(this.valideDesign == true && this.valideConduite == true && this.valideConfort && this.valideMedia == true && this.validePersoExterieur == true && this.validePersoInterieur == true && this.valideSecurite == true ){

                this.valideProgress5 = true;

            } else
            {
                this.valideProgress5 = false;
            }

        },
        /* methods Accessoire */
        /* transport et protection */
        AccessoireChoiceAlarm: function () {
            this.alarm = true;
            this.alarmPrice = 543;

            this.priceAccessoire= this.priceAccessoire + 543;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        AccessoireChoiceChaine: function () {
            this.chaine = true;
            this.chainPrice =336;

            this.priceAccessoire= this.priceAccessoire + 336;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        
        },
        AccessoireChoiceExtincteur: function () {
            this.extincteur = true;
            this.extinguishingPrice = 22;

            this.priceAccessoire= this.priceAccessoire + 22;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        AccessoireChoiceFixation: function () {
            this.fixation = true;
            this.fixationPrice= 72;

            this.priceAccessoire= this.priceAccessoire + 72;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        AccessoireChoiceKitSecurite: function () {
            this.kitSecurite = true;
            this.kitSecurityPrice = 20 ;

            this.priceAccessoire= this.priceAccessoire + 20;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        AccessoireChoiceObd: function () {
            this.obd = true;
            this.obdPrice = 0;

            this.priceAccessoire= this.priceAccessoire + 99;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        transportProtectionValidate: function () {
            if (this.alarm || this.chaine || this.extincteur || this.fixation || this.kitSecurite|| this.obd)
            {
                this.validAccessoireTransportProtection = true;
            } else {
                this.validAccessoireTransportProtection = false;
            }
            this.validAccessoire();
        },
        deleteElementTransportProtection: function (el) {

            var tableauTransportProtection = [ "alarm",
                "chaine",
                "extincteur",
                "fixation",
                "kitSecurite",
                "obd"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauTransportProtection.length ; i++ ) {
                console.log(tableauTransportProtection[i]);
                
                switch (tableauTransportProtection[i]) {
                    case 'alarm':
                        if(el == 'alarm'){
    
                            this.alarm = false;
                            this.alarmPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 543;
                        }
                        break;
                    case 'chaine':
                        if(el == 'chaine'){
                            this.chaine = false;
                            this.chainPrice = 0.0;

                            this.priceAccessoire = this.priceAccessoire - 336;
                        }
                        break;
                    case 'extincteur':
                        if(el == 'extincteur'){
                            this.extincteur = false;
                            this.extinguishingPrice = 0.0;
                            this.this.priceAccessoire = this.priceAccessoire - 22;
                        }  
                        break;
                        case 'fixation':
                            if(el == 'fixation'){
                                this.fixation = false;
                                this.fixationPrice = 0.0;
                                this.this.priceAccessoire = this.priceAccessoire - 72;
                            }  
                            break;
                        case 'kitSecurite':
                            if(el == 'kitSecurite'){
                                this.kitSecurityPrice = 0.0;
                                this.kitSecurite = false;
                                this.this.priceAccessoire = this.priceAccessoire - 20;
                            }
                        break;
                        case 'obd':
                            if(el == 'obd'){
                            this.obd = false;
                            this.obdPrice = 0.0;
                            this.this.priceAccessoire = this.priceAccessoire - 99;
                            }
                        break;
                    default:
                }
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.transportProtectionValidate();
        },
        /* Accesoire Multimedia */
        AccessoireChoiceSupportCamera: function () {
            this.supportCamera = true;
            this.cameraSupportPrice = 89;

            this.priceAccessoire= this.priceAccessoire + 89;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireMultimediaValide();
        
        },
        AccessoireChoiceSupportSmartphone: function () {
            this.supportSmartphone = true;
            this.smartphoneSupportPrice = 21 ;

            this.priceAccessoire= this.priceAccessoire + 21;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireMultimediaValide();
        
        },
        AccesoireMultimediaValide: function () {
            if (this.supportSmartphone || this.supportCamera )
            {
                this.validAccesoireMultimedia = true;
            }
            else {
                this.validAccesoireMultimedia = false;
            }
            this.validAccessoire();
        },
        deleteElementMedia: function (el) {

            var tableauMdeleteElementMedia = [ "supportCamera",
                "supportSmarphone",
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauMdeleteElementMedia.length ; i++ ) {
                console.log(tableauMdeleteElementMedia[i]);
                
                switch (tableauMdeleteElementMedia[i]) {
                    case 'supportCamera':
                        if(el == 'supportCamera'){
                            this.supportCamera = false;
                            this.cameraSupportPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 89;

                        }
                        break;

                    case 'supportSmarphone':
                        if(el == 'supportSmarphone'){
                            this.supportSmartphone = false;
                            this.smartphoneSupportPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 21;
                        }
                        break;
                    default:
                }
            }

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireMultimediaValide();
        },
        /* Accessoire Interieur */
        AccessoireChoiceFilet: function () {
            this.filet = true;
            this.netPrice = 59;

            this.priceAccessoire= this.priceAccessoire + 59;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireInterieur();
        
        },
        AccessoireChoiceTapis: function () {
            this.tapis = true;
            this.matPrice = 83;

            this.priceAccessoire= this.priceAccessoire + 83;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireInterieur();
        },
        AccesoireInterieur: function () {
            if (this.filet || this.tapis )
            {
                this.validAccesoireInterieur = true;
            }
            else {
                this.validAccesoireInterieur = false;
            }
            this.validAccessoire();
        },
        deleteElementInterieur: function (el) {

            var tableauDeleteElementInterieur = [ "tapis",
                "filet",
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauDeleteElementInterieur.length ; i++ ) {
                console.log(tableauDeleteElementInterieur[i]);
                
                switch (tableauDeleteElementInterieur[i]) {
                    case 'filet':
                        if(el == 'filet'){
                            this.filet = false;
                            this.netPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 59;
                        }
                        break;
                    case 'tapis':
                        if(el == 'tapis'){
                            this.tapis = false;
                            this.matPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 83;
                        }
                        break;
                    default:
                }
            }

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireInterieur();
        },
        /* Accessoire Materiel de Garage */
        AccessoireChoiceKitOutils: function () {
            this.kitOutils = true;
            this.kitToolsPrice = 393;

            this.priceAccessoire= this.priceAccessoire + 393;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validAccesoireMethodMaterielGarage();
        
        },
        AccessoireChoiceChargeurBatterie: function () {
            this.chargeurBatterie = true;
            this.batteryChargerPrice = 240;

            this.priceAccessoire= this.priceAccessoire + 240;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validAccesoireMethodMaterielGarage();
        
        },
        validAccesoireMethodMaterielGarage: function () {
            if (this.kitOutils || this.chargeurBatterie )
            {
                this.validAccesoireMaterielGarage = true;
            }
            else {
                this.validAccesoireMaterielGarage = false;
            }

            this.validAccessoire();

        },
        deleteElementMaterielGarage: function (el) {

            var tableauElementMaterielGarage = [ "chargeurBatterie",
                "kitOutils",
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauElementMaterielGarage.length ; i++ ) {
                console.log(tableauElementMaterielGarage[i]);
                
                switch (tableauElementMaterielGarage[i]) {
                    case 'kitOutils':
                        if(el == 'kitOutils'){
    
                            this.kitOutils = false;
                            this.kitToolsPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 393;
    
                        }
                        break;    

                    case 'chargeurBatterie':
                        if(el == 'chargeurBatterie'){
    
                            this.chargeurBatterie = false;
                            this.batteryChargerPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 240;
                        }
                        break;

                    default:
                }
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validAccesoireMethodMaterielGarage();
        },/* Accessoire Exterieur */
        AccessoireChoiceAntivol: function () {
            this.antivol = true;
            this.antiTheftPrice = 57;

            this.priceAccessoire= this.priceAccessoire + 57;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireExterieur();
        
        },
        AccessoireChoiceCabochons: function () {
            this.cabochons = true;
            this.cabochonsPrice = 24;

            this.priceAccessoire= this.priceAccessoire + 24;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireExterieur();
        
        },
        AccessoireChoiceHousse: function () {
            this.housse = true;
            this.coverPrice= 216;


            this.priceAccessoire= this.priceAccessoire + 216;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.validAccesoireMultimedia();
        
        },
        AccesoireExterieur: function () {
            if (this.antivol || this.cabochons || this.housse )
            {
                this.validAccesoireExterieur = true;
            }
            else {
                this.validAccesoireExterieur = false;
            }

            this.validAccessoire();
        },
        deleteElementExterieur: function (el) {

            var tableauDeleteElementInterieur = [ "cabochons",
                "antivol", "housse"
            ]; 
            /* je parcours le tableau */
            for (i = 0 ;  i < tableauDeleteElementInterieur.length ; i++ ) {
                console.log(tableauDeleteElementInterieur[i]);
                
                switch (tableauDeleteElementInterieur[i]) {
                    case 'antivol':
                        if(el == 'antivol'){
    
                            this.antivol = false;
                            this.antiTheftPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 57;
    
                        }
                        break;    

                    case 'cabochons':
                        if(el == 'cabochons'){
    
                            this.cabochons = false;
                            this.cabochonsPrice = 0.0;
                            this.priceAccessoire = this.priceAccessoire - 24;
    
                        }
                        break;
                        case 'housse':
                                if(el == 'housse'){
            
                                    this.housse = false;
                                    this.coverPrice = 0.0;
                                    this.priceAccessoire = this.priceAccessoire - 216;
            
                                }
                                break;
                    default:
                }
            }
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims + this.priceSeat + this.priceEquipements + this.priceAccessoire;
            let val = (this.priceTotal/1).toFixed().replace('" "', ',');
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            this.AccesoireExterieur();

        },validAccessoire : function(){

            if(  this.validAccesoireMaterielGarage == true && this.validAccesoireInterieur == true && this.validAccesoireMultimedia == true && this.validAccessoireTransportProtection == true && this.validAccesoireExterieur== true ){

                this.valideProgress6 = true;
            }
            else {
                this.valideProgress6 = false;
            }
        }


    }
    
})
