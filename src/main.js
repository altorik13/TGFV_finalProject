import App from './App.svelte'
import './App.svelte'

const app = new App({
	target: document.body,
	props: {
		activePage: 'Gallery',
	},
})

window.app = app

export default app
