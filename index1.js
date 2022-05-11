//倒计时效果
//1.核心算法:输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减，比如05分减去25分，结果会是负数的。
//2.用时间戳来做。用户输入时间总的亳秒数减去现在时间的总的亳秒数，得到的就是剩余时间的亳秒数。
// 3.把剩余时间总的毫秒数转换为天、时、分、秒(时间戳转换为时分秒)
//转换公式如下:
//d = parseInt(总秒数/ 60/60 /24);
// 计算天数
//h = parseInt(总秒数/ 60/60 %24)
//计算小时
//m = parseInt(总秒数/60 %60 );
// 计算分数
//s = parseInt(总秒数%60);
//计算当前秒数
function animate(obj,target,callback){
    clearInterval(obj.time);
    obj.time=setInterval(function(){
        // var step=Math.ceil((target-obj.offsetLeft)/10);
        //math.ceil是向上取整，比如8.1取整是9
        var step=(target-obj.offsetLeft)/10
        // step>0 ? Math.ceil(step) : Math.floor(step);
        if(step>0){
            step=Math.ceil(step);
        }
        else{
            step=Math.floor(step);
        }
        if(obj.offsetLeft==target){
            clearInterval(obj.time);
            if(callback){
                console.log(callback);
                callback();//函数调用必须加（）
                //callback是回调函数
            }
        }
        // console.log(obj.offsetLeft);
        obj.style.left=obj.offsetLeft+step+'px';
        //offset是相对有定位的父级元素
    },10);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function countDown(time) {
    // 返回当前时间总的毫秒数
    var nowTime = +new Date();
    // console.log(nowTime);
    var inputtime = +new Date(time);
    var lefttimes = inputtime - nowTime;
    lefttimes = lefttimes / 1000; //换算成秒
    var day = parseInt(lefttimes / 60 / 60 / 24);
    var hour = parseInt(lefttimes / 60 / 60 % 24);
    var minute = parseInt(lefttimes / 60 % 60);
    var second = parseInt(lefttimes % 60);
    if (day < 10) {
        day = '0' + day;
    } else {
        day = day;
    }
    if (hour < 10) {
        hour = '0' + hour;
    } else {
        hour = hour;
        // hour =hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    } else {
        minute = minute;
    }
    if (second < 10) {
        second = '0' + second;
    } else {
        second = second;
    }
    f = day + '天' + hour + '时' + minute + '分' + second + '秒';
    return f;

}
console.log(countDown('2022-3-26 22:00:00'));
var d = new Date();
console.log(d);





//************************************************************* */
// *****************************************************************
// ********************************************************************
// ********************************************************************
// ********************************************************************

// 创建数组
var arr1 = new Array(); //创建一个空的数组
var arr2 = new Array(2); //创建一个里面含有两个未定义的元素的数组
var arr3 = new Array(2, 2, 22, 2, 2, 2, 99);
console.log(arr1, arr2, arr3);

//x+instanceof Array判断x是否为数组
//Array.isArray()也是判断是否为数组
console.log(arr1 instanceof Array);
console.log(Array.isArray(arr2));

// push在数组末尾添加元素
//unshift在前面添加元素,两者返回的值都是新数组的长度
arr1.push(43, 'pink', 'liujiong')
console.log(arr1);
// console.log();

//pop删除数组的最后一个元素，返回的是删除的元素
//shift删除数组的第一个元素,返回的是删除的元素
console.log(arr3.pop());
console.log(arr3);

//sort只能排序0-9,但可以通过入下方法实现sort排序如何数组中的元素
var a = [1, 22, 43, 55, 901, 2, 334, 8];
a.sort(function(a, b) {
    return a - b; //升序排列（从小到大）
    //return b-a;就是降序排序（从大到小）
})
console.log(a);
console.log(a.indexOf('55')); //返回数组中元素的索引,只返回第一个满足条件的索引号，如果找不到返回-1




//******************************************** */
//******************************************** */
//******************************************** */
//******************************************** */
// 数组转化为字符串toString(),默认以逗号分隔
var a0 = new Array(1, 1, 2);
console.log(a0.toString)

// 2. join( 分隔符),可以用其他分隔符
var a1 = new Array('blue', 'pink', 'red');
console.log(a1.join('&'));



//******************************************** */
//******************************************** */
// 6.2字符串的不可变
// 指的是里面的值不可变,虽然看上去可以改变内容,但其实是地址变了,内存中新开辟了一个内存空间。
// //当重新给str赋值的时候，常量'abc '不会被修改，依然在内存中
// //重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// //由于字符串的不可变，在大量拼接字符串的时候会有效率问题
// var str = 'abc' ;
// str = 'hello' ;
// var str = '';
// for(vari=0;i<100000;i++){
//     str += i;
// }
// console.log(str); //这个结果需要花费大量时间来显示，因为需要不断的开辟新的空间




//******************************************** */
//******************************************** */
//******************************************** */
//******************************************** */
//******************************************** */
//******************************************** */
// str. indexOf('要查找的字符'，[ 起始的位置])
// String.lastindexOf('要查找的字符'，[ 起始的位置])   ---从后面开始查找

// 1. charAt(index) 根据位置返回字符
var str = 'Tommy';
var num = 0;
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
// var str1 = [];
// substring(start, end)
// 从start位置开始，截取到end位置，end取不到基本和slice 相同但是不接受负值
// 替换字符replace(' 被替换的字符'，' 替换为的字符')它只会替换第一个字符
console.log(str.replace('T', 'J')); //Jommy


//************************************************** */
//************************************************** */
//************************************************** */
//************************************************** */
var str = 'Tommy';
for (var j = 0; j < str.length; j++) {
    if (str.charAt(j) == 'm') {
        // var str1 = str.replace('m', '*');
        // num++;
        var str1 = str.replace('m', '*');
        console.log(str1);
        for (var k = 0; k < str1.length; k++) {
            var str2 = str1.replace('m', '*');
        }
    }
}
console.log(str2);
// /1.如果有个变量我们以后打算存储为对象，暂时没想好放啥， 这个时候就给null
// // 1.简单数据类型是存放在栈里面里面直接开辟个空间存放的是值
// //2.复杂数据类型首先在栈里面存放地址t六进制表示然后这个地址指向堆里面的数据