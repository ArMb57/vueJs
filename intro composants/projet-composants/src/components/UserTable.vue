<template>
  <div>
        <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Mot de passe</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>
            <MyButton label="Modifier" @generalEventBtn="editUser(user.id)" backgroundColor="blue"/>
            <MyButton label="Supprimer" @generalEventBtn="deleteUser(index)" backgroundColor="red"/>
            <MyButton label="Détails" @generalEventBtn="showModal(user)" backgroundColor="green"/>
          </td>
        </tr>
      </tbody>
    </table>
    <Modal :is-Visible="showModalFlag" @close="showModalFlag = false">
      <div>
        <h2>Détails de l'utilisateur</h2>
        <p>Prénom : {{ selectedUser.firstName}} </p>
        <p>Nom : {{ selectedUser.lastName}} </p>
        <p>Email : {{ selectedUser.email}} </p>
        <p>Mot de passe : {{ selectedUser.password}} </p>
      </div>
    </Modal>

  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import Modal from '@/components/ModalUser.vue';
export default {
  data(){
    return {
      showModalFlag: false,
      selectedUser: {}
    }
  },
    //  On passe des données depuis le parent vers l'enfant,  uniquement!!!
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    components: {
        MyButton,
        Modal

    },
    methods:{
        editUser(index){
          //  Faire une redirection vers le composant views updateUser.vue
          this.$router.push({name: 'edit', params: {id: index}})
        },
        deleteUser(index){
          let user = this.users[index]
            if(user && user.id){

              this.$emit('delete-user', user.id)
            }else{
              
              alert('Utilisateur introuvable')
            }
        }, 
        showModal(user){
          this.showModalFlag = true
          this.selectedUser = user

        }

    }

    

}
</script>

<style>

</style>