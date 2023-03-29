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
      tableRow.appendChild(tableData1);

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
  })
  .catch((error) => {
    return console.error(error);
  });


const table = document.createElement("table");

const headerRow = document.createElement("tr");
const headers = ["ID", "Title", "Description", "Brand", "Category"];

headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});

const container = document.getElementById("container");

if (container) {
  container.appendChild(table);
  table.appendChild(headerRow);
}

// const tabledata = document.querySelector("#dataTable");

// if (tabledata) {
//     tabledata.appendChild(headerRow)
// }
