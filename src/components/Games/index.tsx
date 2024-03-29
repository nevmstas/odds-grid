"use client";
import {
  BetCacheSubscription,
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
} from "@/__generated__/graphql";
import { useFetchGames, useGames } from "@/graphql/queries/games";
import { useBetCacheSubscription } from "@/graphql/subscriptions/betCache";
import { OnDataOptions } from "@apollo/client";
import { useBetSitesQuery } from "@/graphql/queries/betSites";
import BetDataGrid from "../BetDataGrid";

const Games = () => {
  const { fetchGames, loading: gamesLoading } = useFetchGames();
  const games = useGames();

  const handleBetCacheData = async (
    options: OnDataOptions<BetCacheSubscription>
  ) => {
    if (!options.data.data?.betCache) {
      return;
    }

    const betCacheGameIds = options.data.data.betCache
      ?.map((bet) => bet?.gameId)
      .filter((gameId) => typeof gameId === "string") as string[];
    fetchGames({
      variables: { ids: betCacheGameIds, league: LeagueEnum.Nba },
    });
  };
  const { data: betCacheData, loading: betCacheLoading } =
    useBetCacheSubscription({
      league: LeagueEnum.Nba,
      betMarketType: BetMarketTypeEnumTypeTwo.MoneyLine,
      onData: handleBetCacheData,
    });

  const { data: sites, loading: sitesLoading } = useBetSitesQuery();

  return (
    <div>
      <BetDataGrid
        betData={betCacheData}
        games={games}
        sites={sites}
        isLoading={gamesLoading || betCacheLoading || sitesLoading}
      />
    </div>
  );
};

export default Games;
