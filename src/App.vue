<template>
    <div id="app">
        <Layout v-if="is768()">
            <!--小 屏幕设备-->
            <ul class="navbar" >
                <Row>
                    <Col :xs="6" :sm="6" :md="6" :lg="6" class="nav-item">
                    <router-link tag="li" to="/home"><a>首页</a></router-link>

                    </Col>
                    <Col :xs="6" :sm="6" :md="6" :lg="6" class="nav-item">
                    <router-link tag="li" to="/pwd-generator"><a>密码</a></router-link>

                    </Col>
                    <Col :xs="6" :sm="6" :md="6" :lg="6" class="nav-item">
                    <router-link tag="li" to="/feedback"><a>反馈</a></router-link>

                    </Col>
                    <Col :xs="6" :sm="6" :md="6" :lg="6" class="nav-item">
                    <router-link tag="li" to="/other"><a>其他</a></router-link>

                    </Col>
                </Row>

            </ul>
            <router-view :style="appStyled"></router-view>

        </Layout>
            <Layout v-else>
                <Header>
                    <!--大 屏幕设备-->
                    <Menu class="menu" mode="horizontal" theme="dark" :active-name="1" @on-select="onSelect" >
                        <div class="layout-logo">
                            <h2>窝里</h2>
                        </div>
                        <div class="layout-nav">

                            <MenuItem :name="1">
                                首页
                            </MenuItem>
                            <MenuItem :name="2">
                                密码
                            </MenuItem>
                            <MenuItem :name="3">
                                反馈
                            </MenuItem>
                            <MenuItem :name="4">
                                其他
                            </MenuItem>
                        </div>
                    </Menu>


                </Header>
                <Content>
                    <router-view :style="appStyled"></router-view>

                </Content>
                <Footer>
                    <HJFooter></HJFooter>

                </Footer>
            </Layout>
    </div>
</template>

<script>
  import HJFooter from './components/myself/HJFooter'

  export default {
    name: 'App',
    components: {
      HJFooter
    },
    data: function () {
      return {
        appStyle: {
          padding_bottom: 0,
          margin_top: 0,
          min_height: 0
        }
      }
    },
    computed: {
      appStyled: function () {
        return {
          'padding-bottom': this.appStyle.padding_bottom + 'px',
          'margin-top': '15px',
          'min-height': this.appStyle.min_height + 'px'
        }
      }
    },
    methods: {
      screenSizehange: function () {
        if (this.is768()) {
          this.appStyle.padding_bottom = 40
          this.appStyle.min_height = window.screen.availHeight
        } else {
          this.appStyle.padding_bottom = 0
          this.appStyle.min_height = window.screen.availHeight
        }
      },
      onSelect(name) {

        if (name === 1) {
          this.$router.push('home')

        } else if (name === 2) {
          this.$router.push('pwd-generator')

        } else if (name === 3) {
          this.$router.push('feedback')

        } else if (name === 4) {
          this.$router.push('other')

        }
      }

    },
    mounted: function () {
      this.screenSizehange()
      this.$el.style.minHeight = this.is768()?  window.screen.availWidth + 'px':'1000px'
    }
  }
</script>

<style>
    textarea {
        resize: none;
    }

    p {
        word-break: break-all;
        white-space: normal;
    }

    #app {
        position: relative;
    }




    .text-bold {
        font-weight: 600 !important;
    }

    .navbar {
        background-color: #495060;
        position: fixed;
        bottom: 0;
        height: 40px;
        width: 100%;
        text-align: center;
        z-index: 1000;
        list-style: none;

    }

    .nav-item {
        height: 40px;
        line-height: 40px;
    }

    .nav-item a {
        color: #999999;
    }

    .router-link-active {
        background-color: #404159;
    }

    .router-link-active a {
        color: white;
    }

    .layout-logo {
        color: white;
        float: left;
        margin-right: 20px;
    }

    .layout-nav {
    }

    .menu {
        min-width: 500px;
    }

</style>
