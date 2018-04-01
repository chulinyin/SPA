import Module from './module'

class About extends Module {
  build(opt) {
    super.build(opt)
    this._body = document.createElement('div')
    this._body.innerHTML = '这里是关于'
  }

  show(context) {
    super.show(context) 
  }
}

export default About;