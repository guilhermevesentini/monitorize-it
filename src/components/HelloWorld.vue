<template>
  <div class="screen">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1"
          aria-selected="true">Detalhes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2"
          aria-selected="false">Desempenho Gpu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3"
          aria-selected="false">Desempenho Cpu</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
        <div class="accordion" id="accordionExample">
          <!-- CPU -->
          <div class="card">
            <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              <h5 class="mb-0">
                <button class="btn collapsed" type="button">
                  Dados CPU
                </button>
              </h5>
            </div>
  
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th style="width: 200px">Nome</th>
                      <th>Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(valor, propriedade) in Cpu" :key="propriedade">
                      <td>{{ propriedade }}</td>
                      <td>{{ valor }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Grafics -->
          <div class="card">
            <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              <h5 class="mb-0">
                <button class="btn collapsed" type="button">
                  Dados GPU
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <!-- controllers -->
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th style="width: 200px">Nome</th>
                      <th>Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(valor, propriedade) in Gpu" :key="propriedade">
                      <td>{{ propriedade }}</td>
                      <td>{{ valor }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
        <GraficoDesempenhoGPU />
      </div>
      <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
        <GraficoDesempenhoCPU />
      </div>
    </div>
  
  </div>
</template>

<script>

import GraficoDesempenhoGPU from './charts/ChartGPU.vue'
import GraficoDesempenhoCPU from './charts/ChartCPU.vue'

export default{
  components: {
    GraficoDesempenhoGPU,
    GraficoDesempenhoCPU
  },
  data(){
    return {
      cpuInfo : [],
      gpuInfo : [],
      temperaturaGpu: '',
      brand: '',
    }
  },
  mounted(){
    const updateCpuInfo = () => {
    window.electronAPI.getCpu().then(response => {
      this.cpuInfo = response;
      })
    }
    
    const updateGpuInfo = () => {
    window.electronAPI.getGpu().then(response => {
      this.gpuInfo = response.controllers[0];
      });
    }

    updateCpuInfo();
    updateGpuInfo();
  },
  computed: {
    Cpu() {
      return this.cpuInfo;
    },
    Gpu() {
      return this.gpuInfo;
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
  padding: 5% 0;
  margin: 20px 0; 
}
.screen .card{
  margin: 15px 20px;
  cursor: pointer;
}
.screen .card > .card-header{
  margin-bottom: 0;
}
.screen .card .card-header:hover{
  background-color: rgb(83, 238, 179);
  transition: 1s ease-in-out;
}
</style>
