import { defineStore } from 'pinia'

export const useRalseiStore = defineStore('ral', {
  state: () => ({
    scrolled: false,
    
  }),
  getters: {},
  actions: {
    toggleScrolled() {
      this.scrolled = !this.scrolled
    },
    setScrolled(value) {
      this.scrolled = value
    },
    
  }
})
