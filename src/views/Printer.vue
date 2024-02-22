<template>
    <div class="print">
      <button @click="print()">Print</button>
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
      },

      print(){
        // let isConnected = this.$printer.isPrinterConnected();       // Check if printer is connected, return bool of status
        // let execute = this.$printer.execute();                      // Executes all the commands. Returns success or throws error
        // let raw = this.$printer.raw(Buffer.from("Hello world"));    // Print instantly. Returns success or throws error
        this.$printer.print("Hello World");  
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
  