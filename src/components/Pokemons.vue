<script>
import { ref } from 'vue'
import { store } from '../store';
export default {
    async setup() {
        const res = await fetch("http://localhost:8000/api")
        const pokemons = await res.json()
        return { pokemons }
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <article>
        <div v-for="pokemon in pokemons">
            <span>
                <router-link :to="{ name: 'Pokemon', params: {pokemon: `${pokemon.name.toLowerCase()}`}  }">
                    <span @click="store.setPokemon(pokemon.name, pokemon.description)">
                        {{ pokemon.name }}
                    </span>
                </router-link>
            </span>
        </div>
    </article>
</template>

<style scoped>
/* Your component-specific styles here */
</style>
