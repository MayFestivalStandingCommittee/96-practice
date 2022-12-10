<template>
  <div>
    {{ kikakuData }}
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const kikakuData = ref()
const kikakuId = typeof id === "string" ? parseInt(id) : 0;
const API_BASE_URL = "https://gogatsusai.jp/95/api";
const { data } = useFetch(`${API_BASE_URL}/kikaku/id/${kikakuId}`);
kikakuData.value = data.value
</script>
