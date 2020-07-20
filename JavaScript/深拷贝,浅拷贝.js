/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 20:21:41
 * @LastEditTime: 2020-03-29 21:12:01
 */
// 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。

//  slice() concat()  不拷贝对象时是深拷贝,否则是浅拷贝   JSON.stringify 不能深拷贝函数.
// var arr = ['old', 1, true, null, undefined];
// var  a = arr.concat()
// a[0] = 'new'
// var b = arr.slice();
// console.log(a); //[ 'new', 1, true, null, undefined ]
// console.log(arr); //[ 'old', 1, true, null, undefined ]


// 当遇到数组存在对象的时候,浅拷贝内的属性无法完全拷贝.
// var arr = [{old: 'old'}, ['old','oooo']];
// var new_arr = arr.concat();
// arr[0].old = 'new';
// console.log(arr) // [ { old: 'new' }, [ 'old', 'oooo' ] ]
// console.log(new_arr) // [ { old: 'new' }, [ 'old', 'oooo' ] ]
//  旧数组改变,新数组也跟着改变 也就是说使用 concat slice 方法，克隆的并不彻底 concat 和 slice 是一种浅拷贝。

/**  深拷贝 */
// - JSON.parse   可以拷贝数组和对象 但不能拷贝函数
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var new_arr = JSON.parse( JSON.stringify(arr) );
arr[3][0]='old3';
console.log(arr);      //[ 'old', 1, true, [ 'old3', 'old2' ], { old: 1 } ]
console.log(new_arr); //[ 'old', 1, true, [ 'old1', 'old2' ], { old: 1 } ]
arr[4].old = 2;
console.log(arr);      //[ 'old', 1, true, [ 'old3', 'old2' ], { old: 2 } ]
console.log(new_arr); //[ 'old', 1, true, [ 'old1', 'old2' ], { old: 1 } ]
//不能拷贝函数
var f = [function(){console.log(a)},{b:function(){console.log(b)}}]
var new_arr = JSON.parse(JSON.stringify(f));
console.log(new_arr) //[ null, {} ]