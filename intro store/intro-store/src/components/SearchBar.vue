<template>
  <input type="text" placeholder="Votre recherche" @input="onSearch" v-model="this.query">
</template>

<script>
export default {
    data(){
        return{
            query:''
        }
    },

    methods:{
        onSearch(){
           this.$store.commit('setQuery', this.query)
        }

    }

}
</script>

<style>

</style>