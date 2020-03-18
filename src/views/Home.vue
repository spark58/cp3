<template>
  <div class="home">
    <img width="15%" alt="cooking" src="../assets/cake-pop.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="content">
      <p id='hi'>
        Welcome to SY's Recipe</br>
        Click on the link below to check out my recipes!
      </p>
      <router-link to="/RC1">Cheesecake</router-link></br>
      <router-link to="/RC2">Fluffy French Toast</router-link>
    </div>
  </div>
</template>

<style>
#hi {
  font-size: 21px;
}

#content a {
  font-weight: bold;
  text-decoration: none;
  color: #cc0066;
}

</style>
