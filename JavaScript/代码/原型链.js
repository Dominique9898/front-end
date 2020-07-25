/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 15:18:05
 * @LastEditTime: 2020-03-29 15:58:54
 */
var arr = []
//console.log(arr.constructor == Array)   //true
//console.log(arr.constructor)    //[Function: Array]

function Person(age,name){
    this.age= age;
    this.name = name;
}
var p = new Person(13,"123")
//console.log(typeof p) //object

console.log(Person.__proto__) //[Function]
console.log(Person.__proto__.toString()) //function () { [native code] }
console.log(Person.prototype) // Person {}
console.log(Person.prototype.__proto__.toString()) // [object Object]
console.log(Person.prototype.toString()) //[object Object]
console.log(Person.prototype.constructor) //[Function: Person]
console.log(Person.prototype.constructor.toString()) 
/*function Person(age,name){
    this.age= age;
    this.name = name;
*/



console.log(p.prototype) //undefined  => 对象没有prototype
console.log(p.__proto__) //Person {}
console.log(p.__proto__.toString()) // [object Object]
console.log(p.__proto__.constructor) //[Function: Person]
console.log(p.__proto__.constructor.toString()) 
/*
function Person(age,name){
    this.age= age;
    this.name = name;
}
 */
console.log(p.constructor)  //[Function: Person]
console.log(p.constructor.toString()) 
/*function Person(age,name){
    this.age= age;
    this.name = name;
}*/
// 由结果可知 p.constructor.toString() = Person.prototype.constructor.toString()