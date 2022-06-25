// This activity was designed to run multiple times. For each time uncomment once step, run the JavaScript code,
// comment the step again and move to the next step. 

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO report object
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
//   var row = tbody.append("tr");

//   Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per UFO report value (datetime, city, state, country, shape, duration, comments)
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
//   var row = tbody.append("tr");

//   Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the UFO report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// UFO report value (datetime, city, state, country, shape, duration, comments)
data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO report object
    var cell = row.append("td");
    cell.text(value);
  });
});