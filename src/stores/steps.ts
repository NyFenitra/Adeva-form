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

  // Index of each step's data is based on step number
  const setSteps = (value: string, index: number) => {
    steps.value[index] = value;
    localStorage.setItem('steps', JSON.stringify(steps.value));
  };
  //

  // Skills is an array
  const pushSkills = (value: string) => {
    // Initialize skills as array if not defined
    steps.value[2] = Array.isArray(steps.value[2]) ? steps.value[2] : [];

    // Don't duplicate value
    !steps.value[2].includes(value) && steps.value[2].push(value);
    localStorage.setItem('steps', JSON.stringify(steps.value));
  };

  const removeSkills = (value: string) => {
    // Initialize skills as array if not defined
    steps.value[2] = Array.isArray(steps.value[2])
      ? steps.value[2].filter((e) => e !== value)
      : [];
    localStorage.setItem('steps', JSON.stringify(steps.value));
  };
  //

  return { stepNumber, steps, setSteps, pushSkills, removeSkills };
});
