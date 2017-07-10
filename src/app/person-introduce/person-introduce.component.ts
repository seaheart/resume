import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-introduce',
  templateUrl: './person-introduce.component.html',
  styleUrls: ['./person-introduce.component.css']
})
export class PersonIntroduceComponent implements OnInit {

  personalIntroduce:string[] = ['本人在校成绩优秀，一直以来都在班上前三名的成绩，学习能力强，思维敏捷，做事有条理，踏实肯干，前端开发有两年以上经验，并有一年以上的全职工作经验。','熟悉W3C标准，对html语义化等有理解较深，熟练掌握Html5、Css3、JavaScript、JQuery，熟悉Git，Angular4，Typescript','熟练掌握相关的插件（如bootstrap、flat-ui、echarts、bootstrap-table、chart.js、高德组件等）','对插件学习兴趣浓，上手快，会对插件进行一些再封装','对新技术比较渴求，渴望用潮流的框架的进行开发','敢于求知，渴望飞跃，向往团队生活','个人博客：http://ycyin.cn'];

  constructor() { }

  ngOnInit() {

  }

}
