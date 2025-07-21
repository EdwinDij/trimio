import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Trimio — Montage & Post-production vidéo</title>
      <meta
        name="description"
        content="Trimio est un studio de montage vidéo spécialisé dans le dérushage, l'étalonnage et la post-production de contenus pros."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Trimio — Studio de montage vidéo" />
      <meta
        property="og:description"
        content="Confiez-nous votre montage, dérushage ou étalonnage. Trimio vous accompagne dans la post-production de vos vidéos."
      />
      <meta property="og:url" content="https://trimio-eta.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Trimio — Studio de montage vidéo" />
      <meta
        name="twitter:description"
        content="Confiez votre post-production vidéo à des pros du montage."
      />
      <meta name="twitter:image" content="/og-image.jpg" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

    </Head>
  );
}
