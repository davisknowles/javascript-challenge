//AUTOMATIC TABLE AND DATE SEARCH

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

// Use D3 to loop though data and append table
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
//USE D3 TO ADD AN EVENT LISTENER

  // Assign the data from `data.js` to a descriptive variable
var UFO = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(UFO);

  var filteredData = UFO.filter(person => 
    person.datetime === inputValue);

  console.log(filteredData);

}

