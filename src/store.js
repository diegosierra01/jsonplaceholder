import Vue from 'vue'
import Vuex from 'vuex'
import resource from '@/store/modules/resourceConsulted'
import galery from '@/store/modules/galery'
import album from '@/store/modules/album'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    resource,
    galery,
    album
  }
})