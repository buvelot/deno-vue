<script>
    import { ref } from 'vue'
    import Pokemons from './Pokemons.vue'

    export default {
        components: {
            Pokemons
        }
    }
</script>

<template>
    <Suspense>
        <template #default>
            <Pokemons />
        </template>
        <template #fallback>
            <div>Loading...</div>   
        </template>
    </Suspense>
</template>