<template>
    <div class="sticky-top sticky-offset">
        <h4>Fotografía: {{ photo.photo.title }} </h4>
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" md="8">
                    <b-img v-bind:src="photo.photo.url" fluid alt="Fluid image"></b-img>
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
        this.$store.dispatch('loadPhoto', this.$route.params.id) 
    },
    computed: {
        ...mapState([
            'photo'
        ])
    }   
}
</script>
<style scoped>
    .sticky-offset {
        top: 56px;
    }
</style>