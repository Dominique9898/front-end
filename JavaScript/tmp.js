/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-06 11:19:18
 * @LastEditTime: 2020-07-06 11:54:42
 */

var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

// var retrieveX = module.getX;
// retrieveX();   
// // 返回 9 - 因为函数是在全局作用域中调用的

// // 创建一个新函数，把 'this' 绑定到 module 对象
// // 新手可能会将全局变量 x 与 module 的属性 x 混淆
// var boundGetX = retrieveX.bind(module);
// boundGetX(); // 81