import VueComponent from "./vue-component.vue"

export default {
  install(Vue,options){
    Vue.component("vue-component",VueComponent)
  }
}