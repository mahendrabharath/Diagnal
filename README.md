# Diagnal

Steps to run the app.

1. Clone the repo
2. Open a terminal with the path to the cloned directory
3. Enter `npm i` to install packages for the project.
4. After `npm i` has completed, run `npm start` to run the appication.


This app has two major components `NavBar` and `MovieList`.

MovieList component on the first load, we use IntersectionObserver HTML API to check the position of the bottom most element of the page. If its true then API call is made to fetch the JSON elemenst.

NavBar component has the top section of the application. An action is passed as prop to pass the query that is entered by the user to the reducer.
In the reducer, Regx pattern is created with the user query. Then the entire movies list is looped pattern matched.


TailWindCSS is used for styles, it highly reduced the usage of CSS properties to class names.
