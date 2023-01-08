<template>
    <div class="main-content">
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
            <SystemInformationContent/>        
        </div>
        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
            <InformationCpu/>
        </div>
        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
            <InformationGpu/>
        </div>
        <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
          <InformationMemory/>
        </div>
      </div>
    </div>
</template>

<script>
import SystemInformationContent from '../pages/InformationSystem.vue'
import InformationCpu from '../pages/InformationCpu.vue'
import InformationGpu from '../pages/InformationGpu.vue'
import InformationMemory from '../pages/InformationMemory.vue'

export default {
  name: 'MainContent',
  components: {
    SystemInformationContent,
    InformationCpu,
    InformationGpu,
    InformationMemory
  }
}
</script>

<style scoped>

.main-content {
  flex: 1;
  padding: 10px;
}

</style>