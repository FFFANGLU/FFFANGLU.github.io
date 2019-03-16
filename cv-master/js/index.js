$(function(){
    hashChangeFire();
    //监听触发操作
    function hashChangeFire() {
        $(".animated").removeClass("fadeInUp");
        $(".animated").addClass("fadeInUp");
        setTimeout(function(){
            $(".animated").removeClass("fadeInUp");
        },800);
        $(".animated-bounce").removeClass("bounce");
        var t = 0;
        var timer = null;
        timer = setInterval(function () {
            $(".animated-bounce").eq(t).addClass("bounce");
            t++;
            if (t===20) {
                $(".animated-bounce").removeClass("bounce");
                clearInterval(timer);
            }
        },200)
    }
    //url变化监听器
    if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
        // 浏览器支持onhashchange事件
        window.onhashchange = hashChangeFire; // TODO，对应新的hash执行的操作函数
    } else {
        // 不支持则用定时器检测的办法
        setInterval(function () {
            // 检测hash值或其中某一段是否更改的函数， 在低版本的iE浏览器中通过window.location.hash取出的指和其它的浏览器不同，要注意
            var ischanged = isHashChanged();
            if (ischanged) {
                hashChangeFire(); // TODO，对应新的hash执行的操作函数
            }
        }, 150);
    }
    // More info https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: false,
        progress: true,
        history: true,
        mouseWheel: true,
        loop:true,
        transition: 'concave',
        backgroundTransition: 'concave',
        dependencies: [{
            src: 'lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        },
        {
            src: 'plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'plugin/highlight/highlight.js',
            async: true,
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        },
        {
            src: 'plugin/search/search.js',
            async: true
        },
        {
            src: 'plugin/zoom-js/zoom.js',
            async: true
        },
        {
            src: 'plugin/notes/notes.js',
            async: true
        }
        ]
    });
});