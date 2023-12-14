<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Ruxsat etilgan oqovani topish.</h1>
          <h1>REO = C * q = {{hisoblash}}</h1>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              C
            </span>
            <input type="text" v-model="c" class="form-control" placeholder="Xlorid ionlarining yo'l qo'yoladigan kontsenttratsiyasi">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              q
            </span>
            <input type="text" v-model="q" class="form-control" placeholder="Sutkalik suv xajmi">
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      c: null,
      q: null
    }
  },
  computed:{
    hisoblash(){
      return this.c*this.q
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
