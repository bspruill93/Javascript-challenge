// from data.js
var tableData = data;

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// YOUR CODE HERE!
tbody = d3.select("tbody")

function displayData(data){ 
    tbody.text("")
    data.forEach(function(ufosighting){
    new_tr = tbody.append("tr")
    Object.entries(ufosighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));

    var new_table = tableData.filter(ufosighting => ufosighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}

dateInputText.on("change", clickSelect)
