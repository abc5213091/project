<template>
    <div>
        <div class="counter" @click="$store.dispatch('incrementAsync')">
            {{ count }}
        </div>
        {{test}}
        <ul>
            <li v-for="item in list" v-text="item.username"></li>
        </ul>
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    list(){
        return this.$store.state.user
    },
    test(){
        return 123
    }
  },
watch: {
    '$route'() {
        this.test = '12345678'
        console.log(123456)
    }
},
  mounted(){
      console.log(222)
      this.$store.dispatch('getUser')
  }
}
</script>

<style>
    .counter {
        cursor: pointer;
        margin: 100px auto;
        border-radius: 3px;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        font-size: 5rem;
        background-color: #f0f0f0;
        user-select: none;
    }
</style>