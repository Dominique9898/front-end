/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-26 14:52:15
 * @LastEditTime: 2020-07-26 14:58:41
 */
const { rejects } = require("assert")

 

const outPut = (url) => {
	return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onload = () => resolve(xhr.responseText)
        xhr.onerror = () => reject(xhr.status)
        xhr.send
    })
}
outPut('www.baidu.com')