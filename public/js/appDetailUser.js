var app = new Vue({
    el: '#app',
    data: {
        /* les variable user, plateau, administreatid et pc */
        btnUser: true,
        btnAuto: false,

        active_el: 1,
        activeEdit: false,


    },
    methods:
        {   /* les methodes, useractive, pcactive, .. sont relier à la petite barre de navigation */
            btnUserIsActive: function (el) {
                this.btnUser = true;
                this.btnAuto = false;

                this.active_el = el;
            },
            btnAutoActive: function (el) {
                this.btnUser = false;
                this.btnAuto = true;

                this.active_el = el;

            },
            // active la class selon l'élement
            activate: function (el) {
                this.active_el = el;
            },
            btnDelete: function (el) {
                this.btn_el_delete = el;
            },
            btnEditIsActive: function () {
                if (!this.activeEdit) {
                    this.activeEdit = true;
                } else {
                    this.activeEdit = false;
                }
            }

        }
});