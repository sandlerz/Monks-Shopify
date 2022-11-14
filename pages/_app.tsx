// Material UI
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'utils/materialUI/createEmotionCache'
import theme from 'utils/materialUI/theme'

// CSS imports
import '../public/assets/fonts/fonts.css'
import '../styles/global/index.scss'
// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
import { UIProvider } from 'context/UIProvider'
import { ApiProvider } from 'context/ApiProvider'
import { Layout } from 'components/common/Layout'
import { YotpoReviews } from 'components/YotpoReviews'
import { FB_PIXEL_ID } from 'utils'
import { GTM_ID } from 'utils/gtmTrackingEvents'
import SEO from 'next-seo.config'
import { DefaultSeo } from 'next-seo'
import { DataProvider } from 'context/DataProvider'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: MyAppProps) {
  const yoptoKey = process.env.NEXT_PUBLIC_YOPTO_KEY_REVIEWS
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      const api = new Yotpo.API(yotpo)
      api.refreshWidgets()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Script
        id="yotpo-script"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/${yoptoKey}/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
          `
        }}
        strategy="afterInteractive"
      />
      <YotpoReviews load={true} />

      <Script
        id="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          `
        }}
      />

      <Script src="//loox.io/widget/loox.js?shop=monksearth.myshopify.com" />
      <Script
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XfqD5Z"
      />
      <Script
        id="klaviyo-function"
        dangerouslySetInnerHTML={{
          __html: `(function(e,a){
        var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
        t=e.createElement("script");t.type="text/javascript";
        t.charset="utf-8";t.async=!0;t.defer=!0;
        t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
    })(document,"175040");`
        }}
      />

      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
        }}
      />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-233188599-1"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'UA-233188599-1');
          `
        }}
      />

      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) {
              for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++
              )ttq.setAndDefer(e, ttq.methods[n]); return e
            }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; n = document.createElement("script"); n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t; e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(n, e) };
        
            ttq.load('CB7FEV3C77U8PJ4S3F9G');
            ttq.page();
          }(window, document, 'ttq');
          `
        }}
      />

      <DefaultSeo {...SEO} />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ApiProvider>
            <UIProvider>
              <DataProvider>
                <Layout>
                  <Head>
                    <meta
                      name="viewport"
                      content="initial-scale=1, width=device-width"
                    />
                  </Head>

                  <Component {...pageProps} />
                </Layout>
              </DataProvider>
            </UIProvider>
          </ApiProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
