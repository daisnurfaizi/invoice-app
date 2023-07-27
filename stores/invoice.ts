import { defineStore } from "pinia";
import { Invoice } from "types/invoice";

export interface InvoiceState {
    invoices: Invoice[]
    selectedInvoice: Invoice
}

export const useInvoiceStore = defineStore("invoice", {
  state: (): InvoiceState => {
    return {
        invoices: [],
        selectedInvoice: {} as Invoice
    };
  },
  getters: {
    getGrandTotal() {
      return this.invoice.reduce((acc, curr) => acc + curr.x, 0);
    }
  },
  actions: {
    addInvoice(req: Invoice) {
      const sortedData = this.invoices.sort((a, b) =>
        a.id.localeCompare(b.id)
      );
      let lastID = "INV-0000"
      if (sortedData.length > 0) {
        lastID = sortedData[sortedData.length - 1].id;
      }
      const counter = parseInt(lastID.substring(4)) + 1;

      req.id = `INV-${counter.toString().padStart(4, '0')}`;
      req.status = 'pending';
      this.invoices = [
        req,
        ...this.invoices,
      ].sort((a, b) => b.id.localeCompare(a.id));
    },
    clearSelectedInvoice() {
      this.selectedInvoice = {} as Invoice
    },
    setSelectedInvoice(id: string) {
      const index = this.invoices.findIndex(
        (item) => item.id === id
      );

      this.selectedInvoice = this.invoices[index]
    },
    markAsPaid(id: string) {
      const index = this.invoices.findIndex(
        (item) => item.id === id
      );

      this.selectedInvoice = { ...this.selectedInvoice, status: 'paid'}
      this.invoices[index] = this.selectedInvoice
    }
  }
});
