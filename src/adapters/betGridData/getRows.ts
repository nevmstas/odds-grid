import { BetCacheSubscription } from "@/__generated__/graphql";
import { BetGridDataAdapterInput } from "./types";

//get type of array
type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Listings = NonNullable<
  ArrayElement<NonNullable<BetCacheSubscription["betCache"]>>
>["listings"];

type TeamListingsByGameId = {
  [gameId: string]: {
    [teamId: string]: Listings;
  };
};

const getTeamListingsByGameId = ({
  betData,
}: Pick<BetGridDataAdapterInput, "betData">) => {
  if (!betData.betCache) {
    return {} as TeamListingsByGameId;
  }

  return betData.betCache?.reduce((acc, bet) => {
    if (!bet?.gameId) {
      return acc;
    }

    const teamId = bet.conditions?.[0]?.teamId;
    const listings = bet.listings;
    if (!teamId || !listings) {
      return acc;
    }

    return {
      ...acc,
      [bet.gameId]: {
        ...acc[bet.gameId],
        [teamId]: listings,
      },
    };
  }, {} as TeamListingsByGameId);
};

const getTeamOddsBySiteId = ({ teamListings }: { teamListings: Listings }) => {
  let bestLine = Number.NEGATIVE_INFINITY;
  return teamListings?.reduce((acc, listing) => {
    if (!listing) {
      return acc;
    }

    bestLine = Math.max(
      listing.americanOdds ?? Number.NEGATIVE_INFINITY,
      bestLine
    );

    return {
      ...acc,
      bestLine: bestLine.toString(),
      [listing.siteId]: listing.americanOdds?.toString() ?? "",
    };
  }, {} as Record<string, string>);
};

const getOddsBySiteId = ({
  homeTeamListings,
  awayTeamListings,
}: {
  homeTeamListings: Listings;
  awayTeamListings: Listings;
}) => {
  const homeOddsBySiteId = getTeamOddsBySiteId({
    teamListings: homeTeamListings,
  });

  const awayOddsBySiteId = getTeamOddsBySiteId({
    teamListings: awayTeamListings,
  });

  return Object.entries(awayOddsBySiteId ?? {}).reduce(
    (acc, [siteId, odd]) => ({
      ...acc,
      [siteId]: [odd, homeOddsBySiteId?.[siteId]].filter(Boolean) as string[],
    }),
    {} as Record<string, string[]>
  );
};

export const getRows = ({
  games,
  betData,
}: Pick<BetGridDataAdapterInput, "games" | "betData">) => {
  const teamListingsByGameId = getTeamListingsByGameId({ betData });
  const rowsByGameId = games?.games?.reduce((acc, game) => {
    if (!game?.id) {
      return acc;
    }

    const gameListings = teamListingsByGameId[game.id];
    if (!gameListings) {
      return acc;
    }

    const homeTeamListings = gameListings[game.homeTeamId];
    const awayTeamListings = gameListings[game.awayTeamId];

    const oddsBySiteId = getOddsBySiteId({
      homeTeamListings,
      awayTeamListings,
    });

    return {
      ...acc,
      [game.id]: {
        id: game.id,
        teams: [game.homeTeam?.name, game.awayTeam?.name],
        ...oddsBySiteId,
      },
    };
  }, {} as Record<string, any>);

  return rowsByGameId ? Object.values(rowsByGameId) : [];
};
