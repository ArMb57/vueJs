<template>
  <div>
    <UserTable :users="PUsers" @delete-user="deleteUser"/>

  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue'
export default {
    data(){
        return{
            PUsers: [],
        }
    },
                
                  
    components:{
        UserTable
    }, 
    methods:{
        loadUsers(){
            this.PUsers= Object.keys(localStorage)
            .filter(key => key.startsWith('user_'))
            .map(key => JSON.parse(localStorage.getItem(key)))

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
        }
    }, 
    mounted(){
        this.loadUsers()
    }

}
</script>

<style>

</style>