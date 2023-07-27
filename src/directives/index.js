import permission from './modules/permission'

const directivesList = {
  permission,
}

const directives = {
  install(app) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key])
    })
  },
}

export default directives
