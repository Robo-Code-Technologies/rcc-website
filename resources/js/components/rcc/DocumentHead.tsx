import { Head } from '@inertiajs/react';

export function DocumentHead() {
    return (
        <Head title="Welcome to Robocode Club">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Molle&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
}