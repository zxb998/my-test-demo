<script setup lang="ts">
import { useUserStore } from '../store/user';

const userName = useUserStore()

const changName = () => {
  console.log(111)
}

</script>

<template>
  <div @click="changName">{{ userName.name }}</div>
</template>

<style scoped></style>
