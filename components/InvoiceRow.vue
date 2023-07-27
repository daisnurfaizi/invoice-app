<template>
    <div v-if="screenSize === 'lg' || screenSize === 'md'"
        class="box-border p-4 bg-[#1F2138] flex rounded-xl gap-4 w-full items-center"
        @click="router.push(`/invoices/${invoice.id}`)">
        <div class="min-w-[70px] flex"><span class="text-sm"># {{ invoice.id }}</span></div>
        <div class="min-w-[130px] flex"><span class="text-sm">Due {{ format_due_date }}</span></div>
        <div class="min-w-[100px] flex-1 flex"><span class="text-sm">{{ invoice.client_name }}</span></div>
        <div class="min-w-[100px] flex-1 flex"><span class="text-sm">Rp {{ invoice.list_items.reduce((acc, curr) => acc +
            curr.total, 0) }}</span></div>
        <div class="flex items-center justify-center p-3 w-full max-w-[120px] rounded-lg capitalize" :class="{
            'bg-[#1D2C3F]': invoice.status === 'paid',
            'bg-[#2E2636]': invoice.status === 'pending',
            'bg-[#1F1F1F]': invoice.status === 'draft',
        }">
            <Icon name="ph:dot-outline-fill" size="24" :class="{
                'text-[#4A998B]': invoice.status === 'paid',
                'text-[#DC9242]': invoice.status === 'pending',
                'text-[#E0E2F7]': invoice.status === 'draft',
            }" />
            <span :class="{
                'text-[#4A998B]': invoice.status === 'paid',
                'text-[#DC9242]': invoice.status === 'pending',
                'text-[#E0E2F7]': invoice.status === 'draft',
            }">{{ invoice.status }}</span>
        </div>
        <div>
            <Icon name="mdi:chevron-right" size="24" color="#7F5BF4" />
        </div>
    </div>
    <div v-else>

    </div>
</template>

<script setup lang="ts">
import { Invoice } from '~/types/invoice'
import { useAppStore } from '~/stores/app'
import { storeToRefs } from 'pinia';
import { parse, addDays, format } from 'date-fns'

const appStore = useAppStore()
const router = useRouter();
const { isDarkMode, screenSize } = storeToRefs(useAppStore())

interface InvoiceRowProps {
    invoice: Invoice;
}

const props = defineProps<InvoiceRowProps>()

const invoice = ref(props.invoice)
const date = parse(invoice.value.invoice_date, 'yyyy-MM-dd', new Date());
const due_date = addDays(date, invoice.value.payment_term)
const format_due_date = format(due_date, 'dd MMM yyyy')

</script>