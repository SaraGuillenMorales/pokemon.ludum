
<template>

    <section class="flex flex-col mt-5">

   <button 

        :disabled="nonEligere"
        @click="$emit('electusOptio', id)"
        v-for="{nomen, id} in optiones" 
        :key="id" 
        :class="['capitalize disabled:shadow-none disabled:bg-gray-100', {
            recte: id === recteResposio && nonEligere,
            'non-recte': id !== recteResposio && nonEligere,
        }]"
        > 
            
        {{ nomen }} 

    </button>

</section>

</template>

<script lang="ts" setup>

import { LudumStatus, type Pokemon } from '../interfaces';

    interface Props {
        optiones: Pokemon[];
        nonEligere: boolean;
        recteResposio: number
    }

    defineProps<Props>();

    defineEmits<{
        electusOptio: [id:number];
    }>();

</script>

<style scoped>
@import 'tailwindcss';

button {
  @apply bg-white shadow-md rounded-lg p-3 my-2 cursor-pointer w-40 text-center hover:bg-gray-100 transition-all;
}

.recte {
        @apply bg-blue-500 text-white;
    
    }

    .non-recte {
        @apply bg-red-100 opacity-50;
    }

    
</style>