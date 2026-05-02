import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Metrika from "@/components/Metrika";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title:
    "Shirokov Deus Capital | Инвестиции в премиальную курортную недвижимость",
  description:
    "Инвестиции в апартаменты премиум-класса на Черноморском побережье. Доходность 29-40%, окупаемость от 10 месяцев. Официальный партнер застройщиков. Рассрочка 0%, ипотека.",
  icons: {
    icon: "/favicon.ico",
  },
  // Next.js рендерит это как <meta name="yandex-verification" ...>
  // на сервере — до любых JS-скриптов, поэтому Яндекс-бот гарантированно увидит тег
  other: {
    "yandex-verification": "8d56ecca5f15b2ac",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.createusercontent.com/a56c2cf4-93d1-4aeb-af05-2f243bc3cdf9/"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Yandex.Metrika counter - noscript fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108452415"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <style>{`
          @font-face {
            font-family: 'Helvetica Neue';
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: local('Helvetica Neue Bold'), local('HelveticaNeue-Bold');
          }
          .font-helvetica {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 700;
          }
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: #060d1f;
          }

          html {
            overscroll-behavior: none;
            scroll-padding-top: 124px;
          }

          body {
            overscroll-behavior-y: none;
            -webkit-overflow-scrolling: touch;
          }

          @media (max-width: 768px) {
            html {
              scroll-padding-top: 60px;
            }
          }

          /* ═══ SCROLLBAR UTILITIES ═══ */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* ═══ SCROLL REVEAL ═══ */
          .reveal-hidden {
            opacity: 0;
            transform: translateY(48px);
            transition:
              opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
          }
          .reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
          /* Первая секция (hero) появляется сразу, без задержки */
          .reveal-hero {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: none !important;
          }

          /* ═══ ACCESSIBILITY: REDUCED MOTION ═══ */
          @media (prefers-reduced-motion: reduce) {
            .reveal-hidden {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
            .aurora-blob {
              animation: none !important;
            }
          }

          /* ══════════════════════════════════════════════════
             AURORA ANIMATED BACKGROUND
          ══════════════════════════════════════════════════ */

          /* Fixed aurora layer — sits behind everything */
          .aurora-bg {
            position: fixed;
            inset: 0;
            z-index: -1;
            background: #060d1f;
            overflow: hidden;
          }

          /* Individual blobs */
          .aurora-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(90px);
            will-change: transform, opacity;
          }

          /* Blob 1 — large teal, top-left */
          .aurora-blob-1 {
            width: 70vw;
            height: 70vw;
            max-width: 900px;
            max-height: 900px;
            top: -20%;
            left: -15%;
            background: radial-gradient(circle, rgba(0,206,209,0.22) 0%, rgba(0,150,180,0.10) 50%, transparent 70%);
            animation: aurora1 22s ease-in-out infinite;
          }

          /* Blob 2 — deep blue, top-right */
          .aurora-blob-2 {
            width: 60vw;
            height: 60vw;
            max-width: 750px;
            max-height: 750px;
            top: -10%;
            right: -20%;
            background: radial-gradient(circle, rgba(10,36,102,0.55) 0%, rgba(8,20,70,0.25) 50%, transparent 70%);
            animation: aurora2 28s ease-in-out infinite;
          }

          /* Blob 3 — teal accent, center-left */
          .aurora-blob-3 {
            width: 50vw;
            height: 50vw;
            max-width: 650px;
            max-height: 650px;
            top: 35%;
            left: 5%;
            background: radial-gradient(circle, rgba(0,206,209,0.12) 0%, rgba(0,120,160,0.06) 50%, transparent 70%);
            animation: aurora3 18s ease-in-out infinite;
          }

          /* Blob 4 — indigo/purple, bottom-right */
          .aurora-blob-4 {
            width: 65vw;
            height: 65vw;
            max-width: 800px;
            max-height: 800px;
            bottom: -25%;
            right: -10%;
            background: radial-gradient(circle, rgba(30,0,100,0.30) 0%, rgba(10,36,102,0.15) 50%, transparent 70%);
            animation: aurora4 25s ease-in-out infinite;
          }

          /* Blob 5 — subtle teal, bottom-left */
          .aurora-blob-5 {
            width: 45vw;
            height: 45vw;
            max-width: 580px;
            max-height: 580px;
            bottom: -10%;
            left: 10%;
            background: radial-gradient(circle, rgba(0,206,209,0.10) 0%, transparent 65%);
            animation: aurora5 32s ease-in-out infinite;
          }

          /* Blob 6 — bright teal flare, center */
          .aurora-blob-6 {
            width: 30vw;
            height: 30vw;
            max-width: 400px;
            max-height: 400px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(0,206,209,0.08) 0%, transparent 60%);
            animation: aurora6 15s ease-in-out infinite;
          }

          /* ── Keyframes ── */
          @keyframes aurora1 {
            0%,100% { transform: translate(0,0) scale(1); opacity: 0.85; }
            25%     { transform: translate(8%,-12%) scale(1.08); opacity: 0.65; }
            50%     { transform: translate(15%, 5%) scale(0.95); opacity: 0.90; }
            75%     { transform: translate(-5%, 10%) scale(1.05); opacity: 0.70; }
          }
          @keyframes aurora2 {
            0%,100% { transform: translate(0,0) scale(1); opacity: 0.75; }
            30%     { transform: translate(-10%, 8%) scale(1.1); opacity: 0.55; }
            60%     { transform: translate(-5%,-10%) scale(0.92); opacity: 0.80; }
          }
          @keyframes aurora3 {
            0%,100% { transform: translate(0,0) scale(1); opacity: 0.60; }
            33%     { transform: translate(12%, 15%) scale(1.12); opacity: 0.80; }
            66%     { transform: translate(-8%,-5%) scale(0.88); opacity: 0.50; }
          }
          @keyframes aurora4 {
            0%,100% { transform: translate(0,0) scale(1); opacity: 0.70; }
            40%     { transform: translate(-12%, -8%) scale(1.06); opacity: 0.50; }
            70%     { transform: translate(5%, 12%) scale(0.94); opacity: 0.80; }
          }
          @keyframes aurora5 {
            0%,100% { transform: translate(0,0) scale(1); opacity: 0.55; }
            50%     { transform: translate(10%,-10%) scale(1.15); opacity: 0.75; }
          }
          @keyframes aurora6 {
            0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.40; }
            50%     { transform: translate(-50%,-50%) scale(1.3); opacity: 0.70; }
          }

          /* Mobile: reduce blob sizes slightly */
          @media (max-width: 768px) {
            .aurora-blob { filter: blur(60px); }
            .aurora-blob-1 { width: 120vw; height: 120vw; }
            .aurora-blob-2 { width: 100vw; height: 100vw; }
            .aurora-blob-4 { width: 110vw; height: 110vw; }
          }

          /* ══════════════════════════════════════════════════
             PAGE TRANSPARENCY — makes all pages see-through
             so the aurora shows through as one unified bg
          ══════════════════════════════════════════════════ */

          /* Top-level page wrappers → fully transparent */
          .min-h-screen {
            background: transparent !important;
            background-image: none !important;
          }

          /* Alternating dark sections → subtle semi-transparent overlays */
          /* Targets: bg-gradient-to-r/br from-[#081d45], from-[#2C2C2C], from-[#060e24] */
          [class*="from-[#081d45]"],
          [class*="from-[#2C2C2C]"],
          [class*="from-[#060e24]"],
          [class*="from-[#0e2a5a]"] {
            background: rgba(5, 12, 32, 0.52) !important;
            background-image: none !important;
          }

          /* Header stays solid for readability */
          header[class*="bg-[#0A2466]"],
          .sticky header {
            background: rgba(6, 13, 40, 0.92) !important;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
          }

          /* Footer stays solid */
          footer {
            background: rgba(4, 9, 25, 0.85) !important;
            background-image: none !important;
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
          }
        `}</style>
      </head>
      <body className="has-aurora-bg">
        {/* ── Animated Aurora Background — fixed, under everything ── */}
        <div className="aurora-bg" aria-hidden="true">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
          <div className="aurora-blob aurora-blob-4" />
          <div className="aurora-blob aurora-blob-5" />
          <div className="aurora-blob aurora-blob-6" />
        </div>

        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>
            <Metrika />
          </Suspense>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
