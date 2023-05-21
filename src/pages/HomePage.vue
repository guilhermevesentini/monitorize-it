<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">Monitorize-it</a>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form>
  </nav>
  <div class="tela-inicial">
    <SideBar />
    <MainContent />
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import MainContent from '../components/MainContentPage.vue'

export default {
  name: 'HomePage',
  components: {
    SideBar,
    MainContent
  }
}
</script>

<style scoped>
.tela-inicial {
  display: flex;
  height: 100vh;
}
</style>
