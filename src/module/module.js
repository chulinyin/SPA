// 模块基类
class Module {
  constructor(config) {
    this._parent = config.parent
  }

  build(opt) {}

  show(context) {
    if(this._body) {
      this._parent.innerHTML = ''
      this._parent.appendChild(this._body)
    }
  }

  refresh() {}

  hide() {
    // 缓存一下？
    // if(this._body) {
    //   let fragment = document.createDocumentFragment()
    //   fragment.appendChild(this._body)
    // }
  }
}

export default Module