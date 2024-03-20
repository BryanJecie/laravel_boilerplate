import text from "./text.js";

export default {
    mixins: [text],
    methods: {
        makeToast(variant = null, title, message) {
            this.$bvToast.toast(message, {
                title: title,
                variant: variant,
                solid: true,
            });
        },

        toConfirm() {
            return new Promise((resolve, reject) => {
                $.confirm({
                    title: 'Delete Confirm!',
                    content: 'Are you sure to delete this data?',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        yes: {
                            text: 'Yes',
                            btnClass: 'btn-red',
                            action: function (resp) {
                                resolve({
                                    key: true,
                                    text: 'yes'
                                })
                            }
                        },
                        cancel: function (error) {
                            reject({
                                key: false,
                                text: 'cancel'
                            })
                        }
                    }
                });
            })
        },

        deleteConfirm(title = 'CONFIRMATION BEFORE DELETING RECORD', moduleName = "") {

            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
                title: 'Please Confirm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'YES',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            })
                .then(value => {
                    this.boxTwo = value
                })
                .catch(err => {
                    // An error occurred
                })

            // return new Promise((resolve, reject) => {
            //     Swal
            //         .fire({
            //             title: title,
            //             text: `Are you sure you want to delete data form ${moduleName} records?`,
            //             // icon: "warning",
            //             showCancelButton: true,
            //             confirmButtonColor: "#3085d6",
            //             cancelButtonColor: "#d33",
            //             confirmButtonText: "Yes, delete it!",
            //         })
            //         .then((result) => resolve(result))
            //         .catch(error => reject(error));
            // })
        }
    },

};
