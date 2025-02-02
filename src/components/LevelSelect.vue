<script setup lang="ts">
const emit = defineEmits<{
  (e: 'select-level', level: number): void;
}>();

const levels = [
  { level: 1, name: 'Light & Fun', description: 'Casual and playful questions', color: 'bg-green-500' },
  { level: 2, name: 'Deeper Connection', description: 'More meaningful discussions', color: 'bg-yellow-500' },
  { level: 3, name: 'Deep & Intimate', description: 'Profound and personal topics', color: 'bg-red-500' },
];
</script>

<template>
  <div class="w-full max-w-md p-6 mx-auto bg-white rounded-xl shadow-lg">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Choose Question Level</h2>
    <div class="space-y-4">
      <button
        v-for="level in levels"
        :key="level.level"
        @click="emit('select-level', level.level)"
        class="w-full p-4 rounded-lg text-left transition-all hover:transform hover:scale-102 hover:shadow-md"
        :class="[
          level.level === 1 ? 'bg-green-100 hover:bg-green-200' : '',
          level.level === 2 ? 'bg-yellow-100 hover:bg-yellow-200' : '',
          level.level === 3 ? 'bg-red-100 hover:bg-red-200' : '',
        ]"
      >
        <div class="flex items-center">
          <div 
            class="w-2 h-2 rounded-full mr-3"
            :class="level.color"
          ></div>
          <div>
            <h3 class="font-semibold text-gray-800">{{ level.name }}</h3>
            <p class="text-sm text-gray-600">{{ level.description }}</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>