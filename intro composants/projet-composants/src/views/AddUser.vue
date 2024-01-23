<template>
  <div>
    <!-- 3- Utiliser le comoposant  -->
    <UserForm/>
    <MyButton/>

  </div>
</template>

<script>
// 1- Importer le composant 
import UserForm from '@/components/UserForm.vue';
import MyButton from '@/components/MyButton.vue';

export default {
    // 2- Exposer le composant 
    components: {
        UserForm,
        MyButton
    }

}
</script>

<style>

</style>