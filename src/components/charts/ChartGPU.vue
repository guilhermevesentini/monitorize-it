<template>
  <div v-if="loading">
    <loadingCard />
  </div>
  <div v-if="error">
    <p>Ocorreu um erro ao tentar buscar as informações, por favor entre em contato com o suporte</p>
  </div>
  <div v-if="!loading">
      <div id="chartGPU"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import loadingCard from '../Loading.vue'

export default {
  name: 'GraficoDesempenhoGPU',
  components: {
    loadingCard
  },
  data() {
  return {
    gpuInfo: {},
    utilizationGpuInfo: 0,
    loading: true,
    error : false
  }
},
mounted() {
  const updateGpuInfo = () => {
    window.electronAPI.getGpu().then(response => {
      if(response == 'Timeout'){
        this.gpuInfo = [];
        this.error = true
        return 
      }  
      this.gpuInfo = response.controllers[0];
      this.utilizationGpuInfo = this.gpuInfo.utilizationGpu || 0;
      this.loading = false;
    });
    //setTimeout(updateGpuInfo, 5000);
  }

  document.getElementById('tab2-tab').addEventListener('click', () => {
      updateGpuInfo();
  });

  // criação do gráfico aqui
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;
  const minValue = 0;
  const maxValue = 100;

  const color = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range(['rgb(255 88 62)', 'rgb(65 129 195 / 30%)']);

  const arc = d3.arc()
    .innerRadius(radius - 70)
    .outerRadius(radius - 10)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  const bgArc = d3.arc()
    .innerRadius(radius - 70)
    .outerRadius(radius - 10)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  const scale = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range([-Math.PI / 2, Math.PI / 2]);

  const svg = d3.select('#chartGPU')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  svg.append('path')
    .attr('d', arc)
    .style('fill', color(this.utilizationGpuInfo))

  svg.append('path')
  .attr('d', bgArc)
  .style('fill', 'rgb(238 238 238 / 30%)')

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '-2em')
    .text(`${this.utilizationGpuInfo}%`);

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '-0.5em')
    .text('Utilização GPU');

  svg.append('path')
    .attr('d', d3.arc()
      .innerRadius(radius - 70)
      .outerRadius(radius - 10)
      .startAngle(scale(minValue))
      .endAngle(scale(this.utilizationGpuInfo)))
      .style('fill', 'blue')
      .style('stroke', 'blue')
      .style('stroke-width', '1px');
},
computed: {
  Gpu() {
    return this.gpuInfo;
  } 
},
watch: {
  utilizationGpuInfo(newValue) {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const minValue = 0;
    const maxValue = 100;

    const color = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range(['rgb(255 88 62)', 'rgb(65 129 195)']);

    const scale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([-Math.PI / 2, Math.PI / 2]);

    const svg = d3.select('#chartGPU svg g');

    svg.select('path')
      .style('fill', color(newValue));

    svg.select('path')
      .attr('d', d3.arc()
        .innerRadius(radius - 70)
        .outerRadius(radius - 10)
        .startAngle(scale(minValue))
        .endAngle(scale(newValue)))
      .style('fill', 'blue')
      .style('stroke', 'blue')
      .style('stroke-width', '1px');

    svg.select('text')
      .text(`${newValue}%`);
  }
},

};
</script>

