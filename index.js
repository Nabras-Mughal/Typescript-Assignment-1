fetch("https://dummyjson.com/products")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    data.products.forEach(function (item) {
        var id = item.id, title = item.title, description = item.description, brand = item.brand, category = item.category;
        var tableRow = document.createElement("tr");
        var tableData0 = document.createElement("td");
        tableData0.textContent = id;
        tableRow.appendChild(tableData0);
        var tableData1 = document.createElement("td");
        tableData1.textContent = title;
        tableRow.appendChild(tableData1);
        var tableData2 = document.createElement("td");
        tableData2.textContent = description;
        tableRow.appendChild(tableData2);
        var tableData3 = document.createElement("td");
        tableData3.textContent = brand;
        tableRow.appendChild(tableData3);
        var tableData4 = document.createElement("td");
        tableData4.textContent = category;
        tableRow.appendChild(tableData4);
        table.appendChild(tableRow);
        console.log("ID : ".concat(id, " Title : ").concat(title, " Des : ").concat(description, " Brand : ").concat(brand, " category : ").concat(category));
    });
})
    .catch(function (error) {
    return console.error(error);
});
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var headers = ["ID", "Title", "Description", "Brand", "Category"];
headers.forEach(function (header) {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
});
var container = document.getElementById("container");
if (container) {
    container.appendChild(table);
    table.appendChild(headerRow);
}
// const tabledata = document.querySelector("#dataTable");
// if (tabledata) {
//     tabledata.appendChild(headerRow)
// }
