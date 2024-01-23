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
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>
            <MyButton label="Modifier" @generalEventBtn="editUser(user.id)" backgroundColor="blue"/>
            <MyButton label="Supprimer" @generalEventBtn="deleteUser(user.id)" backgroundColor="red"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
export default {
    //  On passe des données depuis le parent vers l'enfant,  uniquement!!!
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    components: {
        MyButton
    },
    methods:{
        editUser(index){
          this.$router.push({name: 'edit', params: {id: index}})
        },
    }

    

}
</script>

<style>

</style>