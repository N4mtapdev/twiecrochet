// Dữ liệu sản phẩm (giả lập, thay bằng API nếu có)
const products = [
    {
        id: 1,
        name: "Móc Khóa Bé Gà Cà Tím",
        description: "Móc khóa len đáng yêu với thiết kế độc đáo!",
        price: "50.000 VND",
        images: ["./assets/anh/anhsanpham/mkbegacatim.jpg", "./assets/anh/anhsanpham/mkbegacatim2.jpg"],
        category: "moc-khoa"
    },
    {
        id: 2,
        name: "Móc Khóa Bé Heo Cá Sấu",
        description: "Móc khóa len ngộ nghĩnh với hình heo cá sấu!",
        price: "60.000 VND",
        images: ["./assets/anh/anhsanpham/mkbeheocasau.jpg"],
        category: "moc-khoa"
    },
    {
        id: 3,
        name: "Móc Khóa Cáo Nick",
        description: "Móc khóa len lấy cảm hứng từ Zootopia!",
        price: "55.000 VND",
        images: ["./assets/anh/anhsanpham/mkcaonick.jpg"],
        category: "moc-khoa"
    },
    {
        id: 4,
        name: "Móc Khóa Len Mèo Con",
        description: "Móc khóa len hình mèo con dễ thương!",
        price: "45.000 VND",
        images: ["https://via.placeholder.com/150"],
        category: "moc-khoa"
    },
    {
        id: 5,
        name: "Túi Len Thỏ Xinh",
        description: "Túi len thủ công hình thỏ đáng yêu!",
        price: "120.000 VND",
        images: ["https://via.placeholder.com/150"],
        category: "tui-len"
    },
    {
        id: 6,
        name: "Móc Khóa Gấu Bông",
        description: "Móc khóa len hình gấu bông mềm mại!",
        price: "48.000 VND",
        images: ["https://via.placeholder.com/150"],
        category: "moc-khoa"
    }
];

// Hamburger Menu Toggle
function toggleMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

// Quick View
let currentQuickViewIndex = 0;
function showQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const quickViewOverlay = document.getElementById('quickViewPopup');
    const quickViewImage = document.getElementById('quickViewImage');
    const quickViewName = document.getElementById('quickViewName');
    const quickViewDescription = document.getElementById('quickViewDescription');
    const quickViewPrice = document.getElementById('quickViewPrice');
    const quickViewQuantity = document.getElementById('quickViewQuantity');
    const quickViewAddToCart = document.getElementById('quickViewAddToCart');

    if (!quickViewOverlay || !quickViewImage || !quickViewName || !quickViewDescription || !quickViewPrice || !quickViewQuantity || !quickViewAddToCart) {
        console.error('Quick view elements not found');
        return;
    }

    quickViewImage.src = product.images[0];
    quickViewImage.alt = product.name;
    quickViewName.textContent = product.name;
    quickViewDescription.textContent = product.description;
    quickViewPrice.textContent = product.price;
    quickViewQuantity.value = 1;
    quickViewAddToCart.dataset.productId = id;
    currentQuickViewIndex = 0;

    quickViewOverlay.classList.add('active');
}

function closeQuickView() {
    const quickViewOverlay = document.getElementById('quickViewPopup');
    if (quickViewOverlay) {
        quickViewOverlay.classList.remove('active');
    }
}

function changeQuickViewImage(direction) {
    const quickViewAddToCart = document.getElementById('quickViewAddToCart');
    if (!quickViewAddToCart || !quickViewAddToCart.dataset.productId) return;

    const product = products.find(p => p.id === parseInt(quickViewAddToCart.dataset.productId));
    if (!product) return;

    currentQuickViewIndex += direction;
    if (currentQuickViewIndex < 0) currentQuickViewIndex = product.images.length - 1;
    if (currentQuickViewIndex >= product.images.length) currentQuickViewIndex = 0;

    const quickViewImage = document.getElementById('quickViewImage');
    if (quickViewImage) {
        quickViewImage.src = product.images[currentQuickViewIndex];
        quickViewImage.alt = `${product.name} - Image ${currentQuickViewIndex + 1}`;
    }
}

// Popup Chào Mừng
function closePopup() {
    const welcomePopup = document.getElementById('welcomePopup');
    if (welcomePopup) {
        welcomePopup.classList.remove('active');
    }
}

function viewProducts() {
    window.location.href = 'index.html#products';
}

// Copy Phone Number
function copyPhoneNumber() {
    navigator.clipboard.writeText('0377133854').then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = 'Đã sao chép số điện thoại!';
            toast.classList.add('active');
            setTimeout(() => toast.classList.remove('active'), 3000);
        }
    }).catch(err => {
        console.error('Failed to copy phone number:', err);
    });
}

// Thêm vào giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const quantity = parseInt(document.getElementById('quickViewQuantity')?.value || 1);
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();

    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = `${product.name} đã được thêm vào giỏ!`;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3000);
    }
}

// Cập nhật giỏ hàng
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        const itemTotal = parseFloat(item.price.replace('.', '').replace(' VND', '')) * item.quantity;
        li.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${(itemTotal).toLocaleString('vi-VN')} VND</span>
        `;
        cartItems.appendChild(li);
        total += itemTotal;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `Tổng: ${total.toLocaleString('vi-VN')} VND`;
}

// Xóa giỏ hàng
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Slider
let slideIndex = 1;
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length || !dots.length) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Tìm kiếm sản phẩm
function searchProducts() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    const productsContainer = document.querySelector('.products');

    if (!input || !suggestions || !productsContainer) return;

    const query = input.value.toLowerCase();
    suggestions.innerHTML = '';

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = `product ${product.category}`;
        div.innerHTML = `
            <span class="badge">${product.id === 1 ? 'Hot' : 'New'}</span>
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p class="description">${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="views">Lượt xem: <span>0</span></p>
            <button class="quick-view-btn" onclick="showQuickView(${product.id})" aria-label="Xem nhanh ${product.name}">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
                Xem Nhanh
            </button>
            <button onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ hàng">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Thêm vào giỏ
            </button>
        `;
        productsContainer.appendChild(div);

        const suggestion = document.createElement('div');
        suggestion.textContent = product.name;
        suggestion.onclick = () => {
            input.value = product.name;
            suggestions.innerHTML = '';
            productsContainer.innerHTML = '';
            productsContainer.appendChild(div);
        };
        suggestions.appendChild(suggestion);
    });

    suggestions.style.display = filteredProducts.length ? 'block' : 'none';
}

// Lọc danh mục
function filterCategory(category) {
    const productsContainer = document.querySelector('.products');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = `product ${product.category}`;
        div.innerHTML = `
            <span class="badge">${product.id === 1 ? 'Hot' : 'New'}</span>
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p class="description">${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="views">Lượt xem: <span>0</span></p>
            <button class="quick-view-btn" onclick="showQuickView(${product.id})" aria-label="Xem nhanh ${product.name}">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
                Xem Nhanh
            </button>
            <button onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ hàng">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Thêm vào giỏ
            </button>
        `;
        productsContainer.appendChild(div);
    });
}

// Sắp xếp giá
function sortProducts() {
    const sortValue = document.getElementById('priceFilter');
    const productsContainer = document.querySelector('.products');
    if (!sortValue || !productsContainer) return;

    productsContainer.innerHTML = '';
    let sortedProducts = [...products];
    if (sortValue.value === 'low-to-high') {
        sortedProducts.sort((a, b) => parseFloat(a.price.replace('.', '').replace(' VND', '')) - parseFloat(b.price.replace('.', '').replace(' VND', '')));
    } else if (sortValue.value === 'high-to-low') {
        sortedProducts.sort((a, b) => parseFloat(b.price.replace('.', '').replace(' VND', '')) - parseFloat(a.price.replace('.', '').replace(' VND', '')));
    }

    sortedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = `product ${product.category}`;
        div.innerHTML = `
            <span class="badge">${product.id === 1 ? 'Hot' : 'New'}</span>
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p class="description">${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="views">Lượt xem: <span>0</span></p>
            <button class="quick-view-btn" onclick="showQuickView(${product.id})" aria-label="Xem nhanh ${product.name}">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
                Xem Nhanh
            </button>
            <button onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ hàng">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Thêm vào giỏ
            </button>
        `;
        productsContainer.appendChild(div);
    });
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Đặt hàng
function submitOrder(event) {
    event.preventDefault();
    const form = event.target;
    const loading = form.querySelector('.loading');
    if (!loading) return;

    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = 'Đặt hàng thành công!';
            toast.classList.add('active');
            setTimeout(() => toast.classList.remove('active'), 3000);
        }
        form.reset();
    }, 2000);
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị popup chào mừng
    const welcomePopup = document.getElementById('welcomePopup');
    if (welcomePopup) {
        setTimeout(() => welcomePopup.classList.add('active'), 1000);
    }

    // Khởi tạo slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length) {
        showSlides(slideIndex);
    }

    // Sự kiện tìm kiếm
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }

    // Sự kiện lọc danh mục
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length) {
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterCategory(btn.dataset.category);
            });
        });
    }

    // Sự kiện sắp xếp giá
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', sortProducts);
    }

    // Sự kiện đặt hàng
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', submitOrder);
    }

    // Back to top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
        });
    }
});
