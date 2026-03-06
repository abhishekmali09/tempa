# Your Health Ally — Medical Tourism Platform

A modern, responsive medical tourism web application that connects international patients with top hospitals, specialist doctors, and a wide range of treatments across India. Built with React 19, Tailwind CSS v4, and Vite, the platform provides seamless browsing, filtering, and inquiry capabilities to simplify cross-border healthcare.

---

## Features

- **Home Page** — Hero section with auto-playing video, "Why Choose Us" highlights, popular hospitals & doctors carousels, and a medical journey section.
- **Treatments Directory** — Browse 24+ medical specialties (Cardiac Sciences, Oncology, Neurology, Orthopaedics, Transplants, etc.) with detail pages and expandable descriptions.
- **Doctors Directory** — Paginated listing of specialist doctors with real-time search & filter by name, city, hospital, and department.
- **Hospitals Directory** — Paginated hospital cards with filter by name and city.
- **Doctor & Hospital Detail Pages** — Detailed overview cards showing experience, department, city, infrastructure, and more.
- **Free Quote System** — Multi-purpose inquiry form with doctor-wise and treatment-wise pre-filled quote requests.
- **Contact Us** — Contact form with address, phone, email, social links, and embedded Google Maps.
- **About Us** — Mission, motto, and core values (Trust, Excellence, Empathy, Innovation).
- **FAQ Section** — Expandable accordion-style frequently asked questions.
- **Form Validation** — Client-side validation powered by React Hook Form + Zod schemas.
- **Google Forms Integration** — Contact, quote, and newsletter submissions are sent to Google Forms for backend-free data collection.
- **Responsive Design** — Fully mobile-first responsive layout with sticky navbar and hamburger menu.
- **Carousel** — Draggable/scrollable carousel powered by Embla Carousel for featured hospitals and doctors.
- **Deployment Ready** — Pre-configured for Vercel and Netlify with SPA redirect rules.

---

## Tech Stack

| Layer         | Technology                                                        |
| ------------- | ----------------------------------------------------------------- |
| Framework     | [React 19](https://react.dev/)                                    |
| Build Tool    | [Vite 6](https://vite.dev/)                                       |
| Routing       | [React Router v7](https://reactrouter.com/)                       |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com/)                       |
| UI Components | [Material UI (MUI) v6](https://mui.com/) — Icons & components     |
| Forms         | [React Hook Form](https://react-hook-form.com/)                   |
| Validation    | [Zod](https://zod.dev/)                                           |
| Carousel      | [Embla Carousel](https://www.embla-carousel.com/)                 |
| Fonts         | Google Fonts — Poppins, Open Sans, Noto Sans, Patrick Hand, Itim  |
| Linting       | ESLint 9 with React Hooks & React Refresh plugins                 |
| Deployment    | Vercel / Netlify (pre-configured)                                 |

---

## Project Architecture / Folder Structure

```
├── index.html                  # Entry HTML with Google Fonts
├── vite.config.js              # Vite config (React + Tailwind plugins)
├── eslint.config.js            # ESLint flat config
├── package.json                # Dependencies & scripts
├── vercel.json                 # Vercel SPA rewrite rules
├── netlify.toml                # Netlify SPA redirect rules
│
├── public/
│   └── Images/                 # Static assets (logos, hero images, icons)
│
└── src/
    ├── main.jsx                # App entry — BrowserRouter + StrictMode
    ├── App.jsx                 # Route definitions
    ├── App.css                 # (empty — styles in index.css)
    ├── index.css               # Tailwind imports, theme config, global styles
    ├── constants.js            # App data (treatments, doctors, hospitals, schemas, contact info)
    │
    ├── components/
    │   ├── navbar.jsx          # Sticky responsive navbar with mobile menu
    │   ├── heroSection.jsx     # Hero section with background video & CTA
    │   ├── footer.jsx          # Footer with contact info, social links, newsletter
    │   ├── carousal.jsx        # Embla Carousel for hospitals/doctors
    │   ├── whyChooseUs.jsx     # "Why Choose Us" feature cards
    │   ├── generalCard.jsx     # Reusable card for values / features
    │   ├── homeCard.jsx        # Home page content card
    │   ├── doctorsCard.jsx     # Doctor listing card with CTA buttons
    │   ├── hospitalsCard.jsx   # Hospital listing card
    │   ├── treatmentCard.jsx   # Treatment icon card (links to detail)
    │   ├── details.jsx         # Shared detail view for doctors & hospitals
    │   ├── form.jsx            # Reusable contact/quote form (React Hook Form + Zod)
    │   ├── freeQuote.jsx       # CTA banner linking to Free Quote page
    │   ├── FAQs.jsx            # Accordion FAQ component
    │   └── PatientVoice.jsx    # "Our Medical Journey" content section
    │
    └── pages/
        ├── home.jsx                # Home page
        ├── treatments.jsx          # Treatments listing page
        ├── TreatmentDetail.jsx     # Individual treatment detail page
        ├── doctors.jsx             # Doctors listing with search/filter/pagination
        ├── doctorDetail.jsx        # Individual doctor detail page
        ├── hospitals.jsx           # Hospitals listing with search/filter/pagination
        ├── hospitalsDetail.jsx     # Individual hospital detail page
        ├── contact.jsx             # Contact Us page
        ├── AboutUs.jsx             # About Us page
        ├── freeQuote.jsx           # Free Quote inquiry page
        ├── freeQuoteDoctorWise.jsx  # Quote pre-filled with doctor info
        └── freeQuoteTreatmentWise.jsx # Quote pre-filled with treatment info
```

---

## Installation Steps

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **yarn** / **pnpm**)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/your-health-ally.git
cd your-health-ally

# 2. Install dependencies
npm install
```

---

## Environment Variables Setup

This project does not require any environment variables. All configuration (contact info, data, Google Form endpoints) is managed in `src/constants.js`.

To customise business details, edit the following in `src/constants.js`:

| Constant              | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `businessName`        | Site brand name displayed across the app      |
| `ContactInformation`  | Phone, email, address, social media links     |
| `treatments`          | Array of treatment specialties                |
| `doctors`             | Array of doctor profiles                      |
| `hospitals`           | Array of hospital profiles                    |

Google Form submission endpoints are configured directly in `src/components/form.jsx` and `src/components/footer.jsx`.

---

## Running the Application

```bash
# Start the development server (default: http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Application Routes

| Route                            | Page                     | Description                                    |
| -------------------------------- | ------------------------ | ---------------------------------------------- |
| `/`                              | Home                     | Landing page with hero, carousels, features     |
| `/treatments`                    | Treatments               | Browse all medical specialties                  |
| `/treatments/:id`                | Treatment Detail         | Detailed view of a specific treatment           |
| `/doctors`                       | Doctors                  | Search & filter doctors with pagination         |
| `/doctors/:doctorId`             | Doctor Detail            | Detailed profile of a specific doctor           |
| `/hospitals`                     | Hospitals                | Search & filter hospitals with pagination       |
| `/hospitals/:hospitalId`         | Hospital Detail          | Detailed view of a specific hospital            |
| `/contact-us`                    | Contact Us               | Contact form, map, and business info            |
| `/about-us`                      | About Us                 | Mission, motto, and core values                 |
| `/free-quote`                    | Free Quote               | General medical inquiry form                    |
| `/free-quote/d/:doctorId`        | Free Quote (Doctor)      | Quote form pre-filled with doctor name          |
| `/free-quote/t/:treatmentId`     | Free Quote (Treatment)   | Quote form pre-filled with treatment name       |

---

## Screenshots

> _Add screenshots of the application here._

| Page              | Screenshot                            |
| ----------------- | ------------------------------------- |
| Home              | ![Home](screenshots/home.png)         |
| Treatments        | ![Treatments](screenshots/treatments.png) |
| Doctors           | ![Doctors](screenshots/doctors.png)   |
| Hospitals         | ![Hospitals](screenshots/hospitals.png) |
| Contact Us        | ![Contact](screenshots/contact.png)   |
| Free Quote        | ![Quote](screenshots/quote.png)       |

---

## Future Improvements

- [ ] Integrate a backend API (Node.js/Express or similar) for dynamic data instead of static constants
- [ ] Add user authentication for patient accounts and appointment tracking
- [ ] Implement a real appointment booking system with calendar integration
- [ ] Add a CMS or admin dashboard for managing doctors, hospitals, and treatments
- [ ] Integrate a payment gateway for consultation fees
- [ ] Add multi-language (i18n) support for international patients
- [ ] Implement SEO optimizations with server-side rendering (Next.js migration)
- [ ] Add unit and integration tests (Vitest + React Testing Library)
- [ ] Replace Google Forms with a dedicated backend for form submissions
- [ ] Add image optimisation and lazy loading for better performance
- [ ] Implement a blog/article section for health-related content

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m "Add your feature"`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

Please ensure your code passes linting (`npm run lint`) before submitting.

---

## License

This project is currently unlicensed. Add a `LICENSE` file to specify your preferred license (e.g., MIT, Apache 2.0).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
