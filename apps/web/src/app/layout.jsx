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
          }
        `}</style>
        {/* meta yandex-verification теперь рендерится через metadata.other — без дубликата */}
      </head>
      <body>
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
