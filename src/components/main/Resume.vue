<template>
  <!--container-->
  <div class="container">
    <div class="page-header">
      <h1>简历
        <small>iOS开发求职</small>
      </h1>
    </div>
    <p class="text-warning">截止到2017年08月25日</p>

    <div class="panel panel-primary">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        个人信息
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-10">
            <p>* 吴宏佳，男</p>
            <p>* {{age}}岁，183cm，75kg</p>
            <p>* <a href="http://www.fe-edu.com.cn/" target="_blank">哈尔滨远东理工学院</a>(2012.09-2016.06)</p>
            <p>* 电气工程及其自动化专业</p>
            <p>* 779493113@qq.com</p>
            <p>* 189-1043-1647</p>
          </div>
          <div class="col-sm-2">
            <img src="static/img/resume_inch.png" alt="inch" width="100px" class="img-thumbnail">

          </div>
        </div>

      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
        工作经历
      </div>
      <div class="panel-body">
        <p>* 2016.03.02 - 2017.08.25 在<a href="http://www.ceyu001.com/" target="_blank">北京策昱科技有限公司</a>做iOS开发工程师</p>
        <p>* 业绩：</p>
        <p>> 每天至少一次的与客户沟通，得到客户的赞许与肯定;</p>
        <p>> 负责沟通业务逻辑的4个客户中有2个准时结尾款；</p>
        <p>> 帮助后台完成GPS设备向服务器发送数据，并按照设备厂家提供的协议文档编写解析16进制字节流的PHP代码供后台使用；</p>
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
        求职意向
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-6">
            <p>* 期望目标职位：iOS开发工程师</p>
            <p> * 期望地区：北京</p>
          </div>
          <div class="col-sm-6">
            <p>* 期望薪资：¥10000</p>
            <p>* 到岗时间：随时</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        技能特长
      </div>
      <div class="panel-body">
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          有良好的代码习惯，注重代码可读性，结构清晰，命名规范，注释简介，逻辑性强，代码冗余率低；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          深刻理解面向对象编程，Object-C，swift 熟练使用Xcode开发环境，掌握MVC，单例等多种开发模式，熟悉iOS SDK；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          会使用三方开源框架AFNetWorking、FMDB、SDWebImage、MJExtension、MJRefresh、Masonry等；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          JPushSDK、百度地图SDK、微信支付SDK 阿里支付SDK等的使用；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          熟练使用tableView的常用代理方法；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          掌握frame和Autoresizing、AutoLayout屏幕适配；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          熟练使用代理委托协议、block；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          熟悉GCD多线程操作，了解runloop运行原理；</p>
        <p><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          会属性用属性列表、归档、Sqliet3；</p>
      </div>
    </div>
    <div id="projects" class="panel panel-primary">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-tags" aria-hidden="true"></span>
        项目经历节选
      </div>
      <div class="panel-body">
        <div class="media">
          <div class="media-left ">
            <a target="_blank"
               href="https://itunes.apple.com/cn/app/%E9%A1%B6%E6%9C%89%E9%B8%A3/id1232500797?mt=8">
              <img width="50px" class="media-object"
                   src="http://is1.mzstatic.com/image/thumb/Purple128/v4/21/2f/f3/212ff350-a57a-3dac-6ce9-308dfec5925e/source/350x350bb.jpg"
              >
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">顶有鸣</h4>
            <p> 项目职责：负责与客户沟通；业务逻辑梳理；iOS端应用开发；</p>
            <a v-if="!show1" v-on:click="show1 = !show1" href="javascript:void(0)"><span
              class="glyphicon glyphicon-option-horizontal"></span></a>
            <transition name="fade">
              <template v-if="show1">
                <div>
                  <p>项目内容：一款订购餐品的APP，有搜索，定位，餐车，餐品，下单等模块功能；通过取餐码取餐；</p>

                  <p>
                    项目收获：此项目，后台、安卓和苹果开发人员各一人，我负责与客户沟通，并与后台合作制定计划、整理业务逻辑与讨论数据结构。但在数据结构方面产生了分歧，我便找来资料，编写例子来对比两种方案的差异，最终采用了我的方案；开发周期结束后，事实说明当初的选择是对的。遂感觉当初的坚持是对的，错误会通过细致的讨论而发现，即使当初我的想法是错误的，也是一种收获。</p>
                </div>
              </template>
            </transition>
          </div>
        </div>
        <div class="media">
          <div class="media-left ">
            <a target="_blank" href="https://ipad.lizihang.com/">
              <img width="50px" class="media-object"
                   src="https://ipad.lizihang.com/Icon@2x.png"
              >
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">LandSo</h4>
            <p>项目职责：负责iOS端应用开发</p>
            <a v-if="!show2" v-on:click="show2 = !show2" href="javascript:void(0)"><span
              class="glyphicon glyphicon-option-horizontal"></span></a>
            <transition name="fade">
              <template v-if="show2">
                <div>
                  <p>项目内容：在做一款ipad售房租房的app，类似搜房网app ipad版，主要有地图画圈搜索，地图放大缩小显示不同大头针内容
                    （非点聚合），户型、房源等详情展示、关注，折线图柱状图数据分析。户型鸟瞰图热点对应，房源销控大列表展示等</p>
                  <p>项目重点：地图放大缩小显示不同大头针内容，户型与鸟瞰图热点的对应。</p>
                </div>
              </template>
            </transition>
          </div>
        </div>
        <div class="media">
          <div class="media-left ">
            <a target="_blank"
               href="https://itunes.apple.com/cn/app/bao-tou-gong-shang-zhu-ce/id1167349415?mt=8">
              <img width="50px" class="media-object"
                   src="http://is5.mzstatic.com/image/thumb/Purple118/v4/53/11/a1/5311a190-1be5-fbb5-2503-22234d0fa85f/source/175x175bb.jpg"
              >
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">工商注册视频验证委托系统</h4>
            <p>项目职责：负责iOS端应用开发</p>
            <a v-if="!show3" v-on:click="show3 = !show3" href="javascript:void(0)"><span
              class="glyphicon glyphicon-option-horizontal"></span></a>
            <transition name="fade">
              <template v-if="show3">
                <div>
                  <p>
                    项目内容：这是一款工商登记注册视频验证委托系统软件，有添加企业信息、审核查看、工商办事指南、公告信息四个模块。其中主要是添加企业信息和审核查看两个模块，添加企业信息中可以上传企业信息，身份证照片上传，视频上传，审核查看中可以查看审核进度与结果。</p>
                  <p>项目重点：视频录制的自定义UI，与上传；</p>
                </div>

              </template>
            </transition>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data: function () {
    return {
      show1: false,
      show2: false,
      show3: false,
      age: this.ageForYear('1994-01-23')
    }
  }
}
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
