import { Container, Image, Text } from "@nextui-org/react";

import { Layout } from "../layouts";

export const NoFavorites = () => {
  return (
    <Layout title="Pokemon - Favoritos">
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text h1> No hay Favoritos</Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          width={250}
          height={250}
          css={{
            opacity: 0.1,
          }}
        />
      </Container>
    </Layout>
  );
};
