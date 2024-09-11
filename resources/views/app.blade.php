<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Workpal') }}</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="csrf-header" content="X-XSRF-TOKEN">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- <meta name="description" content="Deskripsi singkat mengenai konten halaman Anda">
    <meta name="keywords" content="kata kunci, yang, relevan, untuk, halaman, Anda">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Nama Anda atau Nama Perusahaan Anda">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{{ config('app.name') }}">
    <meta property="og:description" content="Deskripsi singkat mengenai konten halaman Anda">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="URL_gambar_yang_diinginkan_jika_ada">
    <meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name') }}">
    <meta name="twitter:description" content="Deskripsi singkat mengenai konten halaman Anda">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:image" content="URL_gambar_yang_diinginkan_jika_ada">

    <!-- Schema.org JSON-LD untuk SEO -->
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "{{ config('app.name') }}",
            "url": "{{ url('/') }}",
            "logo": "URL_logo_yang_diinginkan_jika_ada",
            "description": "Deskripsi singkat mengenai perusahaan atau situs Anda",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+XX-XXXX-XXXX",
                "contactType": "Customer Service",
                "areaServed": "ID",
                "availableLanguage": "Bahasa Indonesia"
            },
            "sameAs": [
                "https://www.facebook.com/akun-facebook-anda",
                "https://www.twitter.com/akun-twitter-anda",
                "https://www.linkedin.com/akun-linkedin-anda"
            ]
        }
    </script> --}}

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('assets/images/logo/faicon.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
