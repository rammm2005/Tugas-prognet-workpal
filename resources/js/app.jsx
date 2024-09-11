import './bootstrap';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <HelmetProvider context={helmetContext}>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <App {...props} />
            </HelmetProvider>
        );
        setTimeout(() => {
            const appElement = document.getElementById('app');
            if (appElement) {
                appElement.removeAttribute('data-page');
            }
        }, 0);
    },
    progress: {
        color: '#036bfc',
    },
});
