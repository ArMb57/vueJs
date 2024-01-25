<template>
  <div>
    <SearchBar @search='filter'/>
    <UserTable :users="filtered" @delete-user="deleteUser"/>

  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue'
import SearchBar from '@/components/SearchBar.vue'
export default {
    data(){
        return{
            PUsers: [],
            filtered: []
        }
    },
                
                  
    components:{
        UserTable,
        SearchBar
    }, 
    methods:{
        loadUsers(){
            this.PUsers= Object.keys(localStorage)
            .filter(key => key.startsWith('user_'))
            .map(key => JSON.parse(localStorage.getItem(key)))
            this.filtered = [...this.PUsers]

        }, 
        deleteUser(userId){
            
           let index = this.PUsers.findIndex(user => user.id === userId)
              if(index !== -1){
                  localStorage.removeItem(`user_${userId}`)
                  let updatedUsers = [...this.PUsers]
                    updatedUsers.splice(index, 1)
                    this.PUsers = updatedUsers
                    alert('Utilisateur supprimé')
              }
        },
        filter(query){
            this.filtered = this.PUsers.filter(user => 
            user.firstName.toLowerCase().includes(query.toLowerCase()) ||
            user.lastName.toLowerCase().includes(query.toLowerCase())
            )

        }
    }, 
    mounted(){
        this.loadUsers()
    }

}
</script>

<style>



</style>