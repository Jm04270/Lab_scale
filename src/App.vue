<template>
  <div id="app">
    <HeaderBar />
    <router-view />
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style>
/* 필요에 따라 스타일 추가 */
</style>
