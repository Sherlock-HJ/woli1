<template>
        <Row>
            <Col :xs="24" :sm="12" :md="8" :lg="6">
            <div class="ios-cell">
                <router-link to="/how-long" >活了多久</router-link>
                <Icon type="chevron-right" class="ios-cell-arrow"></Icon>
                <div class="ios-cell-gray"></div>
            </div>

            </Col>

            <Col :xs="24" :sm="12" :md="8" :lg="6">
            <div class="ios-cell">
                <router-link to="/recursive">递归练习</router-link>
                <Icon type="chevron-right" class="ios-cell-arrow"></Icon>
                <div class="ios-cell-gray"></div>
            </div>

            </Col>
        </Row>

</template>

<script>


  export default {
    name: 'other',

  }
</script>

<style scoped>

.ios-cell{
    position: relative;
    padding-left: 15px;
    height: 44px;
    line-height: 44px;
}
    .ios-cell-gray{
        position: absolute;
        background-color: #eeeeee;
        height: 1px;
        width: 100%;
        bottom: 0;
    }
    .ios-cell-arrow{
        position: absolute;
        right: 15px;
        line-height: inherit;
    }
</style>