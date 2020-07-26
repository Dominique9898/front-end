/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-26 14:15:35
 * @LastEditTime: 2020-07-26 14:35:11
 */ 
const chain = () => {
        let tasks=[]
        const fn=()=>{
          obj.next()
        }
        tasks.push(fn)
        
        setTimeout(()=>{
          obj.next()
        },0)

        let obj= {
          next(){
            const f=tasks.shift()
            f && f()
          },
          eat(){
            const fn=()=>{
              console.log('eat')
              this.next()
            }  //eat里的this是obj，因为obj.eat()。要想让fn里的this也是obj，fn就要是箭头函数
            tasks.push(fn)
            return obj
          },
          work(){
            const fn=()=>{
              console.log('work')
              this.next()
            }
            tasks.push(fn)
            return obj
          },
          sleep(time){
            const fn=()=>{
              setTimeout(()=>{
                  console.log('sleep after', time*100)
                this.next()
              },time*100)
            }
            tasks.push(fn)
            return obj
          }
        }
        return obj
}

chain().eat().sleep(5).work().eat()