import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      isDarkMode: false,
      screenSize: "lg",
      isModalOpen: false,
    };
  },
  actions: {
    setScreenSize(value: "sm" | "md" | "lg") {
      this.screenSize = value;
    },
  },
});
