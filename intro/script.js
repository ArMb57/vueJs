
// Création de l'instance vueJs
const app = Vue.createApp({
data(){
    // Ici on retourne les propriétés de données
    return{
        message: 'Hello Vue !',

        nb:10,
        nb2:20,

        html: '<span style="color:red">Je suis du HTML</span>',

        // v-bind
        url: 'https://www.google.fr',
        lienImg: 'https://picsum.photos/200/300',
        objAttr:{
            id: 'monId',
            class: 'container'
        },
        show:true,

        // v-on 
        compteur: 0,

        // v-model
        value:'',
        
    }
}, 
methods: {
    maFonction(){
        return 'Je suis une méthode de l\'instance VueJs'
    }, 
    clicked(){
        alert('Vous avez cliqué !')
    },
    onSubmit(e){
        // alert('Vous avez soumis le formulaire' + e.target)

        // Similaire à l'event modifier dans le html 
        // e.preventDefault()
    }
}, 

computed:{
    addition(){
        return this.nb + this.nb2

    }

}


})

// on monte l'instance sur l'élément #app
app.mount('#app')