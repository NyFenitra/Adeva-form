<template>
  <div class="signup container-fluid">
    <div class="row w-100">
      <div class="left col-12 col-lg-7 col-xl-8">
        <AppLogo :class="{ small: numberOfStep > 1 }" />
        <div class="steps">
          <div v-if="route.name !== 'step-1'" class="progressbar">
            <div
              v-for="index in 5"
              :key="index"
              class="col-md-3 progress-bar-item"
              :class="{ active: index < numberOfStep }"
            />
          </div>
          <div class="content">
            <RouterView />
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
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

import AppLogo from '@/components/AppLogo.vue';

// Get step number from route name
const route = useRoute();
const numberOfStep = computed(() =>
  Number(route.name?.toString().split('-')[1])
);
</script>

<style scoped lang="scss">
.signup {
  min-height: 100vh;
  display: flex;
  padding-left: 30px;
  padding-right: 0;

  .left {
    .logo {
      position: absolute;
      top: 20px;
      left: 46px;

      &.small {
        left: 30px;
      }
    }

    .steps {
      max-width: 770px;
      margin: auto;
      padding: 60px 15px;
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

  @media screen and (max-width: 767px) {
    padding: 0 15px;

    .left {
      .logo {
        &.small {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .steps {
        .progressbar {
          top: 90px;
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
</style>
