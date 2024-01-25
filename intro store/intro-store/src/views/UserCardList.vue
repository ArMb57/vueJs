<template>
  <div>
    <UserCard
    v-for="user in users"
    :key="user.id"
    :user="user"
    @showDetails="handleShowDetails"
    :showDetailBtn="true"
    :showBackBtn="false"


    />
    
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
export default {
  components: {
    UserCard
  },
  methods:{
    handleShowDetails(userId){
      this.$router.push({ name: 'users-detail', params: {id: userId} })
    }

  },

  computed:{
    // Récupérer tous le users depuis store et les afficher dans la card
    users(){
      return this.$store.state.users
    
    }
  },

}
</script>

<style>

</style>