<template>
  <div id="login" class="container-fluid">
        <div class="form-box"><br>
          <h4>Welcome</h4>
          <img src="/static/images/icon/cloud.png" alt="" style="width: 10%;height: 10%"><br><br>
          <input type="email" class="form-control input-bracket" placeholder="Account"><br><br>
          <input type="password" class="form-control input-bracket" placeholder="Password"><br>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
  </div>
</template>

<script>
    export default {
        name: "Vlogin"
    }
</script>



<style scoped>
  #login{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgb(117, 89, 195);
  }
  .form-box{
    width: 30%;
    height: 350px;
    text-align: center; /*让div内部文字居中*/
    background-color: white;
    border-radius: 10px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.3);
  }
  .input-bracket{
    width: 80%;
    margin: auto;
  }
</style>
