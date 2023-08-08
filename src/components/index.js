
import svgIcon from './svgIcon.vue';

export default{
  install (app) {
  // 此处形参为main.js文件中use()方法自动传进来的Vue实例
      app.component('svgIcon', svgIcon)
      // 
      // app.component('自定义组件名,最好与组件内的name一致', 组件名)
  }
}