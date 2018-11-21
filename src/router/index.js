import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Edit from '@/components/Edit'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
  	{
		path: '/',
		name: 'home',
		component: Home
	},
    {
		path: '/list',
		name: 'list',
		component: List
	},
	{
		path: '/update/:id',
		name: 'update',
		component: Edit
	},
	{
		path: '*',
		redirect: '/'
	}
  ]
})
