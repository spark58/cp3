<template>
  <div class='rc1'>
      <img width="18%" alt="cc" src="../assets/cheesecake.png">
      <h1>Cheesecake Recipe</h1>
      <hr>
      <div id="content1">
        <p id='inp'>Ingredients</p>
        <div id='cooking_format'>
          <div id='crust'>Crust<br>
            <ul>
              <li>1 1/2 cups (128g) graham cracker crumbs (9 to 10 whole graham crackers, crushed)<br></li>
              <li>1/4 cup (28g) confectioners' sugar</li>
              <li>1/3 cup (5 tablespoons + 1 teaspoon, 74g) melted butter</li>
              <li>1/8 teaspoon salt</li>
            </ul>
          </div>
          <div id='filling'>Filling<br>
            <ul>
              <li>2 cups (454g, 2 large packages) cream cheese, at room temperature</li>
              <li>2 large eggs, at room temperature</li>
              <li>2/3 cup (152g) granulated sugar</li>
              <li>1 teaspoon vanilla extract</li>
            </ul>
          </div>
        </div>
        <hr>
        <div id='Instructions'>
          <p id='inp'>Instructions</p>
          <div id='cooking_format'>
            <div id='idk_conatiner'>
              <div class='idk' v-for="instruction in this.$root.$data.Instructions" :key="instruction.id"><ol><li>{{instruction.Instruction}}</li></ol></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>

h1 {
  font-size: 22px;
}

hr {
  margin: 5%;
}

.idk_conatiner {
  display: flex;
  flex-direction: column;
}

.idk {
  text-align: left!important;
  padding-left: 5%;
}

#cooking_format {
  display: flex;
  justify-content: space-around;
}

#cooking_format ul {
  justify-content: center;
  display: inline-table;

}

#cooking_format ol {
  justify-content: center;
  display: inline-table;
  list-style-type: square;
}

#cooking_format li {
  text-align: left;
  padding: 1%;
  font-weight: normal;
}

#crust {
  font-weight: bold;
}

#filling {
  font-weight: bold;
}

#inp {
  font-weight: bolder;
}

</style>
