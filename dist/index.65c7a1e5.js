let html = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人,
 *接下来，我要练习一些技巧
 *先画个太极图
 *第一步先用div画个圆
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    border-radius:50%;
}
/*
 *接下来，要把这个圆分割阴阳两半
**/
#div1{
    box-shadow:0,0,3px,rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 *加上两个小圆，构造阴阳鱼的轮廓
**/
#div1::before{
    content:'';
    display:block;
    border-radius:50%;
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    position:relative;
    background:#000000;
}
#div1::after{
    content:'';
    display:block;
    border-radius:50%;
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    position:relative;
    background:#ffffff;
}
/*
 *然后填充颜色
**/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
let string2 = '';
//string=string.replace(/\n/g,'<br>');
//replace()方法只会把第一个字符替换,这里要结合正则表达式
//转化得到的<br>标签，在屏幕输出时，会逐个字符输出，而不是作为整体，只有整个标签输出完成后，才会在屏幕上转化为换行
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        string2 += string[n] === '\n' ? '<br>' : string[n];
        //demo.innerHTML=string.substring(0,n); 这句废弃，引进string2实现功能
        //引进string2，用来重新拼接innerHTML的元素，避免<的出现
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n++;
        if (n < string.length) step();
    }, 40);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
