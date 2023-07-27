<template>
    <div class="flex items-center my-24">
        <div class="basis-[100px] flex-1">
            <h1 class="text-3xl sm:text-6xl font-semibold text-[#FDFBF4]">Invoices</h1>
            <p class="text-base sm:text-lg font-light text-[#FDFBF4] whitespace-normal">There are 7 total invoices</p>
        </div>

        <div class="flex gap-4 lg:gap-12 items-center">
            <div class="flex gap-2 items-center">
                <span class="font-semibold text-[#FDFBF4] hidden md:block whitespace-nowrap">Filter by status</span>
                <span class="font-semibold text-[#FDFBF4] block md:hidden">Filter</span>
                <Icon name="mdi:chevron-down" size="24" color="#7F5BF4" />
            </div>
            <button class="flex gap-6 items-center py-3 px-3 box-border bg-[#7B5BFC] rounded-full"
                @click="openCreateModalInvoice">
                <div class="bg-[#FDFBF4] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                    <Icon name="mdi:plus" size="24" color="#7F5BF4" />
                </div>
                <span class="hidden md:block mr-4 whitespace-nowrap">New Invoice</span>
                <span class="block md:hidden mr-4">New</span>
            </button>
        </div>
    </div>
    <div v-if="invoices" class="flex gap-4 flex-col">
        <InvoiceRow v-for="invoice in invoices" :key="invoice.name" :invoice="invoice" />
    </div>

    <InvoiceForm :class="{
        'max-h-[100vh] transition-all duration-200 ease-in visible': appStore.isModalOpen,
        'max-h-0 transition-all duration-200 ease-out invisible': !appStore.isModalOpen
    }" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useInvoiceStore } from '~/stores/invoice';
import { useAppStore } from '~/stores/app'
const appStore = useAppStore();

const { invoices } = storeToRefs(useInvoiceStore())

const openCreateModalInvoice = () => {
    appStore.isModalOpen = true
}
</script>