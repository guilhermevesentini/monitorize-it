<template>
    <loadingCards v-if="loading" />
    <table class="table table-striped" v-if="!loading">
        <thead>
            <tr>
                <th style="width: 200px">Nome</th>
                <th>Tipo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(valor, propriedade) in System" :key="propriedade">
                <td>{{ propriedade }}</td>
                <td>{{ valor }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import loadingCards from '../components/Loading.vue'

export default {
  name: 'InformationSystem',
  components: {
    loadingCards,
  },
  data() {
    return {
      systemInfo: [],
      loading: true,
      error: false
    }
  },
  mounted() {
    const updateSystemInfo = async () => {
      const response = await window.electronAPI.getSystem();
      this.systemInfo = response;
      this.loading = false;
    };

    updateSystemInfo();
  },
  computed: {
    System() {
      return this.systemInfo;
    }
  }
}
</script>
