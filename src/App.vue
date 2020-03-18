<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/RC1">Recipe 1</router-link> |
      <router-link to="/RC2">Recipe 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Cairo', sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff99cc;
}

</style>
