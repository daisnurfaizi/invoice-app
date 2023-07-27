<template>
    <div class="flex items-center justify-between mt-24 bg-[#1F2138] px-8 py-6 rounded-lg">
        <h1>#{{ route.params.id }}</h1>
        <div class="flex gap-4">
            <button class="px-5 py-3 rounded-3xl text-[#EBEEF1] bg-[#131426] text-sm font-semibold">Edit</button>
            <button class="px-5 py-3 rounded-3xl text-[#EBEEF1] bg-red-400 text-sm font-semibold">Delete</button>
            <button :disabled="invoice.status === 'paid'" @click="invoiceStore.markAsPaid(invoice.id)" class="px-5 py-3 rounded-3xl text-[#EBEEF1] bg-[#7F5BF4] text-sm font-semibold">Mark As
                Paid</button>
        </div>
    </div>

    <div class="flex flex-col items-center justify-between my-6 bg-[#1F2138] px-8 py-10 rounded-lg">
        <div class="flex w-full">
            <div class="basis-[100px] flex-1">
                <h1 class="text-3xl sm:text-6xl font-semibold text-[#FDFBF4]">Invoice</h1>
            </div>

            <div class="flex flex-col items-end text-[#9293A0] text-sm">
                <div>{{ invoice.from_street_address }}</div>
                <div>{{ invoice.from_city }}</div>
                <div>{{ invoice.from_post_code }}</div>
                <div>{{ invoice.from_country }}</div>
            </div>
        </div>

        <div class="flex flex-wrap w-full">
            <div class="flex flex-col basis-[33%]">
                <span class="text-[#9293A0] text-sm">Project Description</span>
                <span class="text-[#FDFBF4] text-sm">{{ invoice.project_description }}</span>
            </div>

            <div class="flex flex-col basis-[33%]">
                <span class="text-[#9293A0] text-sm">Name</span>
                <span class="text-[#FDFBF4] text-sm">{{ invoice.client_name }}</span>
            </div>

            <div class="flex flex-col basis-[33%]">
                <span class="text-[#9293A0] text-sm">Sand to</span>
                <span class="text-[#FDFBF4] text-sm">{{ invoice.client_email }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useInvoiceStore } from '~/stores/invoice';
const invoiceStore = useInvoiceStore()

const route = useRoute()
const { selectedInvoice: invoice } = storeToRefs(useInvoiceStore())

const onDeleteHandler = (id) => {
    
}

onBeforeMount(() => {
    invoiceStore.setSelectedInvoice(route.params.id)
})

onBeforeUnmount(() => {
    invoiceStore.clearSelectedInvoice()
})
</script>