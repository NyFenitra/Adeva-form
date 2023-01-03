import { ref } from 'vue';
import { defineStore } from 'pinia';

// Store all selected value in store
export const useStepsStore = defineStore('steps', () => {
  // Get step1 from persisted localstorage
  const step1 = ref(JSON.parse(localStorage.getItem('step1') as string));

  // Persist step1 to localstorage
  const setStep1 = (value: string) => {
    step1.value = value;
    localStorage.setItem('step1', JSON.stringify(step1.value));
  };

  return { step1, setStep1 };
});
