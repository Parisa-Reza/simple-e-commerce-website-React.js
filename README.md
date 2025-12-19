# E-Commerce App

A modern React-based e-commerce application with cart management, product filtering , admin dashboard.

## Live link
> https://parisa-reza.github.io/simple-e-commerce-website-React.js/

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router v7** - Routing
- **Material-UI (MUI)** - Component library
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client

## Project Structure

### Modules

- **Components** - Reusable UI components (Navbar, ProductCard, Cart, LeftPanel)
- **Pages** - Page-level components (HomePage, RootLayout, DashBoardPage)
- **API** - External API integration with services and hooks
- **Contexts** - Global state management (CartContext, FilterContext)
- **Hooks** - Custom React hooks for business logic

### Custom Hooks

- **`useCart()`** - Manages cart state with add/remove functionality
- **`useProducts()`** - Fetches and returns products from API
- **`useFilter()`** - Handles product filtering logic

### Context API

- **`CartContext`** - Global cart state (cart items, addToCart, removeFromCart)
- **`FilterContext`** - Global filter state (selectedFilters, filteredProducts)

### Material-UI (MUI) Usage

- `Box` - Layout wrapper
- `Container` - Responsive container
- `@mui/icons-material` - Icons
- `@mui/x-data-grid` - Data grid component

Styling is enhanced with Tailwind CSS classes alongside MUI components for flexible design.

## Getting Started

```bash
npm install
npm run dev      # Start development server
npm run build    # Production build
```

## Key Features

- Product listing with filtering  
- Shopping cart with add/remove items  
- Context-based state management  
- Admin dashboard page
