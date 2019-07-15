<template>
  <div class>
      <div>
          父组件传递的数据：{{fatherMsg}}
      </div>
      <input placeholder="子组件" type="text" name="" v-model="inputValue" @keypress.enter="enter">
  </div>
</template>



<script>
export default {
  components: {},
  data() {
    return {
        inputValue:''
    };
  },
  props:['fatherMsg'],
  //计算属性
  computed: {

  },
  //监听data变化
  watch: {
      
  },
  //方法集合
  methods: {
      enter(){
          this.$emit('childMsg',this.inputValue)
          this.inputValue = ''
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
};
</script>
<style scoped>
</style>