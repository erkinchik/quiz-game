<template>
  <div class="categories">
    <div
      class="question-row"
      v-for="questionItem in questionsTitle"
      :key="questionItem.id"
    >
      <h4>{{ questionItem }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
   props:{
     questionsTitle: {
       type:Array,
       required:true
     }
   }
  }
</script>

<style scoped>
  .question-row {
    width: 100%;
    display: flex;
  }
</style>
