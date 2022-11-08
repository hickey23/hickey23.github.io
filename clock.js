//导入fs模块
const fs=require('fs')
//导入path
const path=require('path')
//定义正则
// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/

//定义处理css样式的方法
function resolveCSS(htmlStr){
    //使用正则提取
    const reg1=regStyle.exec(htmlStr)
    // console.log(reg1)
    //将提取出的字符串进行replace替换操作
    const newCss=reg1[0].replace('<style>','').replace('</style>','')
    console.log('---------------------------------------')
    console.log(newCss)
    //调用fs.writeFile写入index.css
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,function(error,dataStr){
        if(error){
            return console.log('写入样式文件失败')
        }
        else{
            console.log('写入样式文件成功')
        }

    })
}
//定义处理JavaScript的方法
function resolveJS(htmlStr){
    const reg2=regScript.exec(htmlStr)
    const newJs=reg2[0].replace('<script>','').replace('</script>','')
    console.log(newJs);
    console.log('---------------------------------------')
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJs,function(error,dataStr){
        if(error){
            return console.log('写入JavaScript文件失败')
        }
        else{
            console.log('写入JavaScript文件成功')
        }
    })
}

fs.readFile(path.join(__dirname,'./clock/index.html'),'utf8',function(error,dataStr){
    if(error){
        return console.log('读取文件失败',error);
    }
    
    console.log('---------------------------------------')
    console.log(path.join(__dirname,'./clock/index.html'));
    // console.log('读取文件成功',dataStr);
    resolveCSS(dataStr)
    resolveJS(dataStr)
})

