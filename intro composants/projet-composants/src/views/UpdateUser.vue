<template>
  <div>
    <!-- 1- Pré-remplir les champs du formulaire de modfication d'un utilisateur -->
    <UserForm :user="PUsers"/>
    <MyButton label="Modifier" @generalEventBtn="updateUser" />
  

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
        // 2-  Faire la modification de l'utilisateur 
        }
    },
    

}
</script>

<style>

</style>