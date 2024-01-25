<template>
  <div>
    <!-- 1- Pré-remplir les champs du formulaire de modfication d'un utilisateur -->
    <UserForm :user="PUsers"/>
    <MyButton label="Modifier" @generalEventBtn="updateUser" backgroundColor="green" />
  

  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import UserForm from '@/components/UserForm.vue'
export default {
    data(){
        return{
            PUsers: {},
        }
    },
    
    components:{
        MyButton,
        UserForm
    },
    methods:{
        updateUser(){
        if(this.PUsers){
            localStorage.setItem(`user_${this.PUsers.id}`, JSON.stringify(this.PUsers));
            alert('Utilisateur modifié avec succès')
            this.$router.push('/list');

        }else{
            alert('Utilisateur non trouvé')
        }
        }, 

    },
    mounted(){
        let userId = this.$route.params.id;
        this.$store.dispatch('oneUser', userId)
    }
    

}
</script>

<style>

</style>