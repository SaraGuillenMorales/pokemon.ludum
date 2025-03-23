<template>
    <section 
    v-if="estPortat || temerePokemon.id === null" 
    class="flex flex-col justify-center items-center w-creen h-screen"
    >

        <h1 class="text-3xl">Espere, por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>

    </section>

    <section v-else class="flex flex-col justify-center items-center w-creen h-screen">

        <h1 class="m-5">¿Quién es este Pokémon?</h1>
        <h3 class="capitalize my-3"> {{ ludumStatus }}</h3>

        <div class="h-20">
            <button 
            class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" 
            v-if="ludumStatus !== LudumStatus.Ludit"
            @click="sequentiOptiones(4)"
            >

                ¿Jugar de nuevo?
            </button>
        </div>

        <PokemonImago 
        :pokemon-id="temerePokemon.id" 
        :revelare-pokemon="ludumStatus !== LudumStatus.Ludit"
        />

        <PokemonOptiones 
        :optiones ="optiones" 
        @electus-optio="examineResponsio"
        :non-eligere="ludumStatus !== LudumStatus.Ludit"
        :recte-resposio="temerePokemon.id"
        />

    </section>

</template>

<script setup lang="ts">
import PokemonImago from '../components/PokemonImago.vue';
import PokemonOptiones from '../components/PokemonOptiones.vue';
import { usePokemonLudum } from '../composables/usePokemonLudum';
import { LudumStatus } from '../interfaces';

const { 
    ludumStatus, 
    estPortat, 
    temerePokemon, 
    pokemonOptiones: optiones,
    examineResponsio,
    sequentiOptiones,
    } = usePokemonLudum();
 

</script>

<style scoped></style>