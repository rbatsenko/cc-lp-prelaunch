import Script from "next/script";

export const GoogleAnalytics = () => (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-J8ZP6EG9RJ" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-J8ZP6EG9RJ');
      `}
    </Script>
  </>
);
