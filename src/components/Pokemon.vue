<script>
    import { store } from '../store';

    export default {
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <v-card>
        <header>Name: {{ store.pokemon.name }}</header>
        <p>Description: {{ store.pokemon.description }}</p>
    </v-card>
</template>