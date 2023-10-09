// script.js
const carList = document.getElementById("car-list");
const carDetails = document.getElementById("car-details");
let carData = {}; // Object to store car data by brand

// Sample API URL
const apiUrl = "../brands.json";

// Function to fetch car data for a specific brand from the API
async function fetchCarData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch car data");
    }
    const data = await response.json();

    // Filter and store only the new cars for all brands
    for (const brand in data) {
      carData[brand] =
        data[brand].cars.filter((car) => car.Condition === "Used") || [];
    }

    displayCarList();
  } catch (error) {
    console.error(error);
  }
}

// Function to display the car list for all brands
function displayCarList() {
  carList.innerHTML = ""; // Clear the car list
  for (const brand in carData) {
    const brandCars = carData[brand] || [];
    brandCars.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-9", "col-md-6", "col-lg-4", "col-xl-3");
      card.innerHTML = ` 
      <div class="card-primary d-flex flex-column justify-content-between">
     
      <div>
       <div class="card-img">
        <img
         class="img-fluid"
         src="${car.Images}"
         alt="${brand + " " + car.Model + " " + car.Year + " " + "image"}"
         />
        </div>
        <div
          class="card-primary-title d-flex align-items-center justify-content-between p-3"
        >
          <h4 class="">${brand + " " + car.Model}</h4>
          <div class="card-primary-favourite d-flex align-items-center">
            <i class="fa-solid fa-heart me-1"></i>
            <p>5</p>
          </div>
          </div>
        </div>



        <div class="p-3 d-flex flex-column justify-content-end">
        <div
          class="card-primary-feature d-flex align-items-end mt-3"
        >
          <div class="d-flex align-items-center col-4">
            <img
              src="../assets/images/icons/car-passengers.svg"
              alt=""
            />
            <p class="ms-2">${car.Cylinders}</p>
          </div>
          <div class="d-flex align-items-center col-4">
            <img src="../assets/images/icons/car-door.svg" alt="" />
            <p class="ms-2">${car.Doors}</p>
          </div>
          <div class="d-flex align-items-center col-4">
            <img src="../assets/images/icons/car-engine.svg" alt="" />
            <p class="ms-2">${car.EngineSize}</p>
          </div>
          <div class="d-flex align-items-center col-4">
            <img src="../assets/images/icons/car.svg" alt="" />
            <p class="ms-2">${car.Type}</p>
          </div>
        </div>
        
        
        <hr class="mt-4" />
        <div
        class="card-primary-price d-flex align-items-end justify-content-between mt-3"
        >
         <div>
           <p>Price</p>
           <p><span>$</span>${car.Price}</p>
         </div>
         <button class="btn btn-secondary">Buy Now</button>
       </div>
       
       </div>
       
       
       </div>
      
    </div>
    `;

      // Add a click event listener to show full car details
      card.addEventListener("click", () => {
        displayCarDetails(brand, car);
      });

      carList.appendChild(card);
    });
  }
}

// Function to display the full car details
function displayCarDetails(brand, car) {
  const featuresList = car.Features.map((feature) => `<li>${feature}</li>`); // Convert features to a list of <li> elements

  carDetails.innerHTML = `
  <button class="btn btn-secondary my-5" id="back-btn">Back</button>
      <div class="row">
        <div class="col-12 col-lg-7 img-container">
          <img
            class="img-fluid"
            src="${car.Images}"
            alt="${brand + " " + car.Model + " " + car.Year + " " + "image"}"
          />
        </div>
        <div class="col-12 col-lg-5">
          <div class="mb-5 car-name">
            <h3>${brand + " " + car.Model + " " + car.Year}</h3>
            <p>Sedan</p>
          </div>
          <div class="my-5 car-specs">
             <p><span>Model: </span>${car.Model}</p>
            <p><span>Color: </span>${car.Color}</p>
             <p><span>Drive Type: </span>${car.DriveType}</p>
            <p><span>Transmission: </span>${car.Transmission}</p>
        <p><span>Condition: </span> ${car.Condition}</p>
          <p><span>Year: </span> ${car.Year}</p>
            <p><span>Fuel Type: </span> ${car.FuelType}</p>
         <p><span>EngineSize: </span> ${car.EngineSize}</p>
          <p><span>Doors: </span> ${car.Doors}</p>
           <p><span>Cylinders: </span> ${car.Cylinders}</p>
         <p><span>Type: </span> ${car.Type}</p>
           <p><span>Price: </span> ${car.Price}</p>
          </div>
          <div class="car-features">
         <h3>Features</h3>
           <ul class="ms-5 mt-3">
           ${featuresList}
           </ul>
          </div>
       </div>
      </div>
    `;

  // Show the car details section and hide the car list
  carDetails.style.display = "block";
  carList.style.display = "none";

  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", () => {
    // Show the car list section and hide the car details section
    carDetails.style.display = "none";
    carList.style.display = "flex";
  });
}

// Fetch and display new car data for a specific brand when the page loads (e.g., 'Ford')
fetchCarData(carData);
