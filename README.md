# MyStock  
Access Link:
[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://main.d3eigui9bcmrz3.amplifyapp.com/)  

**MyStock** is an inventory management platform designed to help companies efficiently track and manage their inventory, products, and expenses. Built with modern web technologies and hosted on AWS, MyStock delivers a scalable inventory management solution for businesses of all sizes.  

## Application Overview  

### Features  
- **Inventory Management:**  
  Keep track of stock levels and receive insights on inventory trends.  
- **Product Management:**  
  Manage product catalogs, add or update products, and access detailed product information.  
- **Expense Tracking:**  
  Categorize and analyze company expenses to improve financial decision-making.  
- **Dashboard:**  
  A centralized view of essential metrics, including sales, expenses, and popular products.  
- **User-Friendly Interface:**  
  Powered by a React-based frontend with a clean and intuitive UI.  

### Architecture  
MyStock follows a modern, modular architecture that ensures scalability, maintainability, and performance:  

#### **Frontend**  
- **Framework:** React  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS for responsive and flexible designs.  
- **State Management:** Redux for managing global state.  
- **Client Structure:**  
  - Modular components like `Header`, `Navbar`, and `Sidebar`.  
  - Feature-based pages such as `dashboard`, `inventory`, `products`, and `expenses`.  

#### **Backend**  
- **Framework:** Express.js  
- **Language:** TypeScript  
- **Database Access:** Prisma ORM for seamless interaction with the PostgreSQL database.  
- **API Design:** RESTful architecture with controllers and route files for each feature (e.g., `productRoutes.ts`, `expenseRoutes.ts`).  

#### **Database**  
- **Type:** PostgreSQL  
- **Data Model:**  
  - Inventory, product, expense, and sales schemas modeled in Prisma.  
  - Seed data for initialization, enabling quick testing and prototyping.  

### Hosting and Deployment  
The application is entirely hosted on AWS, leveraging multiple services for a robust and scalable infrastructure:  
- **Frontend Hosting:** AWS Amplify, enabling seamless CI/CD pipelines.  
- **Backend Hosting:** AWS EC2 instance for the Node.js Express application.  
- **Database:** AWS RDS (PostgreSQL) for a fully-managed relational database.  
- **Storage:** AWS S3 for static assets, backups, and other media.  

### High-Level Directory Structure  
The application is organized into two main parts:  

#### **Client**  
Located in the `client/` directory, this includes all frontend code such as pages, components, and state management logic.  

#### **Server**  
Located in the `server/` directory, this includes:  
- API endpoints  
- Controllers for business logic  
- Prisma schema and migration files  
- Configuration files for deployment (e.g., `ecosystem.config.js`).  

### Key Modules and Files  
#### **Frontend**  
- `dashboardWrapper.tsx`: Centralized logic for rendering dashboard components.  
- `redux.tsx`: Redux setup for global state management.  
- `CardExpenseSummary.tsx`, `CardPopularProducts.tsx`, etc.: Modular and reusable components for displaying key metrics.  

#### **Backend**  
- `schema.prisma`: Defines the database schema for Prisma ORM.  
- `seed.ts`: Seeds the database with initial data.  
- `controllers/`: Houses business logic for key features like inventory, products, and expenses.  
- `routes/`: Defines RESTful API routes.  
