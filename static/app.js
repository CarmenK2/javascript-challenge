
//Build a function which only create table

function buildTable(tabledata) {

    var tbody = d3.select("tbody");

    //Empty the existing table before you create one
    tbody.html("");
    //console log the 
    console.log(tabledata);
    //Looping each row of data and append value to each tr
    tabledata.forEach(function (UFOReport) {
        console.log(UFOReport);
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the UFO report object
            var cell = row.append("td");
            cell.text(value);
        });
    });

}


//Build another function which is to filter the table

function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
     // Select the input element and get the raw HTML node - id is datetime (id use #)
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // use filter method to match inputvalue from the main data by datetime key
    var filteredData = data.filter(elem => elem.datetime === inputValue);

    console.log(filteredData);
    // use the buildTable function to create a table using data from filteredData
    buildTable(filteredData);

}

//Select the button -- you call out by the id name
var button = d3.select("#filter-btn");

// Create event handlers, once "click" occurs, filterTable function will be trigger
button.on("click", filterTable);

//At the inital html page, it will populate a table with all the orignal data
buildTable(data);

