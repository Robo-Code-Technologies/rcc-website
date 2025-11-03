# RoboCode Core

A modern web application built with Laravel, React, Inertia.js, and TypeScript, featuring a beautiful UI for robotics education and coding programs.

## 🚀 Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** >= 8.2
- **Composer** (PHP package manager)
- **Node.js** >= 18.x
- **npm** or **yarn**
- **SQLite** (or MySQL/PostgreSQL if preferred)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Robo-Code-Technologies/robocode_core.git 
   cd robocode-core
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

4. **Set up environment configuration**
   ```bash
   cp .env.example .env
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

### Running the Application

You have two options to run the application:

#### Option 1: Development Mode (Recommended)

Open two terminal windows/tabs:

**Terminal 1 - Start the Laravel development server:**
```bash
php artisan serve
```
The application will be available at `http://localhost:8000`

**Terminal 2 - Start the Vite development server (for hot module replacement):**
```bash
npm run dev
```

#### Option 2: Build for Production

1. Build the frontend assets:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   php artisan serve
   ```

### Additional Commands

**Run tests:**
```bash
php artisan test
```

**Clear application cache:**
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

**Run with all services (queue, logs, etc.):**
```bash
composer dev
```

---

## 📁 Project Structure & Customization

### React/TypeScript Files Location

All React components and frontend code are located in the `resources/js` directory:

```
resources/js/
├── actions/              # Inertia.js form actions
├── assets/               # Images, SVGs, and other static assets
├── components/           # Reusable React components
│   ├── rcc/             # RoboCode Club specific components
│   │   └── ContactUs.tsx
│   ├── ui/              # UI library components (buttons, inputs, etc.)
│   ├── Navigation.tsx   # Main navigation component
│   ├── HeroSection.tsx  # Hero section component
│   ├── BottomSection.tsx
│   ├── Blobs.tsx        # Animated blob decorations
│   ├── FeatureCard.tsx
│   ├── ProgramCard.tsx
│   ├── TargetAudience.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
│   ├── auth/           # Authentication layouts
│   └── settings/       # Settings page layouts
├── lib/                 # Utility functions
├── pages/               # Page components (Inertia.js pages)
│   ├── welcome.tsx     # Landing page
│   ├── about.tsx       # About page
│   └── settings/       # Settings pages
├── routes/              # Generated route helpers
├── types/               # TypeScript type definitions
├── app.tsx             # Main application entry point
└── ssr.tsx             # Server-side rendering entry
```

### Key Files for Customization

#### 🎨 Styling & UI Components

**Main Landing Page:**
- `resources/js/pages/welcome.tsx` - Entry point for the home page
- `resources/js/components/HeroSection.tsx` - Hero section with main heading
- `resources/js/components/BottomSection.tsx` - Features and programs section
- `resources/js/components/TargetAudience.tsx` - Target audience section
- `resources/js/components/Navigation.tsx` - Navigation bar with glass effect

**Contact Form:**
- `resources/js/components/rcc/ContactUs.tsx` - Contact form component

**Reusable Components:**
- `resources/js/components/ui/` - Pre-built UI components (buttons, dialogs, inputs)
- `resources/js/components/FeatureCard.tsx` - Card for displaying features
- `resources/js/components/ProgramCard.tsx` - Card for displaying programs

#### 📊 Data & Content

**Feature & Program Data:**
- `resources/js/data/features.ts` - Feature cards data
- `resources/js/data/programs.ts` - Program cards data

#### 🎭 Animations

**Blob Animations:**
- `resources/js/components/Blobs.tsx` - Animated background blobs
- Uses Framer Motion for smooth animations

#### 🎨 Styling

**CSS:**
- `resources/css/app.css` - Global styles and Tailwind imports

**Tailwind Configuration:**
- `tailwind.config.js` - Customize colors, fonts, and theme

#### 🔧 TypeScript Configuration

**Type Definitions:**
- `resources/js/types/index.d.ts` - Global TypeScript types
- Add custom types for your components here

### Making Customizations

1. **Adding a New Page:**
   - Create a new file in `resources/js/pages/`
   - Add a route in `routes/web.php`
   - Example:
     ```php
     Route::get('/new-page', function () {
         return Inertia::render('new-page');
     })->name('new-page');
     ```

2. **Creating a New Component:**
   - Create a `.tsx` file in `resources/js/components/`
   - Import and use it in your pages
   - Example:
     ```tsx
     export function MyComponent() {
         return <div>Hello World</div>;
     }
     ```

3. **Modifying Styles:**
   - Edit Tailwind classes directly in components
   - Or add custom CSS in `resources/css/app.css`
   - Run `npm run dev` to see changes instantly

4. **Adding Assets:**
   - Place images/SVGs in `resources/js/assets/`
   - Import them in components:
     ```tsx
     import MyImage from '../assets/my-image.svg';
     ```

---

## 🛠️ Technology Stack

- **Backend:** Laravel 12
- **Frontend:** React 18 with TypeScript
- **Routing:** Inertia.js (seamless SPA experience)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Database:** SQLite (default) / MySQL / PostgreSQL

---

## 📝 Development Workflow

1. Make changes to React components in `resources/js/`
2. Vite will automatically hot-reload your changes
3. For backend changes, restart `php artisan serve`
4. Test your changes in the browser
5. Commit your changes

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request