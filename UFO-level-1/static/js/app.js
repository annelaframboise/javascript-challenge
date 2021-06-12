// from data.js
const tableData = data;

// YOUR CODE HERE! lord help us from the aliens

// build table and insert table into html
var tbody= d3.select("tbody");

// table function
function table_function(data) {
    tbody.html("");
    // create rows for every ufo sighting
    data.forEach(function(ufosighting) {
        var row = tbody.append("tr");
        Object.values(ufosighting).forEach((val)=>{
            var cell= row.append("td");
            cell.text(val);
        })
    })
};

// select buttons
var entry = d3.select("#entry");
var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");

// create an event handler
filter_button.on("click", running);
entry.on("submit",running);
reset_button.on("click", function() {
    table_function(data);
    document.getElementById("datetime").value="";
});

// filter function for when date is entered
function running(event, d) {
  // prevent page from refreshing
  d3.event.preventDefault();
  // grab the date from the input filter
  var selected_date = d3.select("#datetime").property("value");
  var filteredData = data.filter(sighting => sighting.datetime === selected_date);
  // show the entries for the selected date
  if (filteredData.length > 0) {
    table_function(filteredData);
  } 
}

// load the table
table_function(data);