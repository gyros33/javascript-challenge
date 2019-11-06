// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

function buildTable(tdata) {
    tbody.html("");

    tdata.forEach(function(alienData){
        console.log(alienData);
        var row = tbody.append("tr");
    
        for (entry in alienData) {
            console.log(entry, alienData[entry]);
            const cell = row.append("td");
            cell.text(alienData[entry])
        }
    })
};

function filterData(fdata) {

    console.log(d3.select("#datetime").property("value"));
    const filteredData = tableData.filter(d => d.datetime === fdata);
    buildTable(filteredData);

};

const submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    filterData(d3.select("#datetime").property("value"));
});

buildTable(tableData);


