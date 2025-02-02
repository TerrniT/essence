<script setup lang="ts">
import { computed } from 'vue';
import type { Card } from '../types';

const props = defineProps<{
  cards: Card[];
  answeredIds: Set<string>;
}>();

const answeredCards = computed(() => 
  props.cards.filter(card => props.answeredIds.has(card.id))
);

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
  <div class="max-w-md mx-auto absolute bottom-5 left-5">
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Saved Questions</h2>
      <div v-if="answeredCards.length === 0" class="text-gray-500 text-center py-4">
        No saved questions yet. Swipe left to save questions you want to answer later!
      </div>
      <div v-else class="space-y-4">
        <div 
          v-for="card in answeredCards" 
          :key="card.id"
          class="p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md"
        >
          <div :class="['inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2', getLevelColor(card.level)]">
            Level {{ card.level }}
          </div>
          <p class="text-gray-800">{{ card.question }}</p>
        </div>
      </div>
    </div>
  </div>
</template>