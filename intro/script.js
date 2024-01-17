
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

        x:0,
        y:0,

        // Différence methods et computed
        compteurA: 0,
        compteurB: 0,

        //   toggle et binding de class/style 
        toggleColor: false,
    }
}, 
methods: {
    maFonction(){
        console.log('Je suis une méthode de l\'instance VueJs')
        return 'Je suis une méthode de l\'instance VueJs'
    }, 
    clicked(){
    
        alert('Vous avez cliqué !')
    },
    onSubmit(e){
        // alert('Vous avez soumis le formulaire' + e.target)

        // Similaire à l'event modifier dans le html 
        // e.preventDefault()
    },
    coords(event){
        // console.log(event)
        this.x = event.offsetX;
        this.y = event.offsetY;
    }, 

    checkMethods(){
        console.log('Les méthodes se sont lancées')
        return this.compteurA % 2 === 0 ? 'pair' : 'impair'
    
    }
}, 

computed:{
    addition(){
        return this.nb + this.nb2

    },
    checkComputed(){
        console.log('Les computed se sont lancées')
        return this.compteurA % 2 === 0 ? 'pair' : 'impair'
    },
    objCss(){
        return{
           red: this.toggleColor,
           box: this.toggleColor,
        }
    },
    objCss2(){
        return {
            backgroundColor: this.toggleColor ? 'red' : 'blue',
            border: this.toggleColor ? '10px solid blue' : '10px solid red',
        }
    }

}


})

// on monte l'instance sur l'élément #app
app.mount('#app')