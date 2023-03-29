// const userTable01 = document.querySelector("#userTable");
let RAW_data: string[];

// const data = [
//     { name: 'John', age: 25, city: 'New York' },
//     { name: 'Jane', age: 30, city: 'Los Angeles' },
//     { name: 'Bob', age: 35, city: 'Chicago' },
//   ];

fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.products.forEach((item) => {
      const { id, title, description, brand, category } = item;
      const tableRow = document.createElement("tr");
      const tableData0 = document.createElement("td");
      tableData0.textContent = id;
      tableRow.appendChild(tableData0);

      const tableData1 = document.createElement("td");
      tableData1.textContent = title;
      tableRow.appendChild(tableData1)

      const tableData2 = document.createElement("td");
      tableData2.textContent = description;
      tableRow.appendChild(tableData2);

      const tableData3 = document.createElement("td");
      tableData3.textContent = brand;
      tableRow.appendChild(tableData3);

      const tableData4 = document.createElement("td");
      tableData4.textContent = category;
      tableRow.appendChild(tableData4);

      table.appendChild(tableRow);

      console.log(
        `ID : ${id} Title : ${title} Des : ${description} Brand : ${brand} category : ${category}`
      );
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
  .catch((error) => {
    return console.error(error);
  });

//   // create the table element
const table = document.createElement("table");

//   // create the header row
const headerRow = document.createElement("tr");
const headers = ["ID", "Title", "Description", "Brand", "Category"];
headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
//   table.appendChild(headerRow);

//   // create the data rows

//   // add the table to the document
const container = document.getElementById("container");

if (container) {
  container.appendChild(table);
  table.appendChild(headerRow);
}

// const tabledata = document.querySelector("#dataTable");

// if (tabledata) {
//     tabledata.appendChild(headerRow)
// }
