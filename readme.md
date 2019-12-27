# notice-message

基于vue的消息提示组件

## 使用

安装
``` bash
npm install notice-message -S
```

全局应用组件
``` javascript
import NoticeMessage from 'notice-message'
Vue.use(NoticeMessage)
```

使用组件
``` html
 this.$notice_message({
      type:'success',
      time:'10000',
      content: '成功消息主题'
      });
```

组件属性
```
type: success 成功 error失败错误 不填就是默认主题
style:{} 可以传背景和边框样式
time: 时间 弹窗显示时间 不填默认显示两秒 设置为0 则不会自动关闭
content: 传递消息的内容
onClose:回调message参数关闭实例
```

## 效果
![image](https://raw.githubusercontent.com/qq1060844713/notice-message/master/screen.png)

