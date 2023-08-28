import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { GetServerSideProps } from "next";

//Types
import { homeProps } from "@/common/types/home.type";

//Redux
import { useAppDispatch } from "@/store/hooks";

//Components
import CharacterList from "@/components/characters/CharacterList";

//Queries
import { GET_CHARACTERS } from "@/common/graphql/character-query";
import { useEffect } from "react";
import { setCharacters } from "@/store/characters/actions";

//graphql
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const Home = ({ characters }: homeProps) => {
  //Redux
  const dispatch = useAppDispatch();

  //Effects
  useEffect(() => {
    setCharactersFunc();
  }, [characters]);

  //Functions
  async function setCharactersFunc() {
    await dispatch(setCharacters(characters || []));
  }

  return (
    <ApolloProvider client={client}>
      <div className="my-10">
        <Head>
          <title>Rick and Morty Characters</title>
        </Head>
        <CharacterList />
      </div>
    </ApolloProvider>
  );
};

export const getServerSideProps: GetServerSideProps<homeProps> = async () => {
  const { data } = await client.query({
    query: GET_CHARACTERS,
  });

  const characters = data.characters.results;

  return {
    props: {
      characters,
    },
  };
};

export default Home;
