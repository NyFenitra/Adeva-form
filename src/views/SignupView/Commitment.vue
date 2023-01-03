<template>
  <div class="step-2 step">
    <h3>What level of time commitment will you require from the expert?</h3>
    <div class="item-container d-flex flex-column">
      <Item
        v-for="item in items"
        :key="item.value"
        :title="item.title"
        :desc="item.desc"
        :class="{ active: steps[1] === item.value }"
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

const items = [
  {
    title: 'Full-time',
    desc: '40 hrs/week',
    value: 'fulltime',
  },
  {
    title: 'Part-time',
    desc: '20 hrs/week',
    value: 'parttime',
  },
];

// Use steps store
const stepsStore = useStepsStore();

const { setSteps } = stepsStore;
const { steps, stepNumber } = storeToRefs(stepsStore);

const router = useRouter();

const onSelectItem = (value: string) => {
  setSteps(value, 1);

  setTimeout(() => {
    router.push({ name: `step-${stepNumber.value + 1}` });
  }, 1000);
};
</script>

<style scoped lang="scss"></style>
