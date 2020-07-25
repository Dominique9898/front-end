/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-20 10:38:04
 * @LastEditTime: 2020-07-20 17:06:37
 */ 
//add(1)(2)(3)
function add() {
    let args = [].slice.call(arguments);
    let fn = function(){
     let fn_args = [].slice.call(arguments)
     return add.apply(null,args.concat(fn_args))
   }
  fn.toString = function(){
    return args.reduce((a,b)=>a+b)
  }
  return fn
}




console.log((new Date()).toLocaleDateString().replace(/\//g, '-') + '#' + (new Date()).toLocaleTimeString ('chinese', { hour12: false }))