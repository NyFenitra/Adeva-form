<template>
  <div class="signup container-fluid">
    <div class="row">
      <div class="left col-12 col-lg-7 col-xl-8">
        <!-- Logo display based on step number -->
        <AppLogo :class="{ small: stepNumber > 1 }" />

        <div class="steps offset-md-2 offset-0 col-xl-8 col-12">
          <!-- Progress-bar based on step number -->
          <div v-if="stepNumber !== 1" class="progressbar">
            <div
              v-for="index in 5"
              :key="index"
              class="col-md-3 progress-bar-item"
              :class="{ active: index < stepNumber }"
            />
          </div>

          <div class="content">
            <RouterView />
            <div
              v-if="stepNumber > 1 && stepNumber < 6"
              class="navigation d-flex align-items-center justify-content-between"
            >
              <button class="back" @click="back">Back</button>
              <button v-if="stepNumber === 3" class="next" @click="next">
                Next
              </button>
              <!-- In step 6, data in store are ready to be sended to any existing backend -->
              <button v-if="stepNumber === 5" class="next" @click="next">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right d-flex flex-column justify-content-center col-12 col-lg-5 col-xl-4"
      >
        <h5 class="text-center">
          Join over 200 companies that use Adeva to scale their engineering
          teams.
        </h5>
        <div
          class="partners d-flex justify-content-center align-items-center flex-wrap"
        >
          <img src="@/assets/svg/hopin_original.svg" alt="" />
          <img src="@/assets/svg/johnson&amp;johnson_original.svg" alt="" />
          <img src="@/assets/svg/imgur_original.svg" alt="" />
          <img src="@/assets/svg/perfocal_original.svg" alt="" />
          <img src="@/assets/svg/reboot_original.svg" alt="" />
          <img src="@/assets/svg/qri_original.svg" alt="" />
        </div>
        <div class="text">
          <p>
            For assistance or inquiries, call us at
            <a class="phone-num" href="tel:+18888994980">+1.888.8994980</a>
            anytime between 8 AM and 4 PM EST (Monday - Friday)<!-- -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { useStepsStore } from '@/stores/steps';
import { storeToRefs } from 'pinia';

import AppLogo from '@/components/AppLogo.vue';

// Get step number from store
const stepsStore = useStepsStore();

const { stepNumber } = storeToRefs(stepsStore);

const router = useRouter();
const back = () => {
  setTimeout(() => {
    router.push({ name: `step-${stepNumber.value - 1}` });
  }, 1000);
};
const next = () => {
  setTimeout(() => {
    router.push({ name: `step-${stepNumber.value + 1}` });
  }, 1000);
};
</script>

<style lang="scss">
.signup {
  display: flex;
  padding-left: 30px;
  padding-right: 0;

  & > .row {
    width: 100%;

    .left {
      overflow: scroll;
      scrollbar-width: none;
      height: 100vh;
      position: relative;

      .logo {
        position: absolute;
        top: 20px;
        left: 28px;

        &.small {
          left: 12px;
        }
      }

      .steps {
        max-width: 770px;
        margin: auto;
        padding: 60px 30px;
        position: relative;

        .progressbar {
          position: absolute;
          top: 40px;
          width: calc(100% - 30px);
          display: flex;
          gap: 4px;

          .progress-bar-item {
            width: 20%;
            padding: 0 2px;
            background-color: #e1e3eb;
            height: 2px;

            &.active {
              background-color: #198cca;
            }
          }
        }

        .content {
          margin-top: 80px;

          .step {
            h3 {
              font-size: 20px;
              margin-top: 25px;
            }

            .desc {
              margin: 15px 0 30px 0;
              font-size: 14px;
            }

            .item-container {
              gap: 15px;
            }
          }

          .navigation {
            margin-top: 60px;

            .back {
              color: #adb4c7;
              font-size: 14px;
              text-transform: uppercase;
              font-weight: 600;
              font-family: Poppins, sans-serif;
              background-color: transparent;
              border: 0;
              padding-left: 0;

              &:hover {
                opacity: 0.9;
                color: #1a284d;
              }
            }

            .next {
              min-width: 100px;
              border: 1px solid #24b768;
              color: #fff;
              background: #24b768;
              font-family: Poppins, sans-serif;
              font-size: 14px;
              letter-spacing: 0.35px;
              padding: 19px;
              border-radius: 3px;
              font-weight: 600;
              transition: background 0.3s;

              &:hover {
                background-color: #198cca;
                border: 1px solid #198cca;
              }
            }
          }
        }
      }
    }

    .right {
      padding: 0 50px;

      h5 {
        margin-bottom: 20px;
        font-size: 16px;
      }

      .partners {
        border-bottom: 1px solid #e1e3eb;
        padding-bottom: 20px;

        img {
          width: 146px;
          filter: grayscale(1);
          opacity: 0.5;
        }
      }

      .text {
        padding: 20px 0;
        line-height: 28px;

        p {
          margin: 1rem 0;

          .phone-num {
            color: #1a284d;
            font-weight: 700;
            text-decoration: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .row {
      .left {
        .logo {
          &.small {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .steps {
          .progressbar {
            width: 100%;
            top: 90px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 15px;

    .row {
      width: unset;
      padding: 0 15px;

      .left {
        overflow: unset;
        height: unset;

        .logo {
          left: 15px;
        }

        .steps {
          padding: 60px 0;

          .content {
            .step {
              h3 {
                font-size: 19px;
              }
            }
          }
        }
      }

      .right {
        background-color: #f9fafc;
        padding: 20px;

        .partners {
          img {
            width: 120px;
          }
        }

        .text {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
