# route 前端路由规则
resetful 网站的本质是提供资源访问
url和资源的一一对应关系
？queryString1=a&queryString2=b
backend（后端） 来做 路由规则 route
mvc模式 解析url，映射一个route 跟后端脚本对应的controller
/book/123456
fontend（前端） 来接管一切
跟服务器相关性
url => 资源 有缺点 http
href 点击资源 刷新页面 用户体验不ok  PC端时代可以忍受
前端url设计规则

https://m.taobao.com/#index 
https://m.taobao.com/#home

html5 historyAPI 单页应用 点击看似发生在同一页面 提升了用户体验
url 好似切换一张小卡片
整个页面没有动
这就是单页应用 SPA SinglePageApplication
动态更新界面 当你的url启动后 交给ajax
vue？ url => page => 组件