import NextHead from "next/head";

function Head() {
  return (
    <NextHead>
      {/* Title */}
      <title>SmartInvest</title>
      <meta name="og:title" content="SmartInvest" />

      {/* Description */}
      <meta name="description" content="smart invest" />
      <meta name="og:description" content="smart invest" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="SmartInvest" />
      <meta name="author" content="appx group" />

      {/* Favicons */}
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
  
        <meta property="og:image" content={image} /> */}
    </NextHead>
  );
}

export default Head;
