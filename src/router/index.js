import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Articles from '@/components/Articles'
import Topics from '@/components/Topics'
import AboutMe from '@/components/AboutMe'
import TimeLine from '@/components/TimeLine'
import Pictures from '@/components/Pictures'
// const Articles = r => require.ensure([], () => r(require('@/components/Articles.vue')));
// const Topics = r => require.ensure([], () => r(require('@/components/Topics.vue')));
// const AboutMe = r => require.ensure([], () => r(require('@/components/AboutMe.vue')));
// const TimeLine = r => require.ensure([], () => r(require('@/components/TimeLine.vue')));
// const Pictures = r => require.ensure([], () => r(require('@/components/Pictures.vue')));

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: Page,
			component: Page,
			redirect:'/Articles',
			children: [
				{ path: '/Articles', name: 'Articles', component: Articles },
				{ path: '/topics', name: 'Topics', component: Topics },
				{ path: '/aboutMe', name: 'AboutMe', component: AboutMe },
				{ path: '/timeLine', name: 'TimeLine', component: TimeLine },
				{ path: '/pictures', name: 'Pictures', component: Pictures }
			]
		},
	]
})


router.beforeEach((to, from, next) => {
	if (to.name === 'Topics') {
		console.log('进入topics')
	}
	if (from.name === 'Topics') {
		const answer = window.confirm('Do you really want to leave?')
		if (answer) {
			console.log('离开Topics');
		}	
	}
	next()
})


export default router
