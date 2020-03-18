<template>
  <div class='rc1'>
      <img width="18%" alt="cc" src="../assets/cheesecake.png">
      <h1>Cheesecake Recipe</h1>
      <hr>
      <div id="content1">
        <p id='inp'>Ingredients</p>
        <div id='cooking_format'>
          <div id='crust'>Crust</br>
            <ul>
              <li>1 1/2 cups (128g) graham cracker crumbs (9 to 10 whole graham crackers, crushed)</br></li>
              <li>1/4 cup (28g) confectioners' sugar</li>
              <li>1/3 cup (5 tablespoons + 1 teaspoon, 74g) melted butter</li>
              <li>1/8 teaspoon salt</li>
            </ul>
          </div>
          <div id='filling'>Filling</br>
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
            <ol>
              <li> Select a pie pan whose inside top dimension is at least 9", and whose height is at least 1 1/4". Preheat the oven to 350°F.</li>
              <li> Make the crust by stirring together all of the crust ingredients, mixing until thoroughly combined.</li>
              <li> Press the crumbs into the bottom and up the sides of the pie pan, making a thicker layer on the bottom than on the sides.</li>
              <li> Make the filling by mixing together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth.
                <br>To avoid beating too much air into the batter, use a mixer set at low-medium speed.
                <br>To avoid lumps, make sure the cream cheese is softened, and/or at room temperature.</li>
              <li> Set the pie pan onto a baking sheet, if desired; this makes it easier to transport in and out of the oven,
                <br> and also protects the bottom of the crust from any potential scorching. Pour the filling into the crust.</li>
              <li>Place the cheesecake in the oven. Bake it for 20 minutes, then add a crust shield; or shield the crust with strips of aluminum foil.
                <br>Bake for an additional 10 minutes (for a total of about 30 minutes). A digital thermometer inserted into the filling 1" from the edge should read between 165°F and 170°F;
                <br> the filling won't look entirely set in the center.</li>
              <li>Remove the cheesecake from the oven, and set it on a rack to cool. Once the cake is cool, refrigerate it, covered, until you're ready to serve it.</li>
              <li>Serve cheesecake in wedges, with fresh fruit if desired. Store any leftovers in the refrigerator for several days; freeze for longer storage.</li>
            </ol>
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
  list-style-type: lower-roman;
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
