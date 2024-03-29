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
import BetDataGrid from "./BetDataGrid";

const Games = () => {
  const fetchGames = useFetchGames();
  const games = useGames();
  const handleBetCacheData = async (
    options: OnDataOptions<BetCacheSubscription>
  ) => {
    const betCacheGameIds = options.data.data?.betCache
      ?.map((bet) => bet?.gameId)
      .filter((gameId) => typeof gameId === "string") as string[];
    fetchGames({
      variables: { ids: betCacheGameIds, league: LeagueEnum.Nba },
    });
  };
  const { data: betCacheData } = useBetCacheSubscription({
    league: LeagueEnum.Nba,
    betMarketType: BetMarketTypeEnumTypeTwo.MoneyLine,
    onData: handleBetCacheData,
  });

  console.log({ betCacheData });

  const { sites } = useBetSitesQuery();

  return (
    <div>
      <BetDataGrid betData={betCacheData} games={games} sites={sites} />
    </div>
  );
};

export default Games;
