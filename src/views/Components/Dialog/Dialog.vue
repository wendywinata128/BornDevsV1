<template>
  <div id="dialog-body">
    <div class="card register">
      <h4 class="card-title">
        REGISTER
      </h4>
      <div class="p-4 d-flex flex-column">
        <div class="form-group">
          <label for="">Name</label>
          <input
            type="text"
            name="Name"
            id="name-form"
            v-model="name"
            class="form-control"
            placeholder="Name"
            aria-describedby="helpId"
          />
        </div>

        <div class="form-group">
          <label for="">Email</label>
          <input
            type="text"
            name="Email"
            v-model="email"
            id="email-form"
            class="form-control"
            placeholder="Email"
            aria-describedby="helpId"
          />
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            name="Password"
            v-model="password"
            id="password-form"
            class="form-control"
            placeholder="Password"
            aria-describedby="helpId"
          />
        </div>

        <div class="btn btn-success w-100 mt-4" @click="goToMember">
          REGISTER
        </div>

        <router-link class="btn-member" :to="{ name: 'login' }"
          >Already have a member ?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogs",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    goToMember() {
      this.$router.push("/member");
    },
  },
};
</script>

<style scoped>
#dialog-body {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
}

.register {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
}

.card-title {
  text-align: center;
  background: cornflowerblue;
  padding: 10px;
  color: black;
}

.btn-member {
  color: red !important;
  margin-top: 10px;
}
</style>
