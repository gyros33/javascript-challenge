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

    console.log(fdata)
    var filteredData = tableData

    if (fdata.datetime != "") {filteredData = filteredData.filter(d => d.datetime === fdata.datetime)};
    if (fdata.city != "") {filteredData = filteredData.filter(d => d.city === fdata.city)};
    if (fdata.state != "") {filteredData = filteredData.filter(d => d.state === fdata.state)};
    if (fdata.country != "") {filteredData = filteredData.filter(d => d.country === fdata.country)};
    if (fdata.shape != "") {filteredData = filteredData.filter(d => d.shape === fdata.shape)};
    


    // const filteredData = tableData.filter(function(alienData) {
    //     if (fdata.datetime != "") {alienData.datetime === fdata.datetime};
    //     if (fdata.city != "") {alienData.city === fdata.city};
    //     if (fdata.state != "") {alienData.state === fdata.state};
    //     if (fdata.country != "") {alienData.country === fdata.country};
    //     if (fdata.shape != "") {alienData.shape === fdata.shape};
    // });

    console.log(filteredData);
    buildTable(filteredData);

};

const submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    const filterParams = {};
    filterParams.datetime = d3.select("#datetime").property("value");
    filterParams.city = d3.select("#city").property("value").toLowerCase();
    filterParams.state = d3.select("#state").property("value").toLowerCase();
    filterParams.country = d3.select("#country").property("value").toLowerCase();
    filterParams.shape = d3.select("#shape").property("value").toLowerCase();

    // filterParams.push(d3.select("#datetime").property("value"));
    // filterParams.push(d3.select("#city").property("value"));
    // filterParams.push(d3.select("#state").property("value"));
    // filterParams.push(d3.select("#country").property("value"));
    // filterParams.push(d3.select("#shape").property("value"));

    //const reFilteredParams = filterParams.filter(d => d != "")
    
    filterData(filterParams);
});

buildTable(tableData);


