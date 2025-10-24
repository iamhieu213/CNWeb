// Lấy các phần tử cần dùng
const addBtn = document.getElementById('addBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Ẩn/hiện form thêm sản phẩm khi nhấn nút
addBtn.addEventListener('click', () => {
  addProductForm.classList.toggle('hidden');
});

// Hủy thêm sản phẩm
cancelBtn.addEventListener('click', () => {
  addProductForm.reset();
  addProductForm.classList.add('hidden');
  errorMsg.textContent = '';
});

// Xử lý sự kiện submit form
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('newName').value.trim();
  const price = document.getElementById('newPrice').value.trim();
  const desc = document.getElementById('newDesc').value.trim();

  // Validate dữ liệu
  if (!name) {
    errorMsg.textContent = '⚠️ Tên sản phẩm không được để trống!';
    return;
  }

  const priceValue = Number(price);
  if (isNaN(priceValue) || priceValue <= 0) {
    errorMsg.textContent = '⚠️ Giá sản phẩm phải là số lớn hơn 0!';
    return;
  }

  if (desc.length < 10) {
    errorMsg.textContent = '⚠️ Mô tả nên dài hơn 10 ký tự.';
    return;
  }

  // Dữ liệu hợp lệ -> tạo sản phẩm mới
  errorMsg.textContent = '';

  const newItem = document.createElement('div');
  newItem.className = 'product-item';
  newItem.innerHTML = `
    <img src="default.jpg" alt="${name}" width="200" height="200">
    <h3 class="product-name">${name}</h3>
    <p>${desc}</p>
    <p><strong>Giá: ${priceValue.toLocaleString()} đồng</strong></p>
  `;

  // Thêm vào đầu danh sách
  productList.prepend(newItem);

  // Reset form và ẩn
  addProductForm.reset();
  addProductForm.classList.add('hidden');
});

// Chức năng tìm kiếm
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase().trim();
  const productItems = document.querySelectorAll('.product-item');

  productItems.forEach(item => {
    const name = item.querySelector('.product-name').textContent.toLowerCase();
    if (name.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

// Cho phép tìm kiếm bằng phím Enter
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});
