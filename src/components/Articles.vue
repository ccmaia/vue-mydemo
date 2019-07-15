<template>
    <div>
        <div>这是技术文章</div>
        <div>{{$store.state.count}}</div>
        <img class="bgimg" src="../assets/img/1.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        created(){
            console.log(this.$store.getters.doneArr)
        }
    }
</script>

<style >

</style>