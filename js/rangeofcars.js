const brandApi = "../brands.json";
const cardContainer = document.querySelector("#card-container");

async function fetchBrandData() {
  try {
    const response = await fetch(brandApi);

    if (!response.ok) {
      throw new Error("Failed to fetch brand data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createCarCards() {
  const brandsData = await fetchBrandData();

  for (const brandName in brandsData) {
    const brand = brandsData[brandName];
    const cars = brand.cars.filter((car) => car.Condition === "New");

    cars.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("col-9", "col-md-6", "col-lg-4", "col-xl-3");
      card.innerHTML = `      
    <div class="card-primary">
      <img
        class="img-fluid"
        src="../assets/images/Rectangle 69.png"
        alt=""
      />
      <div class="px-3 pb-4">
        <div
          class="card-primary-title d-flex align-items-center justify-content-between"
        >
          <h4 class="my-3">${brandName + " " + car.Model + " " + car.Year}</h4>
          <div class="card-primary-favourite d-flex align-items-center">
            <i class="fa-solid fa-heart me-1"></i>
            <p>5</p>
          </div>
        </div>
        <div
          class="card-primary-feature d-flex align-items-end mt-3 px-2"
        >
          <div class="d-flex align-items-center">
            <img
              src="../assets/images/icons/car-passengers.svg"
              alt=""
            />
            <p class="ms-2">${car.Cylinders}</p>
          </div>
          <div class="d-flex align-items-center">
            <img src="../assets/images/icons/car-door.svg" alt="" />
            <p class="ms-2">${car.Doors}</p>
          </div>
          <div class="d-flex align-items-center">
            <img src="../assets/images/icons/car-engine.svg" alt="" />
            <p class="ms-2">${car.EngineSize}</p>
          </div>
          <div class="d-flex align-items-center">
            <img src="../assets/images/icons/car.svg" alt="" />
            <p class="ms-2">${"   " + car.Type}</p>
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
  `;

      cardContainer.appendChild(card);
    });
  }
}

createCarCards();
