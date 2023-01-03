<template>
  <div class="step-3 step">
    <h3>Which skills or expertise do you need?</h3>

    <!-- Custom Select -->
    <div class="custom-select">
      <h6>Skills</h6>
      <input
        v-model="search"
        type="text"
        class="search w-100"
        placeholder="Desired areas of expertise (e.g., JavaScript, Ruby, etc.)"
        @click.stop="showOption = !showOption"
      />

      <!-- Option based on data -->
      <div v-if="showOption" class="option">
        <div
          v-for="item in data"
          :key="item.id"
          class="item"
          @click.stop="select(item.name)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <!-- Selected -->
    <div class="selected d-flex flex-wrap">
      <div
        v-for="item in steps[2]"
        :key="item"
        class="item-selected"
        @click="removeSkills(item)"
      >
        {{ item }}
      </div>
    </div>

    <!-- Suggestion -->
    <div class="suggestion">
      <h6>
        Popular skills for <span class="highlights">{{ steps[0] }}</span>
      </h6>
      <div class="d-flex flex-wrap">
        <div
          v-for="item in popularData"
          :key="item.name"
          class="item-selected"
          @click="select(item.name)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';

// Import step 3 data
import { skills } from '@/utils/data';

import { useStepsStore } from '@/stores/steps';

// Implement search fonctionnality in custom-select
const search = ref('');
const showOption = ref(false);

const data = computed(() =>
  search.value
    ? skills.filter((e) =>
        e.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
      )
    : skills
);

const popularData = ref(skills.slice(-10));

// Close option when clicking to window
const closeOption = () => {
  showOption.value = false;
  search.value = '';
};

onMounted(() => {
  window.addEventListener('click', closeOption);
});

onBeforeMount(() => {
  window.removeEventListener('click', closeOption);
});

// Use steps store
const stepsStore = useStepsStore();

const { pushSkills, removeSkills } = stepsStore;
const { steps } = storeToRefs(stepsStore);

// Add to store when selecting a skill
const select = (value: string) => {
  pushSkills(value);
  showOption.value = false;
};
</script>

<style scoped lang="scss">
.step-3 {
  h3 {
    margin-bottom: 50px;
    padding-top: 25px;
  }

  h6 {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }

  .custom-select {
    margin-bottom: 10px;

    .search {
      outline: none;
      border: 1px solid rgb(225, 227, 235);
      box-shadow: none;
      border-radius: 4px;
      padding: 15px;
      background-color: transparent;

      &::-webkit-input-placeholder {
        /* Edge */
        color: rgb(126, 126, 126);
        font-size: 14px;
      }

      &::-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgb(126, 126, 126);
        font-size: 14px;
      }

      &::placeholder {
        color: rgb(126, 126, 126);
        font-size: 14px;
      }
    }

    .option {
      border: 1px solid rgb(225, 227, 235);
      border-top: none;
      max-height: 290px;
      overflow: scroll;

      .item {
        padding: 10px 15px;
        font-size: 14px;
        cursor: pointer;
        border-bottom: 1px solid rgb(244, 244, 244);

        &:hover {
          color: #1085bd;
          background-color: #f3f7f99c;
        }
      }
    }
  }

  .item-selected {
    list-style: none;
    border-radius: 100px;
    font-size: 12px;
    cursor: pointer;
    margin-top: 8px;
    margin-right: 8px;
    position: relative;
    color: #198cca;
    padding: 5px 15px 5px 30px;
    border: 1px solid rgba(25, 140, 202, 0.1);

    &:hover {
      background-color: rgba(25, 140, 202, 0.1);
    }

    &::after {
      content: '';
      background-image: url('@/assets/svg/tag-remove.svg');
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      background-size: cover;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: unset;
      left: 12px;
    }
  }

  .selected {
    .item-selected {
      padding: 5px 30px 5px 15px;
      background-color: rgba(25, 140, 202, 0.1);
      border: none;

      &::after {
        transform: translateY(-50%);
        right: 12px;
        left: unset;
      }
    }
  }

  .suggestion {
    margin-top: 20px;

    h6 {
      .highlights {
        color: #198cca;
        text-transform: capitalize;
      }
    }
  }
}
</style>
