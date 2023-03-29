// const userTable01 = document.querySelector("#userTable");
var RAW_data;
// const data = [
//     { name: 'John', age: 25, city: 'New York' },
//     { name: 'Jane', age: 30, city: 'Los Angeles' },
//     { name: 'Bob', age: 35, city: 'Chicago' },
//   ];
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
    // console.log(`Array : ${RAW_data}`);
    // data.products.forEach(element => {
    //     console.log(element);
    // });
    // data.products.forEach(person => {
    //     const row = document.createElement('tr');
    //     const { name, age, city } = person;
    //     const td1 = document.createElement('td');
    //     td1.textContent = name;
    //     const td2 = document.createElement('td');
    //     td2.textContent = age.toString();
    //     const td3 = document.createElement('td');
    //     td3.textContent = city;
    //     row.appendChild(td1);
    //     row.appendChild(td2);
    //     row.appendChild(td3);
    //     table.appendChild(row);
    //   });
})
    .catch(function (error) {
    return console.error(error);
});
//   // create the table element
var table = document.createElement("table");
//   // create the header row
var headerRow = document.createElement("tr");
var headers = ["ID", "Title", "Description", "Brand", "Category"];
headers.forEach(function (header) {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
});
//   table.appendChild(headerRow);
//   // create the data rows
//   // add the table to the document
var container = document.getElementById("container");
if (container) {
    container.appendChild(table);
    table.appendChild(headerRow);
}
// const tabledata = document.querySelector("#dataTable");
// if (tabledata) {
//     tabledata.appendChild(headerRow)
// }
