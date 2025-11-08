import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

// ============================================
// DEBUG: Label all elements with unique IDs
// Remove this block when done debugging
// ============================================
function labelAllElements() {
    const tagCounts: Record<string, number> = {};
    
    const allElements = document.querySelectorAll('body *');
    allElements.forEach((element) => {
        const tagName = element.tagName.toLowerCase();
        
        // Initialize counter for this tag if not exists
        if (!tagCounts[tagName]) {
            tagCounts[tagName] = 0;
        }
        
        // Increment and assign unique ID
        tagCounts[tagName]++;
        element.setAttribute('data-debug-id', `${tagName}-${tagCounts[tagName]}`);
    });
}

// Run on load and after any Inertia page change
labelAllElements();
document.addEventListener('inertia:success', labelAllElements);
// ============================================
