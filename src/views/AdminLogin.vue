<template>
  <div >
    <div class="adminLoginBox">
      <h4>管理员登录</h4>
      <input type="text" name="" id=""><br>
      <input type="password" name="" id="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};

</script>
import '../assets/css/adminlogin.css'
<style scoped lang="scss">

</style>
<style lang="scss" scoped>
.adminLoginBox{
  width: 500px;
  height: 400px;
  background-color: #eee;
  margin: 200px auto;
  padding: 30px;

  h4{
    text-align: center;
    font-size: 30px;
  }
  input{
    padding-bottom: 20px;
  }
}
</style>
