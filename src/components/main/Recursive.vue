<template>
    <div>
        <Row>
            <Col span="12">

            <Card class="card">
                <p>{{source}}</p>
            </Card>
            </Col>
            <Col span="12">
            <Card class="card">
                <Input v-model="dimension" placeholder="请输入json层数">
                <Button slot="append" @click="refresh">刷新</Button>
                </Input>
                <Row>
                    <Col span="8">
                    <Input v-model="shuid" placeholder="请输入id">
                    </Input>
                    </Col>
                    <Col span="8">

                    <Input v-model="content" placeholder="请输入修改后的内容">
                    </Input>
                    </Col>
                    <Col span="8">

                    <Button @click="update">修改</Button>
                    </Col>
                </Row>

            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: "recursive",
    data() {
      return {
        sid: 1,
        source: '',
        sourceObj: {},
        dimension: 3,
        shuid: null,
        content: null
      }
    },
    methods: {
      creatSource(dimension, parent) {

        if (dimension === 0) {
          return null

        }
        let obj = {
          name: '',
          id: null,
          // parent:null,
          children: []
        }
        obj.name = this.generator()
        obj.id = this.sid++
        // obj.parent = parent
        for (let num = 0; num < Math.floor(Math.random() * 10) + 1; num++) {
          let childObj = this.creatSource(dimension - 1, obj)
          if (childObj == null) {
            break
          }
          obj.children.push(childObj)
        }

        return obj

      },
      selectSource(obj,id, name) {
        if (obj.id === parseInt(id)) {
          obj.name = name
          this.source = JSON.stringify(this.sourceObj)

        }else {
          for (let num = 0 ; num < obj.children.length ; num++)
          {
            let child = obj.children[num]
            this.selectSource(child,id,name)
          }
        }
      },
      generator() {
        let number = '0123456789'
        let low = 'abcdefghijklmnopqrstuvwxyz'
        let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        let cArr = []
        cArr.push(number)
        cArr.push(low)
        cArr.push(capital)

        if (cArr.length === 0) {
          return ''
        }
        let pwd = ''
        for (let num = 0; num < 6; num++) {
          let str = cArr[num % 3]
          let indx = Math.floor(Math.random() * str.length)

          pwd += str[indx]
        }
        return pwd
      },
      refresh() {
        this.sourceObj = this.creatSource(this.dimension, null)
        this.source = JSON.stringify(this.sourceObj)

      },
      update() {
        this.selectSource(this.sourceObj,this.shuid, this.content)
      }

    },
    mounted() {
      this.refresh()
      // console.log(this.source())
    }
  }
</script>

<style scoped>
    .card {
        margin: 15px;
    }
</style>