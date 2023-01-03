<template>
  <div class="step-1 step">
    <h3>What roles will you be hiring for?</h3>
    <p class="desc">
      Before we get started, we’d like to ask a few questions to better
      understand your business needs.
    </p>
    <div class="item-container d-flex flex-column">
      <Item
        v-for="item in step1Items"
        :key="item.value"
        :title="item.title"
        :desc="item.desc"
        :class="{ active: steps[stepNumber - 1] === item.value }"
        @click="onSelectItem(item.value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import Item from '@/components/Item.vue';
import { useStepsStore } from '@/stores/steps';

// Import step 1 data
import { step1Items } from '@/utils/data';

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
