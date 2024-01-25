<template>
  <div>
    <UserCard 
    :user="currentUser"
    :showDetailBtn="false"
    :showBackBtn="true"
    />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
export default {
  components:{
    UserCard
  },
  computed:{
    currentUser(){
      return this.$store.state.currentUser
    }
  }, 
  mounted(){
    let userId =this.$route.params.id 
    this.$store.dispatch('oneUser', userId)
  }
  

}
</script>

<style>

</style>