import { FC, ReactNode } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Ricardo Noya Camacho" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
