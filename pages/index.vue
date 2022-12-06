<template>
    <div
        v-for="i in 10"
        :key="i"
        class="a"
    >
        <p>あ</p>
    </div>
</template>
<script setup lang="ts">
const isDisplay = ref(true)
</script>
