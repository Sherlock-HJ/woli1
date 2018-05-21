<template>
    <div class="container">
                <Card class="card">
                    <img :src="myQR" alt="微信扫描二维码添加好友">
                    <div class="caption">
                        <h3>敲黑板！</h3>
                        <p>{{content}}</p>
                        <p>
                            <Button type="primary" v-if="!isPC()" @click="openTencent" >打开{{openBtnTitle}}</Button>
                            <Button :type="toggleBtnClass" @click="toggleAction" >{{toggleBtnTitle}}</Button>
                        </p>
                    </div>
                </Card>
    </div>
</template>

<script>
export default {
  name: 'feedback',
  data: function () {
    return {
      myQR: 'static/img/my-wechat-qr.png',
      content: '都什么年代了  有事加微信聊吧',
      toggleBtnTitle: 'QQ咱也有',
      toggleSelected: false,
      toggleBtnClass: 'ghost',
      openBtnTitle: '微信',
      openBtnUrl: 'javascript:window.location.href=\'weixin://\''
    }
  },
  computed: {
  },
  methods: {
    toggleAction: function () {
      this.toggleSelected = !this.toggleSelected

      if (this.toggleSelected) {
        this.myQR = 'static/img/my-qq-qr.jpg'
        this.content = '我还年轻  没事加QQ聊聊'

        this.toggleBtnTitle = '还是微信吧'
        this.toggleBtnClass = ''

        this.openBtnTitle = 'QQ'
        this.openBtnUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=779493113&version=1&src_type=web&web_src=oicqzone.com'
      } else {
        this.myQR = 'static/img/my-wechat-qr.png'
        this.content = '都什么年代了  有事加微信聊吧'

        this.toggleBtnTitle = 'QQ咱也有'
        this.toggleBtnClass = 'ghost'

        this.openBtnTitle = '微信'
        this.openBtnUrl = 'javascript:window.location.href=\'weixin://\''
      }
    },
    openTencent() {
      window.location.href = this.openBtnUrl
    }
  },
  created: function () {
  }
}
</script>

<style scoped>
    img{
        width: 100%;
    }
    .card{
        min-width: 290px;
        max-width: 386px;
    }
</style>
