<template>
    <div class="flex" :class="{
        'flex-row': screenSize == 'lg',
        'flex-col': screenSize != 'lg'
    }">
        <div class="flex justify-between bg-[#1F2138]" :class="[
            { 'flex-col fixed h-screen w-[64px] items-start rounded-r-2xl': screenSize == 'lg' },
            { 'flex-row h-[64px] w-full items-center rounded-0': screenSize != 'lg' }
        ]">
            <div class="w-[64px] h-[64px] rounded-r-2xl bg-[#7B5BFC]">

            </div>

            <div class="flex justify-center" :class="[
                { 'flex-col items-start w-[64px]': screenSize == 'lg' },
                { 'flex-row items-center w-auto': screenSize != 'lg' }
            ]">
                <div
                    class="mx-[8px] my-0 sm:mx-0 sm:my-[8px] flex items-center justify-center w-auto sm:w-[64px] sm:h-[64px]">
                    <Icon name="mdi:white-balance-sunny" class="" size="16" color="#fff" />
                </div>
                <span class="w-[1px] sm:w-[60%] h-[60%] sm:h-[1px] mx-[8px] sm:mx-[12px] my-[12px] sm:my-[8px]"></span>
                <div
                    class="mx-[8px] my-0 sm:mx-0 sm:my-[8px] flex items-center justify-center sm:h-[64px] w-auto sm:w-[64px]">
                    <img src="https://picsum.photos/id/223/50" class="w-[24px] h-[24px] object-fit rounded-full" />
                </div>
            </div>
        </div>

        <div class="flex w-full lg:ml-[64px]">
            <div :class="[
                { 'w-full max-w-[876px] mx-auto': screenSize == 'lg' },
                { 'mx-8 w-full min-w-[340px] h-screen': screenSize != 'lg' }
            ]">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from '~/stores/app'

const { isDarkMode, screenSize } = storeToRefs(useAppStore())
</script>