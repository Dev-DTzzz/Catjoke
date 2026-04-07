<template>
  <div class="min-h-screen bg-linear-to-br from-purple-100 to-blue-100 pt-15">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Просто указываем, что это клиентский компонент
// Это помогает с гидратацией
</script>