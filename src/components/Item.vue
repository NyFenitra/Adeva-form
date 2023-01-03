<template>
  <div class="item d-flex flex-column justify-content-center">
    <h6>{{ title }}</h6>
    <p v-if="desc" class="role-desc">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'desc']);
</script>

<style scoped lang="scss">
.item {
  border-radius: 3px;
  border: 1px solid #e1e3eb;
  box-shadow: inset 0 0 0 0.01px #fff;
  padding: 20px 30px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.5s linear, color 0.5s linear;

  &:hover {
    border: 1px solid #198cca;
    background-color: rgba(25, 140, 202, 0.02);
  }

  &.active {
    box-shadow: inset 800px 0 0 0 rgba(25, 140, 202, 0.1);
    border: 1px solid #198cca;

    &::before {
      content: '';
      background-image: url('@/assets/svg/blue_checkmark.svg');
      display: block;
      position: absolute;
      right: 30px;
      height: 24px;
      width: 24px;
      background-size: cover;
    }
  }

  h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h6,
  .role-desc {
    margin: 0;
  }

  .role-desc {
    color: #546285;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
