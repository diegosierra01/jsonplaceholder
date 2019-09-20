<template>
    <div class="sticky-top sticky-offset">
        <h4>Fotografía: {{ resource.resource.title }} </h4>
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" md="8">
                    <b-img v-bind:src="resource.resource.url" fluid alt="Fluid image"></b-img>
                </b-col>
                <b-col cols="6" md="4">
                    <b-button-group vertical>
                        <b-button variant="primary">Editar</b-button>
                        <b-button variant="danger">Eliminar</b-button>
                    </b-button-group>
                </b-col> 
            </b-row>
        </b-container>    
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Fotos',
    mounted() {
        let id = this.$route.params.id;
        let router =  this.$route.name;
        let params = {
            id,
            router
        };
        this.$store.dispatch('loadResource', params) 
    },
    computed: {
        ...mapState([
            'resource'
        ])
    }   
}
</script>
<style scoped>
    .sticky-offset {
        top: 56px;
    }
</style>