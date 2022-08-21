<template>
  <div class="loginBox">
    <div class="container right-panel-active">
      <!-- Sign In -->
      <div class="container_form container-signin">
        <div class="form" id="form2">
          <h2 class="form_title">登录</h2>
          <input
            v-model="username"
            type="text"
            placeholder="User"
            name="username"
            id="uname"
            required
            autofocus
            class="input"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            id="upwd"
            required
            minlength="6"
            maxlength="15"
            class="input"
          />
          <a href="#" class="link">忘记密码？</a>
          <button class="btn" @click="login">登录</button>
        </div>
      </div>

      <!-- Overlay -->
      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay-left">
            <button class="btn" id="signIn" @click="goReg">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goReg() {
      this.$router.push("/register");
    },
    login() {
      console.log(this.username, this.password);
      var url = "http://127.0.0.1:3000/v1/user/login";
      var params = `username=${this.username}&password=${this.password}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$store.commit("updateUname", this.username);
          this.$router.push("/index");
        } else {
          return;
        }
      });
    },
  },
};
</script>
<style scoped src="../assets/css/login.css"></style>
<style lang="scss" scoped></style>
