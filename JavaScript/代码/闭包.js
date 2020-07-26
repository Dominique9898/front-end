/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-29 12:17:47
 * @LastEditTime: 2020-07-25 15:21:38
 */

function User () {
    let username, password
    
    function login (user, pwd) {
        username = user
        password = pwd
        console.log ('登录成功')
    }

    return obj = {
        login: login
    }
}

var p1 = new User()
p1.login(123, 456)
console.log(p1.username);