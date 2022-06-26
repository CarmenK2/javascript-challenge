
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


//Build another function which is to filter the table by the search input

function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
     // Select the input element and get the raw HTML node - id is datetime (id use #)

    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");
    var inputValue5 = inputElement5.property("value");

    // // console.log(inputValue);
    // // console.log(inputValue2);
    // // console.log(inputValue3);
    // // console.log(inputValue4);
    // // console.log(inputValue5);
    // use filter method to match inputvalue from the main data by datetime key
    var filteredData = data.filter(elem => elem.datetime === inputValue);
    var filteredData_2 = data.filter(elem => elem.city === inputValue2);
    var filteredData_3 = data.filter(elem => elem.state === inputValue3);
    var filteredData_4 = data.filter(elem => elem.country === inputValue4);
    var filteredData_5 = data.filter(elem => elem.shape === inputValue5);

    // // console.log(filteredData);
    // // console.log(filteredData_2);
    // // console.log(filteredData_3);
    // // console.log(filteredData_4);
    // // console.log(filteredData_5);
    // // use the buildTable function to create a table using data from filteredData
    buildTable(filteredData);
    buildTable(filteredData_2);
    buildTable(filteredData_3);
    buildTable(filteredData_4);
    buildTable(filteredData_5);

}

//Select the button -- you call out by the id name
var button = d3.select("#filter-btn");

// Create event handlers, once "click" occurs, filterTable function will be trigger
button.on("click", filterTable);


//At the inital html page, it will populate a table with all the orignal data
buildTable(data);

