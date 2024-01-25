<template>
  <div>
    <Modal :is-visible="showModalFlag" :show-close-btn="false">
        <p>Utilisateur ajouté avec succès </p>
    </Modal>
    <!-- 3- Utiliser le composant  -->
    <!-- 4- passer la valeur de la props au composant enfant  -->
    <UserForm :user="userData"/>
    <!-- generalEventBtn est l'alias de l'event définit sur l'enfant puis on appel la méthode qui va traiter l'ajout de l'utilisateur   -->
    <MyButton label="Ajouter un utilisateur" @generalEventBtn="addUser" backgroundColor="green" />

  </div>
</template>

<script>
// 1- Importer le composant 
import UserForm from '@/components/UserForm.vue';
import MyButton from '@/components/MyButton.vue';
import Modal from '@/components/ModalUser.vue'

export default {
    data() {
        return {
            userData: {},
            showModalFlag: false
        }
    },
                
    // 2- Exposer le composant 
    components: {
        UserForm,
        MyButton, 
        Modal
    }, 
    methods: {
        addUser() {
            // Appeler la mutation addUser
            this.$store.commit('addUser', this.userData);
            // On vide l'objet userData
            this.userData = {};


            // Message sans le modal 
            // alert('Utilisateur ajouté')

            // Message avec le modal
            this.showModalFlag = true
            setTimeout(() => {
                this.showModalFlag = false
            }, 2000);
        }
    }

}
</script>

<style>

</style>