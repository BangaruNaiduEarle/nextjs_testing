import React from "react";
import Head from "next/head";

const MetaData = ({ title, description, keywords, img }) => {
  console.log(title);
  console.log(description);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta
        property="og:url"
        content="https://webdev.gitam.edu/next-page-route-two/"
      />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Head>
  );
};

export default MetaData;

const data = {
  title:
    "Kautilya - Master's Program in Public Policy (MPP), Kautilya School of Public Policy, Best MPP Program",
  description:
    "Leadership to inspire change. Dedication for nation-building. Reliance on evidence and facts to make informed policy decisions. Emphasis on inclusion and regeneration for a brighter future. These are just a few of the traits that our Master’s in Public Policy (MPP) program will instil in you. MPP is a residential 2-year multi-disciplinary program that gives",
  keywords:
    "Leadership to inspire change. Dedication for nation-building. Reliance on evidence and facts to make informed policy decisions. Emphasis on inclusion and regeneration for a brighter future. These are just a few of the traits that our Master’s in Public Policy (MPP) program will instil in you. MPP is a residential 2-year multi-disciplinary program that gives",
  img: "/academic_1.png",
};
