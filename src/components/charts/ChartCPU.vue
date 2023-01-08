<template>
  <div v-if="loading">
    <loadingCard />
  </div>
  <div v-if="!loading">
      <div id="chartCPU"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import loadingCard from '../Loading.vue'

export default {
  name: 'GraficoDesempenhoCPU',
  components: {
    loadingCard
  },
  data() {
  return {
    cpuInfo: {},
    utilizationCpuInfo: 0,
    loading: true
  }
},
mounted() {
  const updateCpuInfo = () => {
    window.electronAPI.getCpu().then(response => {
      this.cpuInfo = response;
      this.utilizationCpuInfo = response.speedMax || 0;
      this.loading = false
    });

    //setTimeout(updateCpuInfo, 5000);
  }

  document.getElementById('tab3-tab').addEventListener('click', () => {
      updateCpuInfo();
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

  const svg = d3.select('#chartCPU')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  svg.append('path')
    .attr('d', arc)
    .style('fill', color(this.utilizationCpuInfo))

  svg.append('path')
  .attr('d', bgArc)
  .style('fill', 'rgb(238 238 238 / 30%)')

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '-2em')
    .text(`${this.utilizationCpuInfo}%`);

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '-0.5em')
    .text('Utilização CPU');

  svg.append('path')
    .attr('d', d3.arc()
      .innerRadius(radius - 70)
      .outerRadius(radius - 10)
      .startAngle(scale(minValue))
      .endAngle(scale(this.utilizationCpuInfo)))
      .style('fill', 'blue')
      .style('stroke', 'blue')
      .style('stroke-width', '1px');
},
computed: {
  Cpu() {
    return this.cpuInfo;
  } 
},
watch: {
  utilizationCpuInfo(newValue) {
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

    const svg = d3.select('#chartCPU svg g');

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

