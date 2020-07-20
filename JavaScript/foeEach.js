/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 21:30:42
 * @LastEditTime: 2020-04-04 13:28:09
 */


Array.prototype.newForEach = function(callblack){

    for(let i=0;i<this.length;i++){
        let item = this[i];
        let index = i;
        let obj = this;
        callblack(item,index,obj)
    }
}

obj = [1,2,3,4,5]
obj.newForEach((item,index,obj) => console.log(item,index,obj))

Array.prototype.myForEach = function(callblack){
    let _this = this;
    let res = [];
    for(let i = 0 ; i < this.length;i++){
       var val = {};
       val.item = this[i];
       val.index = i;
       val.obj = this;
       res.push(val)
    }
    return res;
}
obj = [1,2,3,4,5]
obj.newForEach((item,index,obj) => console.log(item,index,obj))