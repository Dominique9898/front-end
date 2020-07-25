/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 17:46:53
 * @LastEditTime: 2020-03-29 18:10:28
 */


/* 箭头函数不绑定arguments，取而代之用rest参数...解决*/
function A(a){
  console.log(arguments);
}
A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// let B = (b)=>{
//   console.log(arguments);
// }
// B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined

let C = (...rext) => {
  console.log(rext);
}
C(3,82,32,11323);  // [3, 82, 32, 11323]

/* 箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值*/
var obj = {
    a: 10,
    d:()=>{
        console.log(this);//{}
        console.log(this.a);//undefined
    },
    b: function(){
      console.log(this.a); //10
    },
    c: function() {
       return ()=>{
             console.log(this.a); //10
             console.log(this); //{ a: 10, b: [Function: b], c: [Function: c], d: [Function: d] }
       }
    }
    
  }
  obj.b(); 
  obj.c()();
  obj.d();

//箭头函数没有原型属性
var a = ()=>{
    return 1;
  }
  
  function b(){
    return 2;
  }
  console.log(a.prototype);  // undefined
  console.log(b.prototype);   // {constructor: ƒ} == b {}

//箭头函数通过 call()  或   apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响。
let obj2 = {
    a: 10,
    b: function(n) {
        let f = (n) => n + this.a;
        return f(n);
    },
    c: function(n) {
        let f = (n) => n + this.a;
        let m = {
            a: 20
        };
        return f.call(m,n);
    }
};
console.log(obj2.b(1));  // 11
console.log(obj2.c(1)); // 11