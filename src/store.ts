import { reactive } from "vue";

export const store = reactive({
    pokemon: {},
    setPokemon(name: any, description: any): void {
        this.pokemon.name = name;
        this.pokemon.description = description;
    }
});