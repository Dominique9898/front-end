let data = {
    name: 'zs',
    age: 18,
    like: {
      walk: 'walk',
    }
  }; 



class Dep {
    constructor() {
        this.subs = [];
    }
    add(sub) {
        this.subs.push(sub);
    }
    notify() {
        this.subs.map((sub) => {
            sub.update();
        })
    }
}
Dep.target = null;
class Watcher {
    constructor(obj, key, cb) {
        this.obj = obj;
        this.key = key;
        this.cb = cb;
        this.val = this.get();
    }
    get() {
        Dep.target = this;
        const newVal = this.obj[this.key];
        Dep.target = null;
        return newVal;
    }
    update() {
        this.val = this.get();
        this.cb && this.cb(this.val);
    }
}
// new Observer(obj)
class Observer {    // 需要观察obj
    constructor(obj) {
        this.walk(obj);
    }
    walk(obj) {
        const keys = Object.keys(obj);
        keys.map((key) => {
            this.defineReactive(obj, key, obj[key]);
        })
    }
    observer(value) {
        if(typeof value === 'object') {
            return new Observer(value);
        }
    }
    defineReactive(obj, key, val) {
        const property = Object.getOwnPropertyDescriptor(obj, key);
        if(!property.configurable) return;
        const setter = property && property.set;
        const depth = new Dep();
        let childObj = this.observer(val); 
        const self = this;
        Object.defineProperty(obj, key, {
            get: function() {
                // 说明是watcher来调用的 
               if(Dep.target) {
                    depth.add(Dep.target);
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                if (setter) {
                    setter.call(obj, newVal);
                } else {
                   val = newVal;
               }
                childObj = self.observer(newVal);
                depth.notify();
            }
        });
    }}

    let testObj = {
        a: {
            b: 'fafa'
        }}
    new Observer(testObj)
    new Watcher(testObj, 'a', () => {
        console.log('testObj.a 我监听到你改变啦:', testObj.a)
    });
    new Watcher(testObj.a, 'b', () => {
        console.log('testObj.a.b 我监听到你改变啦:', testObj.a.b)
    });
    testObj.a.b = 12331122;
    testObj.a = 1