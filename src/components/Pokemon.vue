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
    <article>
        <header>Name: {{ store.pokemon.name }}</header>
        <p>Description: {{ store.pokemon.description }}</p>
    </article>
</template>