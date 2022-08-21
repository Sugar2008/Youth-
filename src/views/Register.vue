<template>
  <div class="loginBox">
    <div class="container right-panel-active">
      <!-- Sign In -->
      <div class="container_form container-signin">
        <div class="form" id="form2">
          <h2 class="form_title">注册</h2>
          <input
            v-model="username"
            autocomplete
            required
            minlength="3"
            maxlength="12"
            type="text"
            autofocus
            name="username"
            placeholder="User"
            class="input"
          />
          <input
            v-model="password"
            required
            minlength="6"
            maxlength="12"
            name="password"
            autofocus
            type="password"
            placeholder="Password"
            class="input"
          />
          <input
            v-model="email"
            autocomplete
            required
            name="email"
            type="email"
            placeholder="Email"
            class="input"
          />
          <button class="btn" @click="register">注册</button>
        </div>
      </div>

      <!-- Overlay -->
      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay-left">
            <button class="btn" id="signIn" @click="goLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        username: "",
        password: "",
        email: "",
      };
    },
    goLogin() {
      this.$router.push("/login");
    },
    register() {
      console.log(this.username, this.password, this.email);

      var url = "v1/user/register";
      var params = `username=${this.username}&password=${this.password}&email=${this.email}`;
      console.log("params", params);
      this.axios.post(url, params).then((res) => {
        console.log(res);

        if (res.data.code == 200) {
          this.$router.push("/login");
        } else {
          return;
        }
      });
    },
  },
};
</script>
<style scoped src="../assets/css/register.css"></style>
<style lang="scss" scoped></style>
