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
            <tr v-for="(valor, propriedade) in Cpu" :key="propriedade">
                <td>{{ propriedade }}</td>
                <td>{{ valor }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import loadingCards from '../components/Loading.vue'

export default {
    name: 'InformationCpu',
    components: {
        loadingCards,
    },
    data() {
        return {
            cpuInfo: [],
            loading: true,
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

        updateCpuInfo();
    },
    computed: {
        Cpu() {
            return this.cpuInfo;
        },
    }
}
</script>
