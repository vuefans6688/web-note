import Vue from 'vue'
import VueRouter from 'vue-router'

import NamedView from '@/views/named-view/index'
import Header from '@/views/named-view/header'
import Body from '@/views/named-view/body'
import Footer from '@/views/named-view/footer'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/plug',
      component: () => import('@/views/plug')
    },
    {
      path: '/test/parent',
      component: () => import('@/views/test/parent')
    },
    {
      path: '/test/child',
      component: () => import('@/views/test/child')
    },
    {
      path: '/test/father',
      component: () => import('@/views/test/father')
    },
    {
      path: '/test/son',
      component: () => import('@/views/test/son')
    },
    {
      path: '/family/father',
      component: () => import('@/views/family/father')
    },
    {
      path: '/family/son',
      component: () => import('@/views/family/son')
    },
    {
      path: '/Fruit',
      component: () => import('@/components/Fruit')
    },
    {
      path: '/Mango',
      component: () => import('@/components/Mango')
    },
    {
      path: '/jsx-rend/one',
      component: () => import('@/views/jsx-rend/one')
    },
    {
      path: '/jsx-rend/two',
      component: () => import('@/views/jsx-rend/two')
    },
    {
      path: '/life-cycle',
      component: () => import('@/views/life-cycle'),
      children: [
        {
          path: 'clock',
          component: () => import('@/views/life-cycle/clock')
        }
      ]
    },
    {
      path: '/mixin',
      component: () => import('@/views/mixin')
    },
    {
      path: '/tab',
      component: () => import('@/views/tab')
    },
    {
      path: '/course',
      component: () => import('@/views/course'),
      children: [
        {
          path: 'todo-item',
          component: () => import('@/views/course/todo-item')
        },
        {
          path: 'todo-list',
          component: () => import('@/views/course/todo-list')
        }
      ]
    },
    {
      path: '/event-center',
      component: () => import('@/views/event-center'),
      children: [
        {
          path: 'increment',
          component: () => import('@/views/event-center/increment')
        },
        {
          path: 'decrease',
          component: () => import('@/views/event-center/decrease')
        }
      ]
    },
    {
      path: '/tag',
      component: () => import('@/views/tag')
    },
    {
      path: '/computer',
      component: () => import('@/views/computer')
    },
    {
      path: '/watcher',
      component: () => import('@/views/watcher')
    },
    {
      path: '/manage-state',
      component: () => import('@/views/manage-state')
    },
    {
      path: '/search',
      component: () => import('@/views/search')
    },
    {
      path: '/select-box',
      component: () => import('@/views/select-box')
    },
    {
      path: '/dynamic-route/:id',
      name: 'dynamic-route',
      component: () => import('@/views/dynamic-route')
    },
    {
      path: '/named-route',
      name: 'named-route',
      component: () => import('@/views/named-route')
    },
    {
      path: '/dating',
      component: () => import('@/views/dating')
    },
    {
      path: '/message-form',
      component: () => import('@/views/message-form')
    },
    {
      path: '/table-gather',
      component: () => import('@/views/table-gather')
    },
    {
      path: '/different-table',
      component: () => import('@/views/different-table')
    },
    {
      path: '/place-zone',
      component: () => import('@/views/place-zone')
    },
    {
      path: '/message-board',
      component: () => import('@/views/message-board')
    },
    {
      path: '/auto-complete',
      component: () => import('@/views/auto-complete')
    },
    {
      path: '/input',
      component: () => import('@/views/input'),
      name: 'input',
      children: [
        {
          path: 'input-com',
          component: () => import('@/views/input/input-com'),
          name: 'input-com'
        }
      ]
    },
    {
      path: '/toggle-input',
      component: () => import('@/views/toggle-input'),
      children: [
        {
          path: 'pass-word',
          component: () => import('@/views/toggle-input/pass-word')
        },
        {
          path: 'short-letter',
          component: () => import('@/views/toggle-input/short-letter')
        }
      ]
    },
    {
      path: '/my-like',
      meta: {
        title: '收藏'
      },
      component: () => import('@/views/my-like')
    },
    {
      path: '/my-es',
      component: () => import('@/views/my-es')
    },
    {
      path: '/check-password',
      component: () => import('@/views/check-password')
    },
    {
      path: '/shop-cart',
      component: () => import('@/views/shop-cart')
    },
    {
      path: '/slide-delete',
      component: () => import('@/views/slide-delete')
    },
    {
      path: '/transmit',
      component: () => import('@/views/transmit')
    },
    {
      // path: '/receive/:name/:age',
      path: '/receive',
      component: () => import('@/views/receive'),
      // props: true,
      props: route => ({
        // name: route.params.name,
        // age: route.params.age
        name: route.query.name,
        age: route.query.age
      })
    },
    {
      path: '/sync',
      component: () => import('@/views/sync')
    },
    {
      path: '/named-view',
      name: 'NamedView',
      alias: '/home',  // 路由别名
      components: {  // 命名视图组件
        namedView: NamedView,
        header: Header,
        body: Body,
        footer: Footer
      }
    },
    {
      path: '/delete-and-cancel',
      component: () => import('@/views/delete-and-cancel')
    },
    {
      path: '/scope-slot',
      component: () => import('@/views/scope-slot')
    },
    {
      path: '/toggle-input-text',
      component: () => import('@/views/toggle-input-text')
    },
    {
      path: '/dom-ref',
      component: () => import('@/views/dom-ref')
    },
    {
      path: '/provide-inject',
      component: () => import('@/views/provide-inject')
    },
    {
      path: '/render-function',
      component: () => import('@/views/render-function')
    },
    {
      path: '/vue-three',
      component: () => import('@/views/vue-three'),
      children: [
        {
          path: 'ref',
          component: () => import('@/views/vue-three/ref')
        },
        {
          path: 'reactive',
          component: () => import('@/views/vue-three/reactive')
        },
        {
          path: 'readonly',
          component: () => import('@/views/vue-three/readonly')
        },
        {
          path: 'toRefs',
          component: () => import('@/views/vue-three/toRefs')
        },
        {
          path: 'toRef',
          component: () => import('@/views/vue-three/toRef')
        },
        {
          path: 'context',
          component: () => import('@/views/vue-three/context')
        },
        {
          path: 'case',
          component: () => import('@/views/vue-three/case')
        },
        {
          path: 'computed',
          component: () => import('@/views/vue-three/computed')
        },
        {
          path: 'watch',
          component: () => import('@/views/vue-three/watch')
        },
        {
          path: 'life-cycle',
          component: () => import('@/views/vue-three/life-cycle')
        },
        {
          path: 'provide-inject',
          component: () => import('@/views/vue-three/provide-inject')
        },
        {
          path: 'dom-ref',
          component: () => import('@/views/vue-three/dom-ref')
        }
      ]
    },
    {
      path: '/custom-style',
      component: () => import('@/views/custom-style')
    },
    {
      path: '/guess-number',
      component: () => import('@/views/guess-number')
    },
    {
      path: '/extend/parent',
      component: () => import('@/views/extend/parent')
    },
    {
      path: '/extend/child',
      component: () => import('@/views/extend/child')
    },
    {
      path: '/extend/about',
      component: () => import('@/views/extend/about')
    },
    {
      path: '/render-action',
      component: () => import('@/views/render-action')
    },
    {
      path: '/visual',
      component: () => import('@/views/visual')
    },
    {
      path: '/functional',
      component: () => import('@/views/functional')
    },
    {
      path: '/switch-light',
      component: () => import('@/views/switch-light')
    },
    {
      path: '/switch-light/switch-color',
      component: () => import('@/views/switch-light/switch-color')
    },
    {
      path: '/switch-light/random-color',
      component: () => import('@/views/switch-light/random-color')
    },
    {
      path: '/switch-light/loop-color',
      component: () => import('@/views/switch-light/loop-color')
    },
    {
      path: '/annual-bonus',
      component: () => import('@/views/annual-bonus')
    },
    {
      path: '/gasoline',
      component: () => import('@/views/gasoline')
    },
    {
      path: '/interlace-discolor',
      component: () => import('@/views/interlace-discolor')
    },
    {
      path: '/verify-code',
      component: () => import('@/views/verify-code')
    },
    {
      path: '/old-year',
      component: () => import('@/views/old-year')
    },
    {
      path: '/vue-set',
      component: () => import('@/views/vue-set')
    }
  ]
})

export default router