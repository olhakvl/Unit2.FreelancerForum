/* State*/ 
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// freelancers array
const initialFreelancersTable = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  ];

  const randomData = [
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "Amy", price: 55, occupation: "baker" },
    { name: "Anna", price: 62, occupation: "accountant" }
  ]

  // function to render the initial freelancers table
  function renderTable(initialTable) {
    // save html table element to a variable
    let htmlTable = document.querySelector("#freelancerTable");

    // loop throgh the initialFreelancersTable, create a new row and add corresponding data from the initialFreelancersTable into the cells
    initialTable.forEach(currentValue => {
      let newRow = htmlTable.insertRow();
      let nameCell = newRow.insertCell(0);
      let occupationCell = newRow.insertCell(1);
      let priceCell = newRow.insertCell(2);
      nameCell.textContent = currentValue.name;
      occupationCell.textContent = currentValue.occupation;
      priceCell.textContent = `$${currentValue.price}`;
    });
  }

  renderTable(initialFreelancersTable);

// function to calculate average price
function averagePrice(tableData){
  // get sum of all prices
  let totalPrice = tableData.reduce((total, currentRow) => total += currentRow.price, 0
  );

  // get average of prices
  let averagePrice = totalPrice / tableData.length;
  return Math.floor(averagePrice);
}

// set the average price in the html
let htmlPriceAverage = document.querySelector("#averagePrice");
let initialAveragePrice = averagePrice(initialFreelancersTable);
htmlPriceAverage.append(initialAveragePrice);

// function to generate a new random freelancer
function randomFreelancerData(){

}

      // create a new row
    // let newRow = document.createElement("tr");
    // // name cell
    // let nameCell = document.createElement("td"); // create name cell
    // nameCell.innerHTML = initialTable[i].name;