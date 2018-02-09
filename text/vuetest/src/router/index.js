import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: hi1,
        right: hi2,
        
      }
    },
    {
      path: '/zy',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: hi2,
        right: hi1,
        
      }
    },
    {
      path: '/hi',
      // name: 'hi',
      component: hi,
      children:[
        {path: '/',name:'hi', component:hi},
        {path: 'hi1',name:'hi1',component:hi1},
        {path: 'hi2',name:'hi2',component:hi2}
      ]
    }
  ]
})
