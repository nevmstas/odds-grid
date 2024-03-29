import { GetGamesQuery, GetGamesQueryVariables } from "@/__generated__/graphql";
import {
  LazyQueryHookExecOptions,
  gql,
  useApolloClient,
  useLazyQuery,
} from "@apollo/client";
import { useMemo } from "react";

export const GET_GAMES = gql`
  query GetGames($ids: [Guid]!, $league: LeagueEnum!) {
    games(ids: $ids, league: $league) {
      ... on NBAGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on NFLGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on NCAAFGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on NCAABGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on NHLGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on EuroLeagueBBGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on EUFAChampionsGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on LaLlgaGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on EnglishPremierGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on FrenchLigue1GameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on GermanBundesligaGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on ItalianSeriaAGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
      ... on MLBGameType {
        id
        awayTeamId
        homeTeamId
        awayTeam {
          name
        }
        homeTeam {
          name
        }
      }
    }
  }
`;

export const useFetchGames = () => {
  const client = useApolloClient();

  const [fetch, _] = useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(
    GET_GAMES,
    {
      // Caching will be customized below
      fetchPolicy: "no-cache",
    }
  );

  const getExistingIdsSet = () => {
    const existingData = client.readQuery<GetGamesQuery>({
      query: GET_GAMES,
    });

    const existingIds = existingData?.games
      ? (existingData.games
          .map((game) => game?.id)
          .filter((gameId) => gameId !== "string") as string[])
      : [];

    return new Set(existingIds);
  };

  const customFetch = async (
    options: LazyQueryHookExecOptions<GetGamesQuery, GetGamesQueryVariables>
  ) => {
    const existingIdsSet = getExistingIdsSet();
    const ids = options?.variables?.ids as string[];
    const idsToFetch = ids.filter((id) => !existingIdsSet.has(id));

    if (!options?.variables?.league || idsToFetch.length === 0) {
      return;
    }

    const result = await fetch({
      variables: {
        league: options.variables.league,
        ids: idsToFetch,
      },
    });

    if (result.data) {
      client.writeQuery<GetGamesQuery>({
        query: GET_GAMES,
        data: result.data,
      });
    }

    return result;
  };

  return customFetch;
};

export const useGames = () => {
  const client = useApolloClient();
  return client.readQuery<GetGamesQuery>({ query: GET_GAMES });
};
