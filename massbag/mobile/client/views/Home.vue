<template>
    <div class="page">
        <counter></counter>
        <p>
            To get started, edit files in <code>./client</code> and save.
            <img src="images/tt.png">

        </p>

        <div class="png"></div>
    </div>
</template>

<script>
import Counter from '../components/Counter'

export default {
  components: {
    Counter
  },
  ready(){
    console.log(444)
  },
  route: {
    data(){
        console.log(555)
    }
  },
  watch: {
        '$route'() {
        }
    }
}
</script>

<style>
    .png{ width:100px;height:100px; background:url(../images/tt.png);}
</style>