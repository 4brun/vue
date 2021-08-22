export default {
   install(Vue) {
      if (this.installed) {
         return
      }
      this.installed = true

      Vue.prototype.$context = {
         EventBus: new Vue(),
         show({ items }) {
            console.log({ items })
            this.EventBus.$emit('show', { items })
         },
         edit() {
            console.log('edit');
         },
         delete() {
            console.log('del');
         },
         hide() {
            this.EventBus.$emit('close')
         }
      }
   }
}