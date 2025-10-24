// === Lọc sản phẩm theo tên ===
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".product-item");

  products.forEach(product => {
    const name = product.querySelector(".product-name").textContent.toLowerCase();
    if (name.includes(keyword)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});

// === Ẩn/hiện form thêm sản phẩm ===
const addProductBtn = document.getElementById("addProductBtn");
const addProductForm = document.getElementById("addProductForm");

addProductBtn.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});

// === Xử lý thêm sản phẩm mới ===
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const desc = document.getElementById("productDesc").value;

  // Tạo thẻ sản phẩm mới
  const newProduct = document.createElement("div");
  newProduct.classList.add("product-item");
  newProduct.innerHTML = `
    <img src="default.jpg" alt="${name}">
    <h3 class="product-name">${name}</h3>
    <p>${desc}</p>
    <p><strong>Giá ${price}</strong></p>
  `;

  document.getElementById("product-list").appendChild(newProduct);

  // Reset form
  addProductForm.reset();
  addProductForm.classList.add("hidden");
});
