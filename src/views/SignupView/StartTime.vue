<template>
  <div class="step-4 step">
    <h3>When are you looking to start?</h3>
    <div class="item-container d-flex flex-column">
      <Item
        v-for="item in step4Items"
        :key="item.title"
        :title="item.title"
        :class="{ active: steps[stepNumber - 1] === item.title }"
        @click="onSelectItem(item.title)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import Item from '@/components/Item.vue';
import { useStepsStore } from '@/stores/steps';

// Import step 4 data
import { step4Items } from '@/utils/data';

// Use steps store
const stepsStore = useStepsStore();

const { setSteps } = stepsStore;
const { steps, stepNumber } = storeToRefs(stepsStore);

const router = useRouter();

const onSelectItem = (value: string) => {
  setSteps(value, stepNumber.value - 1);

  setTimeout(() => {
    router.push({ name: `step-${stepNumber.value + 1}` });
  }, 1000);
};
</script>

<style scoped></style>
