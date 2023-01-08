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

//import GraficoDesempenhoGPU from './charts/ChartGPU.vue'
//import GraficoDesempenhoCPU from './charts/ChartCPU.vue'

import SideBar from '../components/SideBar.vue'
import MainContent from '../components/MainContentPage.vue'

export default {
  name: 'HomePage',
  components: {
    //GraficoDesempenhoGPU,
    //GraficoDesempenhoCPU,
    //loadingCards,
    SideBar,
    MainContent
  },
  data() {
    return {
      cpuInfo: [],
      gpuInfo: [],
      systemInfo: [],
      memoriaInfo: [],
      temperaturaGpu: '',
      brand: '',
      loading: true,
      loadingCpu: true,
      loadingGpu: true,
      loadingSystem: true,
      loadingMemoria:true,
      error: false
    }
  },
  mounted() {

    const updateCpuInfo = async () => {
      const response = await window.electronAPI.getCpu();
      this.cpuInfo = response;
      this.loadingCpu = false;
      this.loading = false;
    };

    const updateSystemInfo = async () => {
      const response = await window.electronAPI.getSystem();
      this.systemInfo = response;
      this.loadingSystem = false;
      this.loading = false;
    };

    const updateGpuInfo = async () => {
      const response = await window.electronAPI.getGpu();
      if (response === 'Timeout' || !response) {
        this.gpuInfo = [];
        this.error = true;
        return;
      }
      this.gpuInfo = response.controllers[0];
      this.loadingGpu = false;
      this.loading = false;
    };

    const updateMemoriaInfo = async () => {
      const response = await window.electronAPI.getMemoria();
      if (response === 'Timeout' || !response) {
        this.memoriaInfo = [];
        this.error = true;
        return;
      }
      this.memoriaInfo = response;
      this.loadingMemoria = false;
      this.loading = false;
    };

    updateSystemInfo();
    updateCpuInfo();
    updateGpuInfo();
    updateMemoriaInfo();
  },
  computed: {
    System() {
      return this.systemInfo;
    },
    Cpu() {
      return this.cpuInfo;
    },
    Gpu() {
      return this.gpuInfo;
    },
    Memoria() {
      return this.memoriaInfo;
    }
  }
}
</script>

<style scoped>
.tela-inicial {
  display: flex;
  height: 100vh;
}
</style>
