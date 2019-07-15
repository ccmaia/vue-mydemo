<template>
  <div class="wrap">
    <div @click="sayHello">路由</div>
    <childVue :father-msg="msg" @childMsg="childToMsg"></childVue>
    <ul class="wow pulse navul">
      <li>
        <router-link to="/Articles">技术文章</router-link>
        <router-link to="/topics">随笔杂谈</router-link>
        <router-link to="/timeLine">时光轴</router-link>
        <router-link to="/aboutMe">关于我</router-link>
        <router-link to="/pictures">图集</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <div v-if="toMsg.length>0">子组件传递的数据：{{toMsg}}</div>
    <button @click="$store.commit('reducecount',10)  ">-10</button>
    <input v-model="inputInfo" type="text" placeholder="父组件" @keypress.enter="enter" />
    <button @click="$store.commit('addcount',10)  ">+10</button>
  </div>
</template>

<script>
import childVue from "./child-component.vue";
export default {
  components: { childVue },
  data() {
    return {
      msg: "父组件传递给子组件信息",
      toMsg: "",
      inputInfo: ""
    };
  },
  methods: {
    childToMsg(value) {
      this.toMsg = value;
      console.log("子组件传递数据：" + value);
    },
    enter() {
      this.msg = this.inputInfo;
      this.inputInfo = "";
    }
  },
  created() {
    console.log(this.$store)
    this.$api.signUpList().then(res => {
      
    });
  }
};
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #000;
}
li {
  list-style: none;
}
</style>
