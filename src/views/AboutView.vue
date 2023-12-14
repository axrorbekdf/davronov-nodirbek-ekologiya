<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Yuvish uchun maksimal soatbay suv sarfini topish.</h1>
          <h1>Q = Q' * P<sub>max</sub> = {{hisoblash}} m<sup>3</sup>/ch </h1>
          <p>Q' - 1 m<sup>2</sup> buyumni yuvish uchun sarflanadigan suv miqdori. (m<sup>3</sup>/m<sup>2</sup>)</p>
          <p>P<sub>max</sub> - Maksimal soatbay ishlab chiqarish quvvati.  (m<sup>2</sup>/soat)</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Q'
            </span>
            <input type="text" v-model="q" class="form-control" placeholder="1 m2 buyumni yuvish uchun sarflanadigan suv miqdori">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              P<sub>max</sub>
            </span>
            <input type="text" v-model="p" class="form-control" placeholder="Maksimal soatbay ishlab chiqarish quvvati">
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
      q: null,
      p: null
    }
  },
  computed:{
    hisoblash(){
      return this.q*this.p
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
