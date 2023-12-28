/* State*/ 
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// freelancers array
const freelancersTable = [
    { name: "Dr. Slice", price: 28, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  ];

  const randomNames = [
    "Amy",
    "Anna",
    "John",
    "Viki",
    "Diana",
    "Alex",
    "Leo"
  ];

  const randomOccupations = [
    "driver",
    "baker",
    "accountant",
    "product owner",
    "writer",
    "actor",
    "singer"
  ];

// function to calculate average price
function calculateAveragePrice(tableData){
  // get sum of all prices
  let totalPrice = tableData.reduce((total, currentRow) => total += currentRow.price, 0
  );

  // get average of prices
  let averagePrice = totalPrice / tableData.length;
  return Math.floor(averagePrice);
}

//select the section with the id of "averagePriceText"
const averagePriceElement = document.querySelector("#averagePriceText");

// create div with id to be able to select this area to re-render the average price
const priceDiv = document.createElement("div");
priceDiv.setAttribute("id", "averagePrice");
averagePriceElement.appendChild(priceDiv);

// render average price
const renderAveragePrice = () => {
  //get container holding average price
  const htmlPriceAverage = document.querySelector("#averagePrice");
  //get average price
  const averagePrice = calculateAveragePrice(freelancersTable);
  //create container for average price
  const p = document.createElement("p");
  p.innerHTML = `The average starting price is: $${averagePrice}`;

  htmlPriceAverage.replaceChildren(p);
};

// render the initial average price
renderAveragePrice();

function renderFreelancers() {
  //select the table body
  const freelancerTable = document.querySelector("tbody");

  const freelancerElements = freelancersTable.map((person) => {
    const row = document.createElement("tr");

    const personName = document.createElement("td");
    personName.innerHTML = person.name;
    const personOccupation = document.createElement("td");
    personOccupation.innerHTML = person.occupation;
    const personPrice = document.createElement("td");
    personPrice.innerHTML = `$${person.price}`;

    row.appendChild(personName);
    row.appendChild(personOccupation);
    row.appendChild(personPrice);

    return row;
  });
    //replace the table body with the new children elements
    freelancerTable.replaceChildren(...freelancerElements);
  }

  // render the initial freelancer table
  renderFreelancers();

  const addFreelancer = () => {
    //get random name for new freelancer
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    //get random occupation for new freelancer
    const occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
    //get random price for new freelancer
    const price = Math.round(Math.random() * 100);
  
    freelancersTable.push({ name, price, occupation });
  
    //re-render the average price
    renderAveragePrice();
    //re-render the freelancer table body
    renderFreelancers();
  
    //stop adding freelancers once we have 15 freelancers
    if (freelancersTable.length > 15) {
      clearInterval(addFreelancerInterval);
    }
  };
  
  // `setInterval` will call `addFreelancer` every 2000 milliseconds (2 second)
  const addFreelancerInterval = setInterval(addFreelancer, 2000);
