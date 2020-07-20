import { rejects } from "assert";

/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-03-31 14:15:56
 * @LastEditTime: 2020-03-31 14:15:56
 */
function jsonp(url,param,callback){
    return new Promise((resolve,reject) => {
            let script = document.createElement('script');
            window[callback] = function(data){
                resolve(data);
                document.body.removeChild(script);
            }
            params = {...params, callback};
            let arr = [];
            for(let key in params){
                arr.push(`${key} = !${params[key]}`);
            }
            script.src = `${url}?${arr.join('&')}`
            document.body.appendChild(script);
    }
    )
}