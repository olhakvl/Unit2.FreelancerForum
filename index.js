/* State*/ 
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// freelancers array
const initialFreelancersTable = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  ];

  const randomFreelancerData = [
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "Amy", price: 55, occupation: "baker" },
    { name: "Anna", price: 62, occupation: "accountant" }
  ]

  // const randomNames = [
  //   "Amy",
  //   "Anna",
  //   "John",
  //   "Viki",
  //   "Diana",
  //   "Alex",
  //   "Leo"
  // ];

  // const randomOccupations = [
  //   "driver",
  //   "baker",
  //   "accountant",
  //   "product owner",
  //   "writer",
  //   "actor",
  //   "singer"
  // ];

  // const randomPrice = [44, 79, 100, 30, 55, 62, 29];

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

// Add new freelancers to list and update average
function addFreelancer() {
  const randomFreelancerNumber = Math.floor(Math.random() * randomFreelancerData.length);

  let freelancers = [];
  freelancers.push(randomFreelancerData[randomFreelancerNumber].name, randomFreelancerData[randomFreelancerNumber].occupation, randomFreelancerData[randomFreelancerNumber].price);

  console.log(freelancers);
  return freelancers;
}

const addFreelancervalId = setInterval(addFreelancer, 3000);

renderTable(addFreelancer());
