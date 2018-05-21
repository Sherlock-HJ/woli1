<template>
    <button class="hjbutton"
            v-on:click="handdClick()"
            :style="{'background-color':backgroundColor,'color':textColor}"
            :disabled="enable">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'HJButton',
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'black'
    },
    enable: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handdClick: function (event) {
      this.$emit('click',event)
    }
  }
}

</script>

<style scoped>
    .hjbutton{
        border-radius: 3px;
        border-width: 1px;
        border-color: #337ab7;
    }
</style>