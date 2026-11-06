# AuraStore — Modern E-Commerce Website (Navy & Black Texture Edition)

A high-performance, dark-themed front-end E-Commerce web application featuring a sleek **Navy Blue & Black** aesthetic built with pure semantic HTML5, CSS3, and Vanilla JavaScript.

## Visual Theme & Design
- **Color Palette**: Deep black (`#020408`, `#040711`), navy card surfaces (`#0a1730`, `#081326`), and muted steel-blue accents (`#1e3a8a`, `#7fa3d9`).
- **Textured Navy Aesthetic**: Layered black grain/noise texture, navy radial ambient glows, frosted dark glass headers, subtle navy borders, and custom dark scrollbars.
- **Micro-Interactions**: Smooth card elevations, button glows, slide-out drawer transitions, and responsive toast alerts.

## Key Features
- **Product Catalog & Dynamic Grid**: Handpicked items with imagery, price comparison, rating stars, and badges (*Sale*, *Bestseller*, *New*).
- **Instant Search & Category Filters**: Real-time multi-attribute search and category filtering with instant result counts.
- **Smart Sorting**: Sort products by Featured, Price (Low to High), Price (High to Low), or Highest Rated.
- **Product Quick View Modal**: Inspect detailed product specifications, larger preview images, and add directly to cart.
- **Interactive Slide-Out Shopping Cart Drawer**:
  - Live quantity adjustment (`+` / `−`), single-click item removal, and full cart clearing.
  - Subtotal, dynamic free shipping calculation (free over $75), and real-time total.
  - Coupon & discount code system (supports `SAVE10` for 10% off, `AURA20` for 20% off).
  - Cart state persistence in `localStorage` across page reloads.
- **Full Checkout Flow**:
  - Complete checkout modal with customer details, mock payment verification, and order confirmation modal with unique order ID generation.
- **Toast Notifications**: Responsive toast notification stack for immediate user feedback.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile with sticky header and mobile navigation.

## Project Structure
- [`index.html`](./index.html) - Semantic layout, header, hero banner, product grid, cart drawer, modals, and footer.
- [`style.css`](./style.css) - Blue & Black dark theme system, CSS variables, typography, animations, responsive grid/flexbox, and modal styling.
- [`script.js`](./script.js) - Catalog data, state management, filtering, sorting, cart calculations, and checkout simulation.

## How to Run
Double-click [`index.html`](./index.html) in your file explorer to open it in any modern web browser.
