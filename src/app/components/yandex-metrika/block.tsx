'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const YM_ID = 112500402;

function MetrikaPageTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).ym) {
            (window as any).ym(YM_ID, 'hit', window.location.href);
        }
    }, [pathname, searchParams]);

    return null;
}

export default function YandexMetrika() {
    return (
        <>
            <Script
                id="yandex-metrika"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

                        ym(${YM_ID}, 'init', {
                            ssr: true,
                            webvisor: true,
                            clickmap: true,
                            ecommerce: "dataLayer",
                            referrer: document.referrer,
                            url: location.href,
                            accurateTrackBounce: true,
                            trackLinks: true
                        });
                    `,
                }}
            />
            <noscript>
                <div>
                    <img
                        src={`https://mc.yandex.ru/watch/${YM_ID}`}
                        style={{ position: 'absolute', left: '-9999px' }}
                        alt=""
                    />
                </div>
            </noscript>
            {/* Трекер смены страниц (SPA-навигация) */}
            <Suspense fallback={null}>
                <MetrikaPageTracker />
            </Suspense>
        </>
    );
}