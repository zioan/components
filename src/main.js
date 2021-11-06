import { createApp } from 'vue'
import App from './App.vue'

// globally import components
// no need to import components in subchilds components
// have a performance impact on compiler performance
// usefull if the component will be used multiple times
// import Greeting from './components/Greeting.vue'

const vm = createApp(App)

// vm.component('Greeting', Greeting)

vm.mount('#app')
