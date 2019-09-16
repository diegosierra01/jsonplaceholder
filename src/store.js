import Vue from 'vue'
import Vuex from 'vuex'
import photo from '@/store/modules/photo'
import galery from '@/store/modules/galery'
import albums from '@/store/modules/albums'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photo,
    galery,
    albums
  }
})