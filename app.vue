<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-family: 'Inter';
  letter-spacing: .2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #FDFBF4;
  background-color: #131426;
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  transition: color .5s,background-color .5s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-wrap: break-word
}
</style>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()
const { isDarkMode, screenSize } = storeToRefs(useAppStore())

const checkScreen = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
        appStore.setScreenSize('lg')
    } else if (windowWidth >= 768) {
        appStore.setScreenSize('md')
    } else if (windowWidth >= 640) {
        appStore.setScreenSize('sm')
    } else {
        appStore.setScreenSize('sm')
    }
    console.log(screenSize.value);
}

onMounted(() => {
    addEventListener('resize', checkScreen)
    checkScreen()
})

</script>