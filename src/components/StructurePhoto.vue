<template>
    <div class="sticky-top sticky-offset">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Titulo" label-for="title">
                <b-form-input
                id="input-1"
                v-model="form.title"
                required
                placeholder="Ingrese el título"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Url" label-for="url">
                <b-form-input
                id="input-2"
                v-model="form.url"
                type="url"
                required
                placeholder="Ingrese la url"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="ThumbnailUrl" label-for="thumbnailUrl">
                <b-form-input
                id="input-3"
                v-model="form.thumbnailUrl"
                type="url"
                required
                placeholder="Ingrese la url"
                ></b-form-input>
            </b-form-group>
            
            <b-button type="submit" variant="primary">Submit</b-button> |
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            this.$store.dispatch('createResource')
            evt.preventDefault()
//            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.title = ''
            this.form.url = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>