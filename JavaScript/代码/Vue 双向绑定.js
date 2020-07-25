/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-30 12:04:01
 * @LastEditTime: 2020-06-10 13:50:32
 */ 

    // 依赖收集
// 简化版
var obj = { }
var name
//第一个参数：定义属性的对象。
//第二个参数：要定义或修改的属性的名称。
//第三个参数：将被定义或修改的属性描述符。
Object.defineProperty(obj, "data", {
  //获取值
  get: function () {
    console.log('get:',name)
    return name
  },
  //设置值
  set: function (val) {
    name = val
    console.log('set:',val)
  }
})
//赋值调用set
obj.data = 'aaa'  //set: aaa
//取值调用get
console.log(obj.data)//get: aaa aaa

// 详细版
 myVue.prototype._obverse = function (obj) { // obj = {number: 0}
    var value;
    for (key in obj) {  //遍历obj对象
      if (obj.hasOwnProperty(key)) {
        value = obj[key];
        if (typeof value === 'object') {  //如果值是对象，则递归处理
          this._obverse(value);
        }
        Object.defineProperty(this.$data, key, {  //关键
          enumerable: true,
          configurable: true,
          get: function () {
            console.log(`获取${value}`);
            return value;
          },
          set: function (newVal) {
            console.log(`更新${newVal}`);
            if (value !== newVal) {
              value = newVal;
            }
          }
        })
      }
    }
  }
