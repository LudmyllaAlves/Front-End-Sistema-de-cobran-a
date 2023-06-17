import { createRouter, createWebHistory } from 'vue-router'
import HomeAdmin from '../views/HomeAdmin'

const routes = [
  {
    path: '/homeadmin',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/homecobrador',
    name: 'HomeCobrador',
    component: function () {
      return import('../views/HomeFunc.vue')
    }
  },

  {
    path: '/cadastrarfuncionario',
    name: 'CadastrarFuncionario',
    component: function () {
      return import('../views/CadastrarFuncionario.vue')
    }
  },
  {
    path: '/planejarcobranca',
    name: 'PlanejarCobranca',
    component: function () {
      return import('../views/PlanejarCobranca.vue')
    }
  },
  {
    path: '/cobrancasefetuadas',
    name: 'CobrancasEfetuadas',
    component: function () {
      return import('../views/CobrancasEfetuadas.vue')
    }
  },
  {
    path: '/realizarcobranca',
    name: 'RealizarCobranca',
    component: function () {
      return import('../views/RealizarCobranca.vue')
    }
  },

  {
    path: '/',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },

  {
    path: '/importarclientes',
    name: 'ImportarClientes',
    component: function () {
      return import('../views/ImportarClientes.vue')
    }
  },
  {
    path: '/importarcompras',
    name: 'ImportarCompras',
    component: function () {
      return import('../views/ImportarCompras.vue')
    }
  },
  {
    path: '/cobrancasavulsas',
    name: 'CobrancasAvulsas',
    component: function () {
      return import('../views/CobrancaAvulsa.vue')
    }
  },
  {
    path: '/realizarcobrancasplanejadas',
    name: 'RealizarCobrancasPlanejadas',
    component: function () {
      return import('../views/RealizarCobrancasPlanejadas.vue')
    }
  },
  {
    path: '/teste1',
    name: 'Teste1',
    component: function () {
      return import('../views/teste1.vue')
    }
  },
  {
    path: '/gerenciarcobs',
    name: 'GerenciarCobranca',
    component: function () {
      return import('../views/GerenciarCobrancas.vue')
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
