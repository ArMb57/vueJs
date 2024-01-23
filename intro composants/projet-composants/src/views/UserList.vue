<template>
  <div>
    <UserTable :users="PUsers"/>

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

        }
    }, 
    mounted(){
        this.loadUsers()
    }

}
</script>

<style>

</style>