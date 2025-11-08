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

// Create a tooltip element that follows the cursor
const tooltip = document.createElement('div');
tooltip.id = 'debug-tooltip';
tooltip.style.cssText = `
    position: fixed;
    background: red;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    z-index: 9999999;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    display: none;
`;
document.body.appendChild(tooltip);

// Track mouse movement and show element ID
document.addEventListener('mousemove', (e) => {
    const target = e.target as HTMLElement;
    const debugId = target.getAttribute('data-debug-id');
    
    if (debugId) {
        tooltip.textContent = debugId;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX + 15}px`;
        tooltip.style.top = `${e.clientY + 15}px`;
    } else {
        tooltip.style.display = 'none';
    }
});

// Run on load and after any Inertia page change
labelAllElements();
document.addEventListener('inertia:success', labelAllElements);
// ============================================
