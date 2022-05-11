window.addEventListener('load', function () {
    // this.alert('1')
    var ap = this.document.querySelector('.arrow_pre');
    var an = this.document.querySelector('.arrow_next');
    var img = this.document.querySelector('.img_div');
    var image = this.document.querySelector('.image');//获取得是ul
    var imgwidth = img.offsetWidth;
    var n = 0;
    var c = 0;
    console.log(image);
    console.log(img);
    img.addEventListener('mouseenter', function () {
        ap.style.display = 'block';
        an.style.display = 'block';
    })
    img.addEventListener('mouseleave', function () {
        ap.style.display = 'none';
        an.style.display = 'none';
    })

    var img_num = img.querySelector('ul')//这个也是获取ul
    console.log(img_num.children.length);
    console.log(image.children.length);

    var ol = this.document.querySelector('.circle');
    for (i = 0; i < img_num.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);//设置给li属性
        ol.appendChild(li);
        li.addEventListener('click', function () {
            //////////////////////////////////////
            //排他思想
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            // var imgwidth=img.offsetWidth;
            // this指向小li
            var liindex = this.getAttribute('index')
            n = liindex;
            c = liindex;
            console.log(n, c);

            console.log(liindex);
            // 点击小圆圈移动ul
            console.log(imgwidth);
            // 移动的是ul
            animate(image, -liindex * (imgwidth + 10));

        })
    }
    console.log(n, c);
    console.log(ol.children.length);//4
    console.log(ol.children);//4个li
    ol.children[0].className = 'current';
    ///////////////////////////////////////////////////////////
    // 轮播图
    // 克隆第一张图片
    var firstkid = image.children[0].cloneNode(true);
    console.log(firstkid);
    image.appendChild(firstkid);
    /////////////////////////////////////////////////
    //右箭头
    an.addEventListener('click', function () {
        //如果走到最后一张图片此时ul快速复原，left为0
        if (n == image.children.length - 1) {
            image.style.left = 0;
            // image.style.margin.left = 0;
            n = 0;

        }
        n++;//不能用n+1
        animate(image, -n * (imgwidth + 10));
        ///////////////////////////////圆圈跟图片动
        c++;//同n
        if (c == ol.children.length) {
            c = 0;
        }
        console.log(n, c);
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        console.log(c);
        ol.children[c].className = 'current';
    })
    ap.addEventListener('click', function () {
        if (n == 0) {
            image.style.left = [-(image.children.length - 1)] * (imgwidth + 10) + 'px';
            // image.style.margin.left = 0;
            n = image.children.length - 1;

        }
        n--;
        animate(image, -n * (imgwidth + 10));
        c--;
        if (c < 0) {
            c = ol.children.length - 1;//ol是小圆圈
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // console.log(c);
        ol.children[c].className = 'current';
        //////////////////////////////////////////////////////
        function autoshow(n, c) {
            var img = this.document.querySelector('.img_div');
            var image = this.document.querySelector('.image');//获取得是ul
            var imgwidth = img.offsetWidth;
            var ol = this.document.querySelector('.circle');
            //如果走到最后一张图片此时ul快速复原，left为0
            if (n == image.children.length - 1) {
                image.style.left = 0;
                // image.style.margin.left = 0;
                n = 0;

            }
            n++;//不能用n+1
            animate(image, -n * (imgwidth + 10));
            ///////////////////////////////圆圈跟图片动
            c++;//同n
            if (c == ol.children.length) {
                c = 0;
            }
            console.log(n, c);
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[c].className = 'current';
        }
        // var t = window.setInterval(function () {
        //     console.log(11);
        // }, 20)
        

    })
    var t = window.setInterval(function () {
        // console.log(11);
        an.click();
    }, 2000)




})