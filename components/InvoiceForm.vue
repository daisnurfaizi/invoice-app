<template>
    <div>
        <div class="fixed bottom-0 left-[64px] h-full w-full overflow-hidden bg-[#000] opacity-50" />
        <div id="InvoiceForm" class="fixed z-50 bottom-0 left-0 md:left-[64px] h-full w-full overflow-hidden">
            <div class="bg-[#131426] flex flex-col h-full w-full md:w-[40%] rounded-r-2xl">
                <div id="HeaderForm" class="p-8">
                    <h1 class="font-semibold text-[#EBEEF1] text-2xl">Create Invoice</h1>
                </div>
                <div class="px-8 py-4 flex-1 flex flex-col gap-8 overflow-y-auto">
                    <div class="flex flex-col gap-4">
                        <span class="text-[#7F5BF4]">Bill From</span>
                        <div class="flex flex-col gap-2">
                            <label class="text-[#9293A0]">Street Address</label>
                            <input type="text" v-bind="from_street_address"
                                class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                            <span v-if="errors.from_street_address" class="text-xs text-red-400">{{
                                errors.from_street_address }}</span>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">City</label>
                                <input type="text" v-bind="from_city"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.from_city" class="text-xs text-red-400">{{ errors.from_city }}</span>
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Post Code</label>
                                <input type="text" v-bind="from_post_code"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.from_post_code" class="text-xs text-red-400">{{ errors.from_post_code
                                }}</span>
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Country</label>
                                <input type="text" v-bind="from_country"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.from_country" class="text-xs text-red-400">{{ errors.from_country
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <span class="text-[#7F5BF4]">Bill To</span>
                        <div class="flex flex-col gap-2">
                            <label class="text-[#9293A0]">Client's Name</label>
                            <input type="text" v-bind="client_name"
                                class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                            <span v-if="errors.client_name" class="text-xs text-red-400">{{ errors.client_name
                            }}</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-[#9293A0]">Client's Email</label>
                            <input type="text" v-bind="client_email"
                                class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                            <span v-if="errors.client_email" class="text-xs text-red-400">{{ errors.client_email
                            }}</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-[#9293A0]">Street Address</label>
                            <input type="text" v-bind="client_street_address"
                                class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                            <span v-if="errors.client_street_address" class="text-xs text-red-400">{{
                                errors.client_street_address
                            }}</span>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">City</label>
                                <input type="text" v-bind="client_city"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.client_city" class="text-xs text-red-400">{{ errors.client_city
                                }}</span>
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Post Code</label>
                                <input type="text" v-bind="client_post_code"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.client_post_code" class="text-xs text-red-400">{{ errors.client_post_code
                                }}</span>
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Country</label>
                                <input type="text" v-bind="client_country"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.client_country" class="text-xs text-red-400">{{ errors.client_country
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex gap-4">
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Invoice Date</label>
                                <input type="date" v-bind="invoice_date"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                                <span v-if="errors.invoice_date" class="text-xs text-red-400">{{ errors.invoice_date
                                }}</span>
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-[#9293A0]">Payment Term</label>
                                <select v-bind="payment_term"
                                    class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none">
                                    <option value=""></option>
                                    <option value="30">Net 30 Days</option>
                                </select>
                                <span v-if="errors.payment_term" class="text-xs text-red-400">{{ errors.payment_term
                                }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-[#9293A0]">Project Description</label>
                            <input type="text" v-bind="project_description"
                                class="bg-[#1F2138] text-[#EBEEF1] p-4 rounded-md w-full outline-none" />
                            <span v-if="errors.project_description" class="text-xs text-red-400">{{
                                errors.project_description
                            }}</span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <h4>Item List</h4>
                        <table class="w-full">
                            <tr>
                                <td class="text-[#9293A0] font-sm px-2 pl-0 max-w-auto">Item Name</td>
                                <td class="text-[#9293A0] font-sm px-2 w-[80px]">Qty</td>
                                <td class="text-[#9293A0] font-sm px-2 w-[100px]">Price</td>
                                <td class="text-[#9293A0] font-sm px-2 w-[100px]">Total</td>
                                <td class="text-[#9293A0] font-sm px-2 pr-0"></td>
                            </tr>
                            <tr v-for="(field, idx) in fields" :key="field.key">
                                <td class="text-[#9293A0] font-sm p-2 pl-0"><input type="text" v-model="field.value.name"
                                        class="bg-[#1F2138] text-[#EBEEF1] p-2 rounded-md w-full outline-none" /></td>
                                <td class="text-[#9293A0] font-sm p-2"><input type="number" v-model="field.value.quantity"
                                        @keyup="calculateTotal(idx, field.value)"
                                        class="bg-[#1F2138] text-[#EBEEF1] p-2 rounded-md w-full outline-none" /></td>
                                <td class="text-[#9293A0] font-sm p-2"><input type="number" v-model="field.value.price"
                                        @keyup="calculateTotal(idx, field.value)"
                                        class="bg-[#1F2138] text-[#EBEEF1] p-2 rounded-md w-full outline-none" /></td>
                                <td class="text-[#9293A0] font-sm p-2">{{ field.value.total }}</td>
                                <td class="p-2 pr-0"><button type="button" @click="remove(idx)">
                                        <Icon name="mdi:delete" size="24" color="#EBEEF1" />
                                    </button></td>
                            </tr>
                        </table>
                        <span v-if="errors.list_items" class="text-xs text-red-400">{{ errors.list_items
                        }}</span>
                        <button class="p-3 rounded-full text-[#9293A0] bg-[#1F2138] text-sm font-semibold w-full"
                            @click="onNewItemHandler">
                            <Icon name="mdi:plus" size="12" color="#EBEEF1" />
                            <span>Add New Item</span>
                        </button>
                    </div>
                </div>
                <div id="FooterForm" class="p-8 flex self-end">
                    <div class="flex gap-4 ">
                        <button class="p-3 rounded-full text-[#9293A0] bg-[#1F2138] text-sm font-semibold"
                            @click="appStore.isModalOpen = false">Cancel</button>
                        <button type="submit" class="p-3 rounded-full text-[#EBEEF1] bg-[#7F5BF4] text-sm font-semibold"
                            @click="onSubmitHandler">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate';
import { Invoice, Item } from '~/types/invoice'
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

import { useAppStore } from '~/stores/app'
import { useInvoiceStore } from '~/stores/invoice'
const appStore = useAppStore();
const invoiceStore = useInvoiceStore();

const schema = toTypedSchema(
    yup.object({
        from_street_address: yup.string().required().label('street address'),
        from_city: yup.string().required().label('city'),
        from_post_code: yup.string().required().label('post code'),
        from_country: yup.string().required().label('country'),
        client_name: yup.string().required().label('client name'),
        client_email: yup.string().required().email().label('client email'),
        client_street_address: yup.string().required().label('street address'),
        client_city: yup.string().required().label('city'),
        client_post_code: yup.string().required().label('post code'),
        client_country: yup.string().required().label('country'),
        invoice_date: yup.string().required().label('invoice date'),
        payment_term: yup.string().required().label('payment term'),
        project_description: yup.string().required().label('project description'),
        list_items: yup
            .array()
            .of(
                yup.object().shape({
                    name: yup.string().required(),
                    quantity: yup.number().min(1).required().label('quantity'),
                    price: yup.number().min(1).required().label('price'),
                    total: yup.number().required(),
                })
            )
            .required()
            .strict()
            .label("list items"),
    }),
);

const { values, defineInputBinds, errors, handleSubmit } = useForm<Invoice>({
    validationSchema: schema,
    initialValues: {

    }
});

const { remove, push, fields, update } = useFieldArray<Item>('list_items')

const from_street_address = defineInputBinds('from_street_address');
const from_city = defineInputBinds('from_city');
const from_post_code = defineInputBinds('from_post_code');
const from_country = defineInputBinds('from_country');
const client_name = defineInputBinds('client_name');
const client_email = defineInputBinds('client_email');
const client_street_address = defineInputBinds('client_street_address');
const client_city = defineInputBinds('client_city');
const client_post_code = defineInputBinds('client_post_code');
const client_country = defineInputBinds('client_country');
const invoice_date = defineInputBinds('invoice_date');
const payment_term = defineInputBinds('payment_term');
const project_description = defineInputBinds('project_description');
const list_items = defineInputBinds('list_items');

const onSubmitHandler = handleSubmit((req: Invoice) => {
    invoiceStore.addInvoice(req)
    appStore.isModalOpen = false
});

const onNewItemHandler = () => {
    push({
        name: '',
        quantity: 0,
        price: 0,
        total: 0
    })
}

const calculateTotal = (idx: number, item: Item) => {
    let total = item.quantity * item.price
    update(idx, {
        ...item,
        total: total
    })
}

onBeforeMount(() => {
    invoiceStore.addInvoice({
        from_street_address: "Jalan Pondok Kelapa IV",
        from_city: "Jakarta",
        from_post_code: "13450",
        from_country: "Indonesia",
        client_email: "umarbawazirfaiz@gmail.com",
        client_name: "Umar",
        client_street_address: "Jalan Bintara 1",
        client_city: "Bekasi",
        client_post_code: "17134",
        client_country: "Indonesia",
        invoice_date: "2023-07-21",
        payment_term: "30",
        project_description: "Web",
        list_items: [
            { name: "Design", quantity: 1, price: 200000, total: 200000 }
        ]
    })
})
</script>