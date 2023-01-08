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
            <tr v-for="(valor, propriedade) in Gpu" :key="propriedade">
                <td>{{ propriedade }}</td>
                <td>{{ valor }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import loadingCards from '../components/Loading.vue'

export default {
    name: 'InformationGpu',
    components: {
        loadingCards,
    },
    data() {
        return {
            gpuInfo: [],
            loading: true,
            error: false
        }
    },
    mounted() {
        const updateGpuInfo = async () => {
            const response = await window.electronAPI.getGpu();
            if (response === 'Timeout' || !response) {
                this.gpuInfo = [];
                this.error = true;
                return;
            }
            this.gpuInfo = response.controllers[0];
            this.loading = false;
        };
        updateGpuInfo()
    },
    computed: {
        Gpu() {
            return this.gpuInfo;
        }
    }
}
</script>
