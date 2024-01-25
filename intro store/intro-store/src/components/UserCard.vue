
<template>
<!-- C'est la card user qui afficher les infos d'un utilisateur -->
  <div class="user-card">
    <h3>{{user.firstName}} {{user.lastName}}</h3>
    <p>Email: {{user.email}}</p>
    <p>Mot de passe : {{user.password}}</p>

    <MyButton
    v-if="showDetailBtn"
    label="Voir détails"
    backgroundColor="blue"
    @generalEventBtn="showDetails"
    />

<!--  go -> méthode du routeur qui permet de naviguer d'avant en arrière dans l'historique 
go(1) -> avancer d'une page dans l'historique du nav 
go(0) -> refresh la page 
go(-2) -> retour de 2 pages dans l'hitorique du nav  -->
      <MyButton
    v-if="showBackBtn"
    label="Retour"
    backgroundColor="green"
    @generalEventBtn="$router.go(-1)"
    />
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
export default {
  components: {
    MyButton
  },
  props:{
    user: Object, 
    showBackBtn: Boolean,
    showDetailBtn: Boolean
  },
  methods: {
    showDetails(){
      // On emet un event personnalisé pour le composant parent
      this.$emit('showDetails', this.user.id)
    }
  }, 
 
  
}
</script>

<style>

.user-card{
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>