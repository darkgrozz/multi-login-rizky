<template>
  <div class="a">
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan Register</p>
      <br />
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username atau email .."
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        /><br />

        <div
          @click="login"
          style="
            background-color: silver;
            text-align: center;
            height: 40px;
            padding-top: 10px;
            margin-left: 40px;
            margin-right: 40px;
            border-radius: 10px;
          "
        >
          <bottom>register</bottom>
        </div>

        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        password: this.password,
        role: "siswa",
      };
      const register = await axios.post("http://localhost:3000/users", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
};
</script>