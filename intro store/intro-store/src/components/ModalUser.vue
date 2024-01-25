<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
        <slot></slot>
        <MyButton backgroundColor="red" label="fermer" @generalEventBtn="closeModal" v-if="showCloseBtn"/>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
export default {
    data(){
        return{
         
        }
    },
    props:{
        isVisible:{
            type:Boolean
        },
         showCloseBtn:{
            type:Boolean,
            default: true
         }
    },
    components: {
      MyButton  
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }

}
</script>

<style>
.modal-overlay{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal{
    background-color: lightblue;
    padding: 20px;
    border-radius:10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
}

</style>