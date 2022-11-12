//这里是用es6语法复习

const { type } = require("os");
const { resolve } = require("path");

//对象的解构赋值
const zhao={
    Name:'赵本山',
    age:23,
    xiaopin:function(){
        console.log('我可以演小品');
    }
}

const {Name,age,xiaopin}=zhao;
console.log(Name);
console.log(age);                                                                                   
// console.log(xiaopin);
xiaopin();



//模板字符串
const str=`我是一个字符串！`
console.log(str,typeof(str));      
const str1=`<ul><li>刘炅</li><li>小熊</li></ul>`
console.log(str1);


///字符串拼接
const str2='我最爱'
const str3='可乐'
console.log(`${str2}的${str3}是一个饮料`);


//es6允许给函数传默认值参数
//形参初始值，具有默认值的参数，一般位置要靠后
function func(a,b,c=10){
    return a+b+c
}
//默认c=10
console.log(func(1,2));

//对象的解构赋值
connect({
    host:'127.0.0.1',
    user:'root',
    password:'admin',
    port:3308,
})
function connect({host,user,password,port}){
    console.log(host);
    console.log(user);
    console.log(password);
    console.log(port);
}

console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');

//es5获取实参的方式
function data(){
    console.log(arguments);
}
data('abc','mnd','pop')//获取的是对象
/////////////////////////////////////////////////////////////////////////

//es6中的rest参数
function data1(...args){
    console.log(args);
}
data1(1,2,3)//获取的是数组

console.log('-----------------------');

//[...]扩展运算符可以将数组转换为逗号分隔的参数序列
const arr=['liujiong','xiaoxiong','xiaoliu']
function func(){
    console.log(arguments);
}
func(arr)//[Arguments] { '0': [ 'liujiong', 'xiaoxiong', 'xiaoliu' ] } 
func(...arr)//{ '0': 'liujiong', '1': 'xiaoxiong', '2': 'xiaoliu' }
console.log('...arr:',...arr);

//数组的合并
const array1=['a','b']
const array2=['liu','xiong']
console.log(array1.concat(array2));//[ 'a', 'b', 'liu', 'xiong' ]
console.log([...array1,...array2]);//[ 'a', 'b', 'liu', 'xiong' ]

console.log('---------------------------');


//数组的克隆
console.log([...array1]);//[ 'a', 'b']克隆了array1


//es6中的symbol数据类型
// 1)Symbol的值是唯一的，用来解决命名冲突的问题
//2)Symbol值不能与其他数据进行运算
// 3)Symbol定义的对象属性不能使用for...in循环遍历，但是可以使用
// Reflect.ownKeys来获取对象的所有键名
let s=Symbol()
console.log(typeof(s));
let s1=Symbol('atguigu')
let s2=Symbol('atguigu')
console.log(s2==s1);//false

let s3=Symbol.for('kk')
let s4=Symbol.for('kk')
console.log(s3==s4);//true


//for of遍历数组
const xiyou=['小米','华为','苹果']
for(let value of xiyou){
    console.log(value);//打印的是键值
}
//for in遍历数组
for(let index in xiyou){
    console.log(index);//打印的是索引
}


/////打印出对象里面的数组stu
//打印出对象里面的数组stu
console.log('-------------------');
const CLASS={
    name:'一班',
    stu:['xiaoming','xiaotian','xiaohong','xiaohu'],
    //要遍历CLASS中的stu，需要构造一个迭代器
    [Symbol.iterator](){
        let index=0
        return{
            next:()=>{
                if(index<this.stu.length){
                    const results= {value:this.stu[index],done:false}
                    index++
                    return results

                }
                else{
                    return{value:undefined,done:true}
                }
            }
        }
    }
}
//打印出对象里面的数组stu
for (let value of CLASS){
    console.log(value);
}
///////////////////////////////////////
console.log('------------------------------');


///生成器是一个特殊的函数
//异步编程，纯回调函数
function * generator(){
    console.log('hello generator');
    console.log('888');
}
let iterator=generator()
iterator.next()//这样可以执行函数里面的语句

console.log('------------------------------');


///生成器函数传参数
function * gen(args){
    console.log(args);
    let one=yield 111;
    console.log('@one:',one);
    yield 222;
    yield 333;
}
//执行获取迭代器对象
let iterator1=gen('aaa')
//.next()方法会返回yield语句后面的自变量的值
console.log(iterator1.next());
console.log(iterator1.next('bbb'));//这里(第二次调next)用next方法传入实参，将作为第一个yield 111语句返回结果

console.log('-------------------------------');


/////////////////////
//生成器实例
// yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。
// 它可以被认为是一个基于生成器的版本的return关键字。
// yield关键字实际返回一个IteratorResult（迭代器）对象，
// 它有两个属性，value和done，分别代表返回值和是否完成。
// yield无法单独工作，需要配合generator(生成器)的其他函数，
// 如next，懒汉式操作，展现强大的主动控制特性
function getUser(){
    setTimeout(()=>{
        let data='用户数据'
        iterator2.next(data)
    },1000)
}
function getOrder(){
    setTimeout(()=>{
        let data='订单数据'
        iterator2.next(data)

    },1000)
}
function getGoods(){
    setTimeout(()=>{
        let data='商品数据'
        iterator2.next(data)
    },1000)
}

function * gen1(){
    const user=yield getUser()
    console.log('user:',user);

    const order=yield getOrder()
    console.log('order:',order);

    const goods=yield getGoods()
    console.log('goods:',goods);

}
//调用生成器函数
let iterator2=gen1()
iterator2.next()

console.log('----------------------------------');
//promise
// const pro=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // let data='获取数据库中的数据成功'
//         //调resolve函数可以修改promise对象为成功，
//         // resolve(data) //如果成功
//         let err='获取数据库中的数据失败'
//         //如果失败
//         reject(err)

//     },4000)
//     //成功后调用promise的then方法，处理成功或失败后的结果
//     //成功的形参叫value，失败的叫reason

// })
// pro.then((value)=>{
//     console.log(value);
// },(reason)=>{
//     console.log(reason);
// })


//promise对象的then方法
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let data='用户数据获取成功'
        resolve(data)
    },4000)
})

//调用then方法，then方法的返回结果是promise对象，对象状态由回调函数的执行结果决定
//1.如果回调函数中返回的结果是非promise类型的属性，状态成功，返回值为对象的成功的值，也就是resolve（）里面的值
promise.then((value)=>{
    console.log('value:',value);
    return 123
},(reason)=>{
    console.error('reason:',reason);
})//这里then方法可以指定两个回调函数，一个处理正确，一个处理错误


//也可以用catch()
promise.catch((err)=>{
    console.log(err);
})



//集合，es6中的集合会去掉重复的
let ss=new Set(['1','2','3','1'])//不是数组，是集合
console.log(ss);//Set(3) { '1', '2', '3' }
console.log('ss元素的个数:',ss.size);
//添加元素
// console.log(ss.add('4'));
//删除元素
// console.log(ss.delete('4'));
//清空
// console.log(ss.clear());



var array3=[2,3,4,5,6,7,8,6]
//1。数组去重
var set=[...new Set(array3)]
console.log('去重后的数组:',set);
//2.交集
var array4=[1,2,3,4]
var ARRAY=[]
for(let i=0;i<array3.length;i++){
    for(let j=0;j<array4.length;j++){
        if(array3[i]==array4[j]){
            ARRAY.push(array3[i])
        }
    }
}
console.log('ARRAY:',ARRAY);
//3.并集
var union=[...new Set([...array3,...array4])]
console.log('并集后的数组：',union);
//并集
// Array.union = function () {
//     var arr = new Array();
//     var obj = {};
//     for (var i = 0; i < arguments.length; i++) {
//       for (var j = 0; j < arguments[i].length; j++)
//       {
//         var str=arguments[i][j];
//         if (!obj[str])
//         {
//           obj[str] = 1;
//           arr.push(str);
//         }
//       }//end for j
//     }//end for i
//     return arr;
//   }


//map介绍：他类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型值都可以当键
//声明map
let m=new Map()
//添加元素，第一个是键，第二个是值
m.set('name','atguigu')
m.set('change',function(){
    console.log('change you!');
})



//声明一个对象key
let key={
    school:'liujiong'
}//这个是键
m.set(key,['北京','上海','武汉'])//这个是上面key对应的值
console.log(m);


/////////////////////////////////////////////////

//es5的构造类方法
function phone(brand,price){
    this.brand=brand;
    this.price=price;
}
//添加方法
phone.prototype.call=function(){
    console.log('我可以打电话');
}

//实例化对象
let huawei=new phone('huawei',999)
console.log('huawei:',huawei);




//class中的静态属性
//class中的静态属性是属于类的，不属于实例对象，所以实例对象使用是undefined
class Student{
    static name='小明';
    static print(){
        console.log('我是二班小明');
    }
}
let xm=new Student()
console.log(xm.print);//undefined
console.log(xm.name);//undefined

//******************************************************** */
//es6的class构造类
class Phone{
    constructor(brand,price){
        this.brand=brand
        this.price=price
    }
    //方法必须使用该语法
    makeCall(){
        console.log('我可以打电话');
    }
}
let iphone=new Phone('iphone',9999)
console.log(iphone);
////class的继承
class SmartPhone extends Phone{
    //构造方法
    constructor(brand,price,color,size){
        //调父类的构造方法来初始化
        //super就是父类的constructor方法，相当于继承了父类的属性
        super(brand,price)
        this.color=color
        this.size=size
    }
    photo(){
        console.log('我可以拍照');
    }
    game(){
        console.log('我可以打游戏');
    }
    makeCall(){
        console.log('我既可以打电话也可以打视频');
    }
    get surf(){
        console.log('我可以上网');
        return 'surfing the Intelnet'
    }
    set surf(value){
        //surf属性被修改时，会调用这个函数语句
        console.log('surf属性被修改了');

    }
}
//子类对父类方法重写
const xiaomi=new SmartPhone('小米',2999,'red',64)
console.log(xiaomi);
xiaomi.makeCall()
xiaomi.game()
xiaomi.photo()
//这里是surf就不是方法了，是属性,并且这里的get price返回值就是属性的值
console.log(xiaomi.surf)
console.log(xiaomi.surf='free')

//babel能够将比较新的es6语法转化为es5语法，提高兼容性
const mingzhu=['三国','水浒','红楼梦','西游']
console.log(mingzhu.includes('三国'));
console.log(2**3);//8
console.log(Math.pow(2,3));//8




//async函数
async function func(){
    // return 'atguigu'
    //返回的结果不是一个promise对象，那么返回的结果就是一个成功promise对象,fulfilled
    //return 
    //跑出错误,返回的结果是一个失败的promise
    // throw new Error('出错了')
    
    //返回的结果是一个promise对象
    return new Promise((resolve,reject)=>{
        resolve('获取数据成功')//调resolve后，这个对象会变成一个成功的promise
    })
}
//promise函数返回：
//true:非promise对象，false：promise对象，或者throw error（返回的也是一个promise对象）

console.log(func());//Promise { 'atguigu' }返回一个promise对象


// 4.1.2.await表达式
// 1. await必须写在 async函数中
// 2. await右侧的表达式一般为promise对象
// 3. await返回的是promise成功的值
// 4. await的 promise失败了，就会抛出异常，需要通过try...catch 捕获处理
const P1=new Promise((resolve,reject)=>{
    resolve('promise返回数据成功')
})
async function getData(){
    let results=await P1
    console.log(results);
}
getData()

//失败的时候
const P2=new Promise((resolve,reject)=>{
    reject('promise返回数据失败了')
})
async function getError(){
    try{
        let results=await P2
        console.log(results);
    }catch(err){
        console.log('error:',err);
    }
}
getError()

////////////////////////////////////////////
//es8对象扩展方法
const school={
    name:'atguigu',
    city:['武汉','长沙','成都','重庆'],
    subject:['web','java','c#','c++']
}
//获取对象所有的键
console.log(Object.keys(school));//[ 'name', 'city', 'subject' ]
//获取对象所有的值
console.log(Object.values(school));
// [
//     'atguigu',
//     [ '武汉', '长沙', '成都', '重庆' ],
//     [ 'web', 'java', 'c#', 'c++' ]
// ]

//Object.entries方便创建一个map，字典
console.log(Object.entries(school));
// [
//     [ 'name', 'atguigu' ],
//     [ 'city', [ '武汉', '长沙', '成都', '重庆' ] ],
//     [ 'subject', [ 'web', 'java', 'c#', 'c++' ] ]
// ]
console.log('-----------------------------------');
const map=new Map(Object.entries(school))
console.log('map:',map);
// map: Map(3) {
//     'name' => 'atguigu',
//     'city' => [ '武汉', '长沙', '成都', '重庆' ],
//     'subject' => [ 'web', 'java', 'c#', 'c++' ]
// }

