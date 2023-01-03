import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

// Store all selected value in store
export const useStepsStore = defineStore('steps', () => {
  // Get and store step number from route name
  const route = useRoute();
  const stepNumber = computed(() =>
    Number(route.name?.toString().split('-')[1])
  );

  // Store steps as array and persist in localstorage
  const steps = ref(JSON.parse(localStorage.getItem('steps') as string) || []);

  // Index based on step number
  const setSteps = (value: string, index: number) => {
    steps.value[index] = value;
    localStorage.setItem('steps', JSON.stringify(steps.value));
  };
  //

  return { stepNumber, steps, setSteps };
});
