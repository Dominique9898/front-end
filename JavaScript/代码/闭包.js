/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 12:17:47
 * @LastEditTime: 2020-03-29 12:52:13
 */

 //闭包 闭包找到的是同一地址中父级函数中对应变量最终的值
function add()
{
    let a = 0;
    return  function plus(){
        a++;
        return a;
    }
}
// var _plus = add();
var _plus = add()    //add()返回的是函数plus()
// var cnt = _plus() //_add返回的是a
for(var i=0;i<10;i++)
{
    _plus()
}
var cnt = _plus();
console.log(cnt)


// var a = 0
// function add()
// {
//     a++;
// }
// add()
// add()
// console.log(a)