import Hammer from 'hammerjs'
function vueTouch(el, type, binding) {  // 方法实例，传入 对象 事件 事件函数
    this.el = el;    
    this.type = type;
    this.binding = binding;
    var hammertime = new Hammer(this.el);
    hammertime.on(this.type, this.binding.value);
  }
  export {vueTouch}