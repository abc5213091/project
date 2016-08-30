<template>
    <div>
        <ul>
            <li v-for="item in user">
                <!--<span>{{$key}}</span>-->
                <span>{{item.username}}</span>
                <span>{{item.password}}</span>
                <span>{{item.mobileNumber}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
      ...mapGetters({
          user: 'getUserList'
      })
  },
watch: {
    '$route'() {
        this.$store.dispatch('getUser')
    }
},
  mounted(){
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