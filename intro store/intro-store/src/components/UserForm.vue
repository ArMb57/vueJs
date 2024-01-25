<template>
    <div>
        <input type="text" placeholder="Prénom" v-model="localUser.firstName">
        <input type="text" placeholder="Nom" v-model="localUser.lastName">
        <input type="email" placeholder="Email" v-model="localUser.email">
        <input type="password" placeholder="Mot de passe" v-model="localUser.password">   
    </div>
</template>

<script>
export default {
    props:{
        // On ne peut pas modifier directement la valeur d'une prop dans le composant enfant il faut la faire passer au composant parent.
        // Pour se faire on utilise une méthods computed get qui agit un peu comme un getter en POO 
        user: Object
    }, 
    computed :{
        localUser: {
            get() {
                return this.user;
            }, 
        }
    }

}
</script>

<style>

</style>