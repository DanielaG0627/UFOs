// import data from data.js
const tableData = data;
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