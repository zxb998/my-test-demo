<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userName = useUserStore()

const changName = () => {
    userName.updataName('彬彬')
}

</script>

<template>
    <div @click="changName">{{ userName.name }}</div>
    <div>test is hmr</div>
</template>

<style scoped></style>
