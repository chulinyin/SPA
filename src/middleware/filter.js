import Filter from '../filter/filter'

let filters = []

let filter = {
  add(ft) {
    if(ft instanceof Array) {
      ft.forEach(it => {
        filters.push(it)
      })
      return
    }
    filters.push(ft)
  },
  mw(context, next) {
    console.log('filter middleware dispatched')
    
    let index = 0;
    let chain = () => {
      let Filter = filters[index++]
      if(Filter) {
        let ft = new Filter(context, next, chain)
        ft.doFilter()
      }
    }
    chain()
  }
}

export default filter