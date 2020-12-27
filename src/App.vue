<template>
  <div id="body">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Andika New Basic";
}

::-webkit-scrollbar {
  display: none;
}

#body {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(
    90deg,
    hsla(186, 33%, 94%, 1) 0%,
    hsla(216, 41%, 79%, 1) 100%
  );
}
</style>
