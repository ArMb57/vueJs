
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
        show:false,

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

        // v-for 
        arr : [1,2,3,4,5,6,7,8,9,10],
        arrFruits: ['pomme', 'poire', 'banane', 'fraise', 'kiwi'],
        arrUser:{
            nom: 'Doe',
            prenom: 'John',
            age: 25,
        },
        arrUser2:[
            {
                id: 1,
                nom: 'Doe',
                prenom: 'John',
                age: 25,
            },
            {
                id: 2,
                nom: 'Doe',
                prenom: 'Franck',
                age: 30,
            },
            {
                id: 3,
                nom: 'Doe',
                prenom: 'Jack',
                age: 35,
            },
        ],

        // Les watchers
        compteurC: 0,
        compteurD: 0,
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

}, 
watch:{
    compteurC(newValue, oldValue){
     alert('La valeur a changé, passant de :' + oldValue + ' à ' + newValue)
    }, 
    compteurD(){
       setTimeout(() => {
           this.compteurD = 0
       }, 3000);
       },
}, 
// Les hooks
beforeCreate(){
    console.log('beforeCreate')
},
mounted(){
    console.log('mounted')
},
beforeUpdate(){
    console.log('beforeUpdate')
},
updated(){
    console.log('updated')
}



})

// on monte l'instance sur l'élément #app
app.mount('#app')