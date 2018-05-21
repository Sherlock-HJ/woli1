<template>
    <div class="pwd-g">
        <Card>
            <h1>随机密码生成器</h1>
            <h4>一 、随机密码的长度</h4>
            <Select v-model="cnum" class="num-select">
                <Option v-for="item in numList" :value="item"
                        :key="item">{{ item }}
                </Option>
            </Select>
            <h4>二 、请选择随机密码包含的类型</h4>
            <CheckboxGroup v-model="species" class="spe-check">
                <Checkbox label="number">数字 0-9</Checkbox>
                <Checkbox label="low">小写字母 a-z</Checkbox>
                <Checkbox label="capital">大写字母 A-Z</Checkbox>
                <Checkbox label="special">特殊字符 +=-@#~,.[]()!%^*$</Checkbox>
            </CheckboxGroup>
            <h4>三 、点击按钮生成密码</h4>
            <Input v-model="pwd" class="pwd-input"></Input>
            <Button :disabled="genDisabled" @click="generatorAction">生成密码</Button>
            <Button class="copy-pwd" type="ghost" :disabled="copyDisabled" :data-clipboard-text="pwd">复制密码</Button>

        </Card>
    </div>

</template>

<script>
  import Clipboard from 'clipboard'

  export default {
    name: 'PWDGenerator',
    data() {
      return {
        numList: [],
        cnum: 6,
        species: ['number'],
        genDisabled: false,
        copyDisabled: false,
        pwd: '',
        clipboard: new Clipboard('.copy-pwd')
      }
    },
    methods: {
      generatorAction() {
        this.pwd = this.generator()
      },
      copyAction() {
        clipboard.copy(this.pwd)
      },
      generator() {
        let number = '0123456789'
        let low = 'abcdefghijklmnopqrstuvwxyz'
        let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let special = '+=-@#~,.[]()!%^*$'

        let cArr = []


        if (this.species.includes('number')) {
          cArr.push(number)
        }
        if (this.species.includes('low')) {
          cArr.push(low)
        }
        if (this.species.includes('capital')) {
          cArr.push(capital)
        }
        if (this.species.includes('special')) {
          cArr.push(special)
        }

        if (cArr.length === 0) {
          return ''
        }
        let pwd = ''
        for (let num = 0; num < this.cnum; num++) {
          let str = null
          let cLen = cArr.length
          if (num < cLen) {
            str = cArr[num % cLen]
          }else {
            str = cArr[Math.floor(Math.random() * cLen)]
          }
          let indx = Math.floor(Math.random() * str.length)

          pwd += str[indx]
        }


        let hpwd = ''
        let hArr = pwd.split('')

        let con = hArr.length
        for (let num = 0 ; num < con ; num++) {
          let indx = Math.floor(Math.random() * hArr.length - num)

          hpwd += hArr.splice(indx,1)
        }

        return hpwd
      }
    },
    watch: {
      species(newSpecies) {
        let count = newSpecies.length
        this.genDisabled = count === 0
        this.numList.splice(0)
        for (let num = count; num <= 32; num++) {
          this.numList.push(num)
        }
        if (this.cnum < count) {
          this.cnum = count

        }
      },
      pwd(newPWD) {
        this.copyDisabled = newPWD.length === 0
      }
    },
    created() {
      for (let num = 1; num <= 32; num++) {
        this.numList.push(num)
      }
    },
    mounted() {
      this.copyDisabled = this.pwd.length === 0
      this.generatorAction()

      let that = this
      this.clipboard.on('success', function (e) {
        that.$Message.success('复制成功')

        e.clearSelection()
      })

      this.clipboard.on('error', function (e) {
        that.$Message.error('复制失败，请手动复制')
      })
    },
    beforeDestroy() {
      this.clipboard.destroy()
    }

  }
</script>

<style scoped>
    .pwd-g {
        margin-left: auto;
        margin-right: auto;
        max-width: 500px;
        padding-left: 15px;
        padding-right: 15px;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    h4 {
        margin-bottom: 20px;
    }

    .num-select {
        margin-bottom: 20px;
        width: 100px;
    }

    .spe-check {
        margin-bottom: 20px;
    }

    .pwd-input {
        margin-bottom: 20px;
    }
</style>