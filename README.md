# Html to Picture
把一个html变成图片

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=html-to-picture"><img src="https://img.shields.io/npm/dm/html-to-picture.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/html-to-picture"><img src="https://img.shields.io/npm/v/html-to-picture.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/html-to-picture/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/html-to-picture.svg" alt="License"></a>
  <a href="https://github.com/hai2007/html-to-picture">
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/html-to-picture?style=social">
    </a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/html-to-picture/issues)，欢迎参与维护！

## How to use?

首先你需要通过命令行安装，就像这样：

```js
npm install --save html-to-picture
```

安装好了以后，引入：

```js
import HtmlToPicture from 'html-to-picture';
```

当然，你也可以使用CDN方式引入：

```html
<script src="https://unpkg.com/html-to-picture"></script>
```

接着，创建对象：

```js
let htmlToPicture = HtmlToPicture(config={
    // 暂无可配置项
});
```

然后，使用：

```js
// 第一个参数可以是html字符串或dom结点
// 如果是dom结点，width和height可以不传递
htmlToPicture(template｜el,width,height).then(base64=>{

});
```

下面是一个简单例子，你可以[点击此处](https://hai2007.github.io/SweetHome/#/editor?file=html-to-picture_demo1)进行查看！

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/html-to-picture/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.github.io/SweetHome/) 走一步，再走一步。
