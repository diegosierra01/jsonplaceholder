import Vue from 'vue'
import Vuex from 'vuex'
import resource from '@/store/modules/resourceConsulted'
import created from '@/store/modules/resourceCreated'
import list from '@/store/modules/list'
import album from '@/store/modules/album'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    resource,
    list,
    album,
    created
  }
})