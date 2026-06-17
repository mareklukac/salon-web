export default function loadGTM() {
  if (window.gtmLoaded) return;
  window.gtmLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-ND5GTMVT";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "gtm.js", "gtm.start": new Date().getTime() });
}
