const brandApi = "../brands.json";
const container = document.querySelector(".brand-section .brands");

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

// fetchBrandData();

async function createBrandElements() {
  const brandsData = await fetchBrandData();

  for (const brandName in brandsData) {
    const brand = brandsData[brandName];

    const brandElement = document.createElement("div");
    brandElement.classList.add("col-8", "col-md-6", "col-lg-4", "col-xl-3");
    const brandImgElement = document.createElement("div");
    brandImgElement.classList.add(
      "brand-img",
      "d-flex",
      "align-items-center",
      "p-4"
    );
    const imgElement = document.createElement("img");
    imgElement.classList.add("img-fluid");
    imgElement.src = `${brand.logo}`;
    imgElement.alt = `${brandName} logo`;

    // Append elements to the container
    brandImgElement.appendChild(imgElement);
    brandElement.appendChild(brandImgElement);
    container.appendChild(brandElement);

    // Set the data-brand-name attribute
    brandImgElement.setAttribute("data-brand-name", brandName);

    // Set the ::before content
    brandImgElement.style.setProperty("--content", `"${brandName}"`);
  }

  /////////////////////////////////////

  const brandDetailContainer = document.getElementById("brand-detail");

  container.addEventListener("click", (event) => {
    const target = event.target;
    console.log("clicked");

    const brandName = target.getAttribute("data-brand-name");
    const brand = brandsData[brandName];

    brandDetailContainer.innerHTML = `
    <button class="btn btn-secondary" id="back-btn">Back</button>
    <div class="row">
    <div class="col-12 col-xl-5 mb-5 pb-5 mb-xl-0 pb-xl-0">
      <div class="brand-detail-img d-flex align-items-center">
        <img
          class="img-fluid"
          src="${brand.logo}"
          alt="${brandName} Logo"
        />
      </div>
      <div class="brand-title">
        <h1 class="title-secondary-light">${brandName}</h1>
        <div class="founded d-flex flex-column">
          <p>
            ${brand.founded.month + " " + brand.founded.date} <br/> 
          ${brand.founded.year}
          </p>
          <p>Founded</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-xl-7">
      <div class="overview mb-5">
        <h2 class="mb-4">Overview</h2>
        <p>
         ${brand.overview}
        </p>
      </div>
      <div class="headquarters mb-5">
        <h2 class="mb-4">HeadQuarters</h2>
        <div class="ms-5">
          <ul>
         
          ${
            Array.isArray(brand.headquarters) && brand.headquarters.length > 0
              ? brand.headquarters.map((hq) => `<li>${hq}</li>`)
              : "<li>Not found</li>"
          } 
          </ul>
        </div>
      </div>
      <div class="subsidiaries mb-5">
        <h2 class="mb-4">Subsidiaries</h2>
        <div class="ms-5">
          <ul>
          ${
            Array.isArray(brand.subsidiaries) && brand.subsidiaries.length > 0
              ? brand.subsidiaries.map((sub) => `<li>${sub}</li>`)
              : "<li>Not found</li>"
          } 
          </ul>
        </div>
      </div>
      <div class="founder">
        <p><span>Founder : ${brand.founder}</span></p>
      </div>
      <div class="website">
        <p><span>Website : ${brand.officialSite}</span></p>
      </div>
    </div>
     </div>
  </div>
  `;

    brandDetailContainer.style.display = "block";
    container.style.display = "none";
  });

  // Add a click event listener for the back button
  brandDetailContainer.addEventListener("click", (event) => {
    if (event.target.id === "back-btn") {
      brandDetailContainer.style.display = "none";
      container.style.display = "flex";
    }
  });
}

createBrandElements();
