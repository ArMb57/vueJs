<template>
  <div>
    <SearchBar/>
    <UserTable :users="users" @delete-user="deleteUser"/>

  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue'
import SearchBar from '@/components/SearchBar.vue'
export default {
            
    components:{
        UserTable,
        SearchBar
    }, 
  
    computed:{
        // On appel le getter qui filtre les users
        users(){
            return this.$store.getters.filteredUsers
        }
    },
    mounted(){
        // On appelle l'action dans le store qui récupère les users
        this.$store.dispatch('loadUsers')
    }

}
</script>

<style>



</style>