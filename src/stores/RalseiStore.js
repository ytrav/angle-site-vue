import { defineStore } from 'pinia'

export const useRalseiStore = defineStore('ral', {
  state: () => ({
    scrolled: false,
    menuOpened: false,
    links: [
      {
        name: 'Gallery',
        path: '/gallery'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Links',
        path: '/links'
      },
      {
        name: 'Commissions',
        path: '/commissions'
      }
    ]
  }),
  getters: {},
  actions: {
    toggleScrolled() {
      this.scrolled = !this.scrolled
    },
    setScrolled(value) {
      this.scrolled = value
    },
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    },
    setMenu(value) {
      this.menuOpened = value
    }
  }
})
