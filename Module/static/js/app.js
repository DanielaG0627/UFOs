// import data from data.js
const tableData = data;
console.log(tableData);
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// function to create table
function buildTable(data) {
    //create a blank table
    tbody.html("");
    // for loop to loop through data array and then adds rows of data to the table dataRow represents each row of the data as we iterate through the array
    data.forEach((dataRow) => {
        //create a variable that will append a row to the table body
        let row = tbody.append("tr");
        // loop through each field in the dataRow argument. This fields will become the table data and be wrapped in the <td> tags when they are appended to the HTML table
        //object.values references one object from the data array, by adding dataRow we are saying we want the values to go into the dataRow, forEach((val)) specifies one object per row
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table. td id the <td> tag
            let cell = row.append("td");
            cell.text(val);
            }
        );

    });
}
function handleClick (){
    // create variables to hold date data, filtered and unfiltered
    //With d3.select("#datetime"), we're telling D3 to look for the #datetime id in the HTML tags 
    //chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable. tableData is the original 
    //data as imported from our data.js file. By setting the filteredData variable 
    //to our raw data, we're basically using it as a blank slate
    let filteredData = tableData;
    //filter the data if a date is present
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Tie the handleClick function to the button click on the webpage
d3.selectAll("#filter-btn").on("click", handleClick);

//create initial table to show when the page is loaded
buildTable(tableData);