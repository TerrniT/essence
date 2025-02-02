<script setup lang="ts">
import type { Card } from '../types';

const props = defineProps<{
  card: Card;
}>();

const emit = defineEmits<{
  (e: 'skip'): void;
  (e: 'answer'): void;
}>();

const getLevelColor = (level: number) => {
  switch (level) {
    case 1: return 'bg-green-100 text-green-800';
    case 2: return 'bg-yellow-100 text-yellow-800';
    case 3: return 'bg-red-100 text-red-800';
    default: return '';
  }
};
</script>

<template>
  <div class="w-full max-w-md p-6 mx-auto bg-white rounded-xl shadow-lg">
    <div :class="['inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4', getLevelColor(card.level)]">
      Level {{ card.level }}
    </div>
    <p class="text-xl font-medium text-gray-800 mb-6">{{ card.question }}</p>
    <div class="flex gap-4 justify-center">
      <button 
        @click="emit('skip')"
        class="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
      >
        Answer Later
      </button>
      <button 
        @click="emit('answer')"
        class="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
      >
        Done
      </button>
    </div>
  </div>
</template>