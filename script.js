// JavaScript for the Table Generator
alert ( " Hello Dude ")
if(alert===onclick){
    console.log(" Yes Please Continue")
}
document.getElementById("table-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    if (rows > 0 && columns > 0) {
        generateTable(rows, columns);
    } else {
        alert("Please enter valid numbers for rows and columns!");
    }
});

function generateTable(rows, columns) {
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = ""; // Clear previous table

    const table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const cell = i === 0 ? document.createElement("th") : document.createElement("td");
            cell.textContent = i === 0 ? `Header ${j + 1}` : `Row ${i} Col ${j + 1}`;
            tr.appendChild(cell);
        }

        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}
