const brandApi = "../brands.json";

async function fetchBrandData() {
  console.log("Fetching data from:", brandApi); // Log the API URL
  try {
    const response = await fetch(brandApi);
    console.log("Response status:", response.status); // Log the response status
    if (!response.ok) {
      throw new Error("Failed to fetch brand data");
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Log the fetched data
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// fetchBrandData();

async function createBrandElements() {
  const brandsData = await fetchBrandData();
  //   if (!brandsData) {
  //     console.error("Failed to fetch brand data");
  //     return;
  //   }
  const container = document.querySelector(".brand-section .brands");

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
    imgElement.src = `${brand.Logo}`;
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

    // Get the brand name from the data attribute
    const brandName = target.getAttribute("data-brand-name");

    // Get the brand data based on the brand name
    const brand = brandsData[brandName];
    // Populate the brand detail container with brand information
    brandDetailContainer.innerHTML = `
      <h2>${brandName}</h2>     
      <p>${brand.Founder}</p>    
      <button id="back-button">Back</button>
    `;

    // Show the brand detail container
    brandDetailContainer.style.display = "block";
  });

  // Add a click event listener for the back button
  brandDetailContainer.addEventListener("click", (event) => {
    if (event.target.id === "back-button") {
      // Hide the brand detail container
      brandDetailContainer.style.display = "none";
    }
  });
}

// Call the function to create brand elements
createBrandElements();
