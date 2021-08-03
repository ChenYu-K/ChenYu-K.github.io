const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('body_end', '<script type="text/javascript" src="http://libs.baidu.com/jquery/1.8.3/jquery.js"></script>',);
hexo.extend.injector.register('body_end', '<script type="text/javascript" src="http://libs.baidu.com/jquery/1.8.3/jquery.min.js"></script>',);
hexo.extend.injector.register('body_end', '<script type="text/javascript" src="/js/src/snow.js"></script>',);
hexo.extend.injector.register('body_end', '<canvas class="fireworks" style= "position: fixed; left:0; top: 0; z-index: 1; pointer-events: none;"></canvas>',);
hexo.extend.injector.register('body_end', '<script type="text/javascript" src="//cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script>',);
hexo.extend.injector.register('body_end', '<script type="text/javascript" src="/js/src/fireworks.js"></script>',);