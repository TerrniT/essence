<script setup lang="ts">
import { ref, computed } from 'vue';
import { cards } from './types';
import type { GameState } from './types';
import Card from './components/Card.vue';
// import Stash from './components/Stash.vue';
import LevelSelect from './components/LevelSelect.vue';

const gameState = ref<GameState>({
  answeredQuestions: new Set(),
  skippedQuestions: new Set()
});

const selectedLevel = ref<number | null>(null);

const availableCards = computed(() => {
  const filteredCards = cards.filter(card => 
    !gameState.value.answeredQuestions.has(card.id) && 
    !gameState.value.skippedQuestions.has(card.id)
  );
  
  if (selectedLevel.value === null) {
    return filteredCards;
  }
  
  return filteredCards.filter(card => card.level === selectedLevel.value);
});

const currentCards = ref<typeof cards>([]);

const startWithLevel = (level: number) => {
  selectedLevel.value = level;
  currentCards.value = [...availableCards.value];
};

const skipCard = () => {
  if (currentCards.value.length > 0) {
    gameState.value.skippedQuestions.add(currentCards.value[0].id);
    currentCards.value.shift();
    
    if (currentCards.value.length === 0) {
      selectedLevel.value = null; // Reset level selection when no more cards
    }
  }
};

const answerCard = () => {
  if (currentCards.value.length > 0) {
    gameState.value.answeredQuestions.add(currentCards.value[0].id);
    currentCards.value.shift();
    
    if (currentCards.value.length === 0) {
      selectedLevel.value = null; // Reset level selection when no more cards
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
    <div class="max-w-md mx-auto text-center mb-8">
      <h1 v-if="!selectedLevel" class="text-3xl font-bold text-gray-800 mb-2">
         Essense
      </h1>
      <p v-if="!selectedLevel" class="text-gray-600">Answer questions with your partner</p>
    </div>
    
    <div class="relative max-w-md mx-auto">
      <button v-if="selectedLevel" @click="selectedLevel = null" class="bg-white rounded-lg px-4 py-2 mb-4 text-gray-600 hover:text-gray-800">Back</button>
        <template v-if="selectedLevel === null">
          <LevelSelect
            key="level-select"
            @select-level="startWithLevel"
          />
        </template>


      <TransitionGroup name="fade">
        <template v-if="selectedLevel">
          <Card
            v-for="card in currentCards.slice(0, 1)"
            :key="card.id"
            :card="card"
            @skip="skipCard"
            @answer="answerCard"
          />
        </template>
      </TransitionGroup>
    </div>

    <!-- <Stash 
      :cards="cards"
      :answered-ids="gameState.answeredQuestions"
    /> -->
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(20px);
}
</style>