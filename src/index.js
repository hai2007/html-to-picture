let HtmlToPicture = function (config) {

    return function (html, width, height) {

        let img = document.createElement('img');

        img.setAttribute('width', width);
        img.setAttribute('height', height);
        img.setAttribute('src', `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='${width}' height='${height}' ><body xmlns='http://www.w3.org/1999/xhtml'>${html}</body></foreignObject></svg>`);

        document.getElementsByTagName('body')[0].appendChild(img);

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                // 准备画布
                let canvas = document.createElement('canvas');
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);

                let painter = canvas.getContext('2d');

                // 绘制
                painter.drawImage(img, 0, 0);

                img.parentNode.removeChild(img);

                resolve(canvas.toDataURL());
            }, 100);

        });

    };

};

// 判断当前环境，如果不是浏览器环境
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = HtmlToPicture;
}
// 浏览器环境下
else {
    window.HtmlToPicture = HtmlToPicture;
}
