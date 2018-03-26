import Module from "../module/module";

function router(opt) {
  let routers = opt.routers || {}
  let current = null

  return function (context, next) {
    console.log('router middleware dispatched')
    
    let name = context.hash.pathname
    let module = routers[name]
    if(!module) {
      window.location.hash = '#/404'
      return
    }

    if(!(module instanceof Module)) {
      module = new module(opt.routerConfig)
      routers[name] = module
      module.build(context)
    }

    if(module === current) {
      module.refresh(context)
    } else {
      if(current) {
        current.hide()
      }
      current = module
      current.show(context)
    }
  }
}

export default router