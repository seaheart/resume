import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  projectsWX: string[] = ['公众号：拉米铺开店选址专家','背景：此微信开发目的在于引流客户到APP上。','任务：本人独立负责微信服务号菜单中嵌套html5页面的开发。','实施：首先对需求进行分析然后查阅API来得到相关需求的解决办法，再将自己的想法实施 出来，开发涉及了微信获取用户定位等相关功能的实现，echarts图表的使用，高德地图的 使用，ajax数据的渲染。','收获：在实施项目的过程中对微信开发项目整体的流程有了全面的了解，对高德地图、echarts图表运用更加熟练，增加了自己移动端开发的经验。'];

  projectsWEB: string[] = ['网址：http://www.lamipu.com/','背景：公司需要开发一个叫拉米铺的产品来帮助用户或企业完成商品选址功能。','任务：独立负责前端全部网页的设计开发和一部分配合Android端的webView的开发以及与后端进行数据交互工作。','实施：使用的开发工具为webstrom，网站使用Html5与Css3开发，类库用jQuery与Bootstrap，开发图表插件使用的是echarts插件，表格插件使用bootstrap-table插件，地图使用的是高德地图组件。前期采集需分析求然后设计网站布局的样式进而实施公司的网页，还根据H+模板开发后台管理系统，多用到bootstrap-table插件；根据百度UEditor开发出公司新媒体运营内部文章编辑系统；负责数据与服务器的交互与客户端渲染以及json文件的编写。','收获：为期一年的项目让我对项目流程更加熟练，并且能够独立完成前端整体项目的开发工作，对常用的插件进行封装使用更加熟练，对响应式布局也更加熟练，对http协议、跨域等问题有了深刻的认识。']
  constructor() { }

  ngOnInit() {
  }

}
