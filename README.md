# Better.com Replica

## Project Overview
This project is a replica of Better.com's website, built using React with Next.js. It includes key pages such as the Home, About Us, Mortgage Calculator, and Start Page. The site is designed to be fully responsive and closely matches the styling and layout of the original website.

## Features
- **Next.js Integration**: Utilizes Next.js for server-side rendering and efficient routing.
- **Page Replication**: Accurately replicates the Home, About Us, Mortgage Calculator, and Start pages.
- **Routing**: Implemented routing for seamless navigation between pages.
- **Interactive Components**: Developed a functional Mortgage Calculator and relevant forms.
- **Responsive Design**: Ensures a mobile-friendly experience across all screen sizes.
- **Styled Components**: Uses CSS, SCSS, or styled-components for a polished look and feel.

## Installation
### Prerequisites
Ensure you have Node.js and npm/yarn installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/sukritihere/medius-assignment.git
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
better-com-replica/
│-- app/
│   │-- about-us/
│   │   │-- page.tsx
│   │-- buying-home/
│   │   │-- page.tsx
│   │-- cash-out/
│   │   │-- page.tsx
│   │-- mortgage-calculator/
│   │   │-- page.tsx
│   │-- refinance/
│   │   │-- page.tsx
│   │-- start/
│   │   │-- page.tsx
│   │   │-- globals.css
│   │   │-- layout.tsx
│-- components/
│   │-- ui/
│   │   │-- Footer.tsx
│   │   │-- Header.tsx
│   │   │-- Navbar.tsx
│   │   │-- ProgressBar.tsx


## Technologies Used
- React.js
- Next.js
- TypeScript
- Tailwind CSS
- SCSS / styled-components
- Responsive Design

## Deployment
To deploy the application, use Vercel:
```sh
npm run build
vercel deploy
```

## License
This project is for educational purposes only and is not affiliated with Better.com.

---
For any issues or contributions, feel free to open a pull request or raise an issue on the repository.

