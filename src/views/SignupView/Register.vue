<template>
  <form class="step-5 step">
    <h3>Let's kick off your project!</h3>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="first_name" class="pull-left">First Name</label>
          <input
            v-model="firstName"
            type="text"
            class="form-control"
            placeholder="Enter your First name"
            name="first_name"
          />
        </div>
      </div>

      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="last_name" class="pull-left">Last Name</label>
          <input
            v-model="lastName"
            type="text"
            class="form-control"
            placeholder="Enter your Last name"
            name="first_name"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="email" class="pull-left">Company email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your company email"
            name="email"
          />
        </div>
      </div>

      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="number" class="pull-left">Phone Number (Optional)</label>
          <div class="d-flex">
            <div class="country-select">
              <div class="selected" @click.stop="showOption = !showOption">
                <img
                  :src="`https://flagcdn.com/w20/${selectedDialCode.code.toLocaleLowerCase()}.png`"
                  :srcset="`https://flagcdn.com/w20/${selectedDialCode.code.toLocaleLowerCase()}.png 2x`"
                  width="20"
                />
                <div class="arrow" :class="[showOption ? 'up' : 'down']"></div>
              </div>
              <div v-if="showOption" class="option d-flex flex-column">
                <div
                  v-for="item in countrySorted"
                  :key="item.code"
                  class="dial-option d-flex align-items-center"
                  @click="selectDial(item)"
                >
                  <img
                    :src="`https://flagcdn.com/w20/${item.code.toLocaleLowerCase()}.png`"
                    :srcset="`https://flagcdn.com/w20/${item.code.toLocaleLowerCase()}.png 2x`"
                    width="20"
                  />
                  <div class="country-name">{{ item.name }}</div>
                  <div class="country-dial">{{ item.dial_code }}</div>
                </div>
              </div>
            </div>
            <input
              v-model="phone"
              type="text"
              class="form-control"
              placeholder="72 345 678"
              name="number"
              ref="phoneInput"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue';
import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';

// Import country list
import { countrySorted } from '@/utils/data';

import { useStepsStore } from '@/stores/steps';

// Use steps store
const stepsStore = useStepsStore();

// Form Data
const { firstName, lastName, email, phone, dialCode } = storeToRefs(stepsStore);

// Implement dial code custom select
// Choose first as selected
const selectedDialCode = ref(countrySorted[0]);
dialCode.value = selectedDialCode.value.dial_code;

const showOption = ref(false);
const phoneInput: Ref<HTMLInputElement | null> = ref(null);

// Close option when clicking to window
const closeOption = () => {
  showOption.value = false;
};

onMounted(() => {
  window.addEventListener('click', closeOption);
});

onBeforeMount(() => {
  window.removeEventListener('click', closeOption);
});

const selectDial = (value: {
  name: string;
  code: string;
  dial_code: string;
}) => {
  selectedDialCode.value = value;
  dialCode.value = selectedDialCode.value.dial_code;
  phoneInput.value?.focus();
};
</script>

<style scoped lang="scss">
.step-5 {
  .row {
    margin-top: 35px;

    .form-group {
      label {
        font-size: 14px;
        line-height: 18px;
        padding-bottom: 8px;
        display: block;
        font-weight: 700;
        margin-bottom: 0;
      }

      .form-control {
        color: #555;
        height: 48px;
        font-size: 13px;
        border: 1px solid #e6e6ed;
        border-radius: 0.25rem;

        &:focus {
          border-color: #a9a9a9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }
      }

      .country-select {
        position: relative;
        width: 58px;
        border: 1px solid #e1e3eb;
        border-radius: 3px;
        margin-right: 2%;

        .selected {
          background-color: rgba(0, 0, 0, 0.05);
          justify-content: center;
          align-items: center;
          outline: none;
          width: 54px;
          display: flex;
          height: 100%;
          cursor: pointer;

          .arrow {
            font-size: 6px;
            margin-left: 8px;

            &.down::after {
              content: '▼';
            }

            &.up::after {
              content: '▲';
            }
          }
        }

        .option {
          position: absolute;
          top: 100%;
          left: 0;
          width: 300px;
          border-radius: 4px;
          box-shadow: none;
          border: 1px solid #e6e6ed;
          white-space: nowrap;
          max-height: 200px;
          overflow: auto;
          background-color: white;

          .dial-option {
            padding: 8px 10px;
            font-size: 14px;
            gap: 10px;
            cursor: pointer;

            &:hover {
              background-color: rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .row {
      margin-top: 0px;
      padding: 0;

      .form-group {
        margin: 20px 0;
      }
    }
  }
}
</style>
