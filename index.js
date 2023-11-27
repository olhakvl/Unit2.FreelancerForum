/* State*/ 
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// freelancers array
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    // { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    // { name: "Prof. Spark", price: 76, occupation: "programmer" },
    // { name: "Dr. Wire", price: 47, occupation: "teacher" },
    // { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];











  /* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.


// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const squares = document.querySelector("#squares");
  const squareElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(shape.color, shape.size);
    return element;
  });
  squares.replaceChildren(...squareElements);

  // TODO: Render the circles
  // const circles = document.querySelector("#circle");
  // circles.replaceChildren();
  // shapes.forEach((shape) => {
  //   const circle = document.createElement("li");
  //   circle.classList.add("circle", shape.color, shape.size);
  //   circles.append(circle);
  // });

  const circles = document.querySelector("#circle");
  const circleElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add("circle", shape.color, shape.size);
    return element;
  });
  circles.replaceChildren(...circleElements);
}

/**
 * Add a random shape to the `shapes` array
 */
function addShape() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color);

  // TODO: Randomize the size of the shape
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  console.log(size);
  shapes.push({ color, size });

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (shapes.length >= maxShapes) {
    clearInterval(addShapeIntervalId);
  }
}
