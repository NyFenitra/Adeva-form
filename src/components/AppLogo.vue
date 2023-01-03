<template>
  <RouterLink to="/" class="logo d-inline-block"></RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.logo {
  width: 120px;
  height: 38px;
  background-image: url('@/assets/svg/logo.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &.small {
    background-image: url('@/assets/svg/logo_adeva_symbol.svg');
  }
}
</style>
