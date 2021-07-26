<template>
  <Header class="header">
    <div class="btn-block" @click="$router.push('/')"><q-btn class="full-width">Игра</q-btn></div>
    <div class="btn-block" @click="$router.push(('/stat'))"><q-btn class="full-width">Статистика</q-btn></div>
  </Header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
}
.btn-block {
  width: 50%;
}
</style>
