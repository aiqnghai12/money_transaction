import {vueTouch}  from './touch.js'
import Vue from 'vue'

Vue.directive("tap", {//
    inserted: function (el, binding) {
      new vueTouch(el,"tap", binding);
    },
  });
     Vue.directive("panstart", {//
   bind: function (el, binding) {    
     new vueTouch(el, "panstart", binding);
   },
 });
    Vue.directive("panmove", {//
   bind: function (el, binding) {    
     new vueTouch(el, "panmove", binding);
   },
 });
 Vue.directive("panend", {//
  bind: function (el, binding) {    
    new vueTouch(el, "panend", binding);
  },
});
   Vue.directive("panleft", {//
  bind: function (el, binding) {    
    new vueTouch(el, "panleft", binding);
  },
});