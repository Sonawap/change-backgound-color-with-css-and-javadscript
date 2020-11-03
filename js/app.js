new Vue({
    el:'#app',
    data:{
        //////// default bacground color
        color: '#0392BF',

        /////// default text color
        textColor: "#fff"


    },
    methods: {
        blue(){
            this.textColor = "#fff"
            this.color = "#0392BF"
        },
        pink(){
            this.textColor = "#fff"
            this.color = "#ED48BA"
        },
        grey(){
            this.textColor = "#fff"
            this.color = "#B3D4E0"
        },
        yellow(){
            this.textColor = "#1b1b1b"
            this.color = "#FBEC06"
        }
    },
});