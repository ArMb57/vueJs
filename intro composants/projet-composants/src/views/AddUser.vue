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
            // Récupérer l'id du dernier utilisateur enregistré 
            let lastUser = localStorage.getItem('lastUserId');
            //  On récupère le dernier is si il existe sinon on commence à 0
            lastUser = lastUser ? parseInt(lastUser) : 0;
            // On incrément ele dernier id de 1 
            let newUserId= lastUser + 1;
            // On ajoute une propriété id à l'objet userData 
            this.userData.id = newUserId;
            // On enregistre l'utilisateur dans le local storage
            localStorage.setItem(`user_${newUserId}`, JSON.stringify(this.userData));
            // On enregistre le dernier id dans le local storage
            localStorage.setItem('lastUserId', newUserId);
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