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
            <tr v-for="(valor, propriedade) in Memoria" :key="propriedade">
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
            memoriaInfo: [],
            loading: true,
            error: false
        }
    },
    mounted() {
        const updateMemoriaInfo = async () => {
            const response = await window.electronAPI.getMemoria();
            if (response === 'Timeout' || !response) {
                this.memoriaInfo = [];
                this.error = true;
                return;
            }
            this.memoriaInfo = response;
            this.loading = false;
        };

        updateMemoriaInfo();
    },
    computed: {
        Memoria() {
            return this.memoriaInfo;
        }
    }
}
</script>
