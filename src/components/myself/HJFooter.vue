<template>
  <!--footer-->

  <div class="footer">
    <div class="copyright">
      Copyright © 2013-2018    <strong><a href="http://whirlie.cn/" target="_blank">窝里</a></strong>&nbsp;
      <strong><a href="http://whirlie.cn/" target="_blank">whirlie.cn</a></strong> All Rights Reserved. 备案号：黑ICP备14003097号
    </div>
  </div>
</template>

<script>
export default {
  name: 'HJFooter'
}
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
  }
  .copyright a{
    color: #999;
  }
  .copyright a:hover{
    color: #337ab7;
  }
  .copyright {
    font-size: 12px;
    color: #999;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
</style>
