/* ===================================================
   AuraStore Modern E-Commerce Logic
   =================================================== */

// Products Catalog Data
const PRODUCTS = [
  {
    id: 1,
    name: "Aura SoundPulse Pro Headphones",
    category: "Electronics",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Industry-leading active noise cancellation with 40-hour battery life, ultra-plush memory foam earcups, and custom spatial audio drivers."
  },
  {
    id: 2,
    name: "Minimalist Chronograph Wristwatch",
    category: "Fashion",
    price: 129.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Clean brushed stainless steel casing with sapphire crystal glass, Japanese quartz movement, and an interchangeable genuine Italian leather strap."
  },
  {
    id: 3,
    name: "Aura Orbit Smart Fitness Tracker",
    category: "Electronics",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviewsCount: 215,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    description: "Continuous heart-rate & SpO2 tracking, sleep quality analytics, 50m waterproof rating, and up to 14 days of power on a single charge."
  },
  {
    id: 4,
    name: "Water-Resistant Commuter Backpack",
    category: "Fashion",
    price: 84.50,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 76,
    badge: "New",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Ergonomic 22L everyday backpack with a padded 16\" laptop compartment, hidden anti-theft pocket, and weatherproof ballistic nylon exterior."
  },
  {
    id: 5,
    name: "Artisan Ceramic Matte Coffee Mug",
    category: "Home",
    price: 24.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 63,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    description: "Hand-thrown stoneware mug with a tactile matte glaze finish and heat-retaining ceramic wall. Dishwasher and microwave safe."
  },
  {
    id: 6,
    name: "Velocity Foam Cushion Running Shoes",
    category: "Footwear",
    price: 139.99,
    originalPrice: 169.99,
    rating: 4.8,
    reviewsCount: 184,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Engineered breathable mesh upper with responsive nitrogen-infused foam midsole providing maximum energy return for road running and training."
  },
  {
    id: 7,
    name: "Smart Ambient Dimmable Desk Lamp",
    category: "Home",
    price: 49.00,
    originalPrice: 59.00,
    rating: 4.5,
    reviewsCount: 52,
    badge: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "Touch-controlled aluminum desk lamp featuring 5 color temperature presets, stepless brightness adjustment, and an integrated USB-C fast charging port."
  },
  {
    id: 8,
    name: "Slim RFID-Blocking Cardholder Wallet",
    category: "Fashion",
    price: 35.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 110,
    badge: "New",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-slim full-grain leather wallet equipped with RFID defense shield, quick card-ejection lever, and space for up to 8 cards plus folded cash."
  }
];

// App State
let state = {
  cart: JSON.parse(localStorage.getItem('aurastore_cart')) || [],
  category: 'All',
  searchQuery: '',
  sortBy: 'featured',
  coupon: null
};

// Coupons database
const COUPONS = {
  SAVE10: { code: 'SAVE10', discountPercent: 10 },
  AURA20: { code: 'AURA20', discountPercent: 20 }
};

// DOM Elements
const productGrid = document.getElementById('productGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyResults = document.getElementById('emptyResults');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const categoryTabs = document.getElementById('categoryTabs');
const sortSelect = document.getElementById('sortSelect');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

// Cart Elements
const cartBtn = document.getElementById('openCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const drawerCartCount = document.getElementById('drawerCartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDiscount = document.getElementById('cartDiscount');
const discountRow = document.getElementById('discountRow');
const discountPercent = document.getElementById('discountPercent');
const cartShipping = document.getElementById('cartShipping');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const couponInput = document.getElementById('couponInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const couponMessage = document.getElementById('couponMessage');

// Modals
const modalBackdrop = document.getElementById('modalBackdrop');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalDetailsContainer = document.getElementById('modalDetailsContainer');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotal = document.getElementById('checkoutTotal');

const successModal = document.getElementById('successModal');
const confirmedOrderId = document.getElementById('confirmedOrderId');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');
const toastStack = document.getElementById('toastStack');

// ===================================================
// Initialization
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===================================================
// Event Listeners
// ===================================================
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClearBtn.style.display = 'none';
    renderProducts();
  });

  // Category Tabs
  categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      state.category = e.target.dataset.category;
      renderProducts();
    }
  });

  // Sorting
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Reset Filters
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.category = 'All';
      state.searchQuery = '';
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'All');
      });
      renderProducts();
    });
  }

  // Cart Drawer open/close
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);
  clearCartBtn.addEventListener('click', clearCart);

  // Apply Coupon
  applyCouponBtn.addEventListener('click', applyCoupon);

  // Checkout modal
  checkoutBtn.addEventListener('click', openCheckout);
  closeCheckoutBtn.addEventListener('click', closeCheckout);
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Quick View Modal Close
  closeModalBtn.addEventListener('click', closeProductModal);
  modalBackdrop.addEventListener('click', () => {
    closeProductModal();
    closeCheckout();
  });

  // Success Modal
  continueShoppingBtn.addEventListener('click', () => {
    successModal.classList.remove('open');
    modalBackdrop.classList.remove('open');
  });

  // Newsletter
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      newsletterMsg.textContent = `🎉 Thanks for subscribing with ${email}! Check your inbox soon.`;
      newsletterForm.reset();
      setTimeout(() => { newsletterMsg.textContent = ''; }, 6000);
    });
  }

  // Global ESC key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeProductModal();
      closeCheckout();
      successModal.classList.remove('open');
    }
  });
}

// Global filter helper for links
window.filterCategory = function(categoryName) {
  state.category = categoryName;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryName);
  });
  renderProducts();
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
};

// ===================================================
// Product Rendering & Filtering
// ===================================================
function renderProducts() {
  let list = PRODUCTS.filter(p => {
    const matchCategory = state.category === 'All' || p.category === state.category;
    const matchSearch = state.searchQuery === '' ||
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.description.toLowerCase().includes(state.searchQuery) ||
      p.category.toLowerCase().includes(state.searchQuery);
    return matchCategory && matchSearch;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  // Results count
  resultsCount.textContent = `Showing ${list.length} item${list.length === 1 ? '' : 's'}${state.category !== 'All' ? ` in ${state.category}` : ''}`;

  if (list.length === 0) {
    productGrid.innerHTML = '';
    emptyResults.style.display = 'block';
    return;
  }

  emptyResults.style.display = 'none';

  // Build grid HTML
  productGrid.innerHTML = list.map(item => {
    const badgeHTML = item.badge
      ? `<span class="badge-tag badge-${item.badge.toLowerCase()}">${item.badge}</span>`
      : '';
    const origPriceHTML = item.originalPrice
      ? `<span class="price-original">$${item.originalPrice.toFixed(2)}</span>`
      : '';

    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb-wrap">
          ${badgeHTML}
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <button class="quick-view-hover-btn" onclick="openProductModal(${item.id})">Quick View</button>
        </div>
        <div class="product-info">
          <span class="product-category">${item.category}</span>
          <h3 class="product-title" onclick="openProductModal(${item.id})" style="cursor: pointer;">${item.name}</h3>
          
          <div class="rating-box">
            <span class="stars">★★★★★</span>
            <span class="review-count">(${item.rating} • ${item.reviewsCount})</span>
          </div>

          <div class="product-bottom">
            <div class="price-wrap">
              <span class="price-current">$${item.price.toFixed(2)}</span>
              ${origPriceHTML}
            </div>
            <button class="add-cart-btn" onclick="addToCart(${item.id})">
              <span>+ Add</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===================================================
// Cart Functions
// ===================================================
function openCart() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

window.addToCart = function(productId, quantity = 1) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }

  saveCart();
  updateCartUI();

  // Badge bump animation
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth; // re-flow
  cartCount.classList.add('bump');

  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added "${product.name}" to your cart!`, 'success');
};

window.updateItemQuantity = function(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
};

window.removeFromCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  if (product) {
    showToast(`Removed "${product.name}" from cart.`, 'info');
  }
};

function clearCart() {
  if (state.cart.length === 0) return;
  if (confirm("Are you sure you want to clear your shopping cart?")) {
    state.cart = [];
    state.coupon = null;
    saveCart();
    updateCartUI();
    showToast("Shopping cart cleared.", "info");
  }
}

function saveCart() {
  localStorage.setItem('aurastore_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  drawerCartCount.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-view">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button class="btn btn-secondary btn-sm" onclick="closeCart()" style="margin-top: 1rem;">Start Shopping</button>
      </div>
    `;
    cartSubtotal.textContent = '$0.00';
    cartDiscount.textContent = '-$0.00';
    discountRow.style.display = 'none';
    cartShipping.textContent = 'FREE';
    cartTotal.textContent = '$0.00';
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.5';
    checkoutBtn.style.cursor = 'not-allowed';
    return;
  }

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = '1';
  checkoutBtn.style.cursor = 'pointer';

  // Render items
  cartItemsContainer.innerHTML = state.cart.map(cartItem => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (!product) return '';
    const itemTotal = (product.price * cartItem.quantity).toFixed(2);

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-thumb" />
        <div class="cart-item-details">
          <h4 class="cart-item-name" title="${product.name}">${product.name}</h4>
          <div class="cart-item-price">$${product.price.toFixed(2)} each</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateItemQuantity(${product.id}, -1)">−</button>
              <span class="qty-val">${cartItem.quantity}</span>
              <button class="qty-btn" onclick="updateItemQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="item-remove-btn" title="Remove item" onclick="removeFromCart(${product.id})">🗑️</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Calculations
  const subtotal = state.cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  let discountAmount = 0;
  if (state.coupon) {
    discountAmount = (subtotal * state.coupon.discountPercent) / 100;
    discountRow.style.display = 'flex';
    discountPercent.textContent = `${state.coupon.discountPercent}%`;
    cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const shipping = (subtotal >= 75 || subtotal === 0) ? 0 : 9.99;
  cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;

  const finalTotal = Math.max(0, subtotal - discountAmount + shipping);

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTotal.textContent = `$${finalTotal.toFixed(2)}`;
}

// ===================================================
// Coupon Code
// ===================================================
function applyCoupon() {
  const code = couponInput.value.trim().toUpperCase();
  if (!code) {
    couponMessage.className = 'coupon-feedback error';
    couponMessage.textContent = 'Please enter a coupon code.';
    return;
  }

  if (COUPONS[code]) {
    state.coupon = COUPONS[code];
    couponMessage.className = 'coupon-feedback success';
    couponMessage.textContent = `Promo "${code}" applied! ${COUPONS[code].discountPercent}% off.`;
    updateCartUI();
    showToast(`Coupon ${code} applied successfully!`, 'success');
  } else {
    couponMessage.className = 'coupon-feedback error';
    couponMessage.textContent = 'Invalid promo code. Try SAVE10 or AURA20';
  }
}

// ===================================================
// Quick View Modal
// ===================================================
window.openProductModal = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const origPriceHTML = product.originalPrice
    ? `<span class="price-original" style="font-size:1.1rem; text-decoration:line-through; color:var(--text-muted);">$${product.originalPrice.toFixed(2)}</span>`
    : '';

  modalDetailsContainer.innerHTML = `
    <div class="modal-image-col">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-info-col">
      <span class="product-category">${product.category}</span>
      <h2 style="font-size: 1.6rem; font-weight: 800; margin: 0.3rem 0 0.8rem;">${product.name}</h2>
      
      <div class="rating-box">
        <span class="stars">★★★★★</span>
        <span class="review-count">(${product.rating} stars • ${product.reviewsCount} customer reviews)</span>
      </div>

      <div class="price-wrap" style="margin: 0.8rem 0; gap: 0.8rem; align-items: baseline;">
        <span class="price-current" style="font-size: 1.7rem;">$${product.price.toFixed(2)}</span>
        ${origPriceHTML}
      </div>

      <p class="modal-desc">${product.description}</p>

      <div style="margin-top: auto; display: flex; gap: 1rem;">
        <button class="btn btn-primary" style="flex: 1;" onclick="addToCart(${product.id}); closeProductModal();">
          Add to Cart • $${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;

  productModal.classList.add('open');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeProductModal() {
  productModal.classList.remove('open');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ===================================================
// Checkout Flow
// ===================================================
function openCheckout() {
  if (state.cart.length === 0) return;
  closeCart();

  checkoutTotal.textContent = cartTotal.textContent;
  checkoutModal.classList.add('open');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutModal.classList.remove('open');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  // Generate random order ID
  const randomOrderNum = Math.floor(10000 + Math.random() * 90000);
  confirmedOrderId.textContent = `#AUR-${randomOrderNum}`;

  // Clear cart
  state.cart = [];
  state.coupon = null;
  saveCart();
  updateCartUI();

  // Close checkout modal & open order confirmation modal
  closeCheckout();
  checkoutForm.reset();

  successModal.classList.add('open');
  modalBackdrop.classList.add('open');
  showToast("Order placed successfully!", "success");
}

// ===================================================
// Toast Notification System
// ===================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  toastStack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}
