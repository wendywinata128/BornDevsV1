<template>
  <div id="body">
    <div id="logo">
      <h2><router-link :to="{ path: '/' }">HOME</router-link></h2>
    </div>

    <div class="container">
      <div class="card">
        <div class="logo">
          <img src="../../assets/programmer.png" alt="logo" />
        </div>

        <div class="content">
          <h4>Login</h4>
          <div class="form-group">
            <input required type="text" v-model="form.email" />
            <div class="hint">
              Email
            </div>
          </div>

          <div class="form-group">
            <input required type="text" v-model="form.password" />
            <div class="hint">
              Password
            </div>
          </div>

          <div class="btn btn-success">
            LOGIN
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    animateForm() {
      let hint = document.querySelectorAll(".hint");

      hint.forEach((item) => {
        item.innerHTML = item.innerText
          .split("")
          .map(
            (key, index) =>
              `<span style="transition-delay:${index * 50}ms">${key}</span>`
          )
          .join("");
      });
    },
  },
  mounted() {
    this.animateForm();
    console.log(document.querySelector("span"));
  },
};
</script>

<style scoped src="./login.css"></style>

<style>
.hint span {
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-group input:focus + .hint span,
.form-group input:valid + .hint span {
  display: inline-block;
  transform: translateY(-35px);
}
</style>
