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
    <div>
        <p>Name: {{ store.pokemon.name }}</p>
        <p>Description: {{ store.pokemon.description }}</p>
    </div>
</template>