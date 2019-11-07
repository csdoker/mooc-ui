import Star from 'base/star/index.js'
import Badge from 'base/badge/index.js'

const components = [
  Star,
  Badge
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Star,
  Badge
}
