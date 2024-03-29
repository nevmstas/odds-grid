import {
  BetCacheSubscription,
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
} from "@/__generated__/graphql";
import { OnDataOptions, gql, useSubscription } from "@apollo/client";

const BET_CACHE = gql`
  subscription BetCache(
    $league: LeagueEnum!
    $betMarketType: BetMarketTypeEnumTypeTwo!
  ) {
    betCache(request: { league: $league, betMarketType: $betMarketType }) {
      gameId
      listings {
        americanOdds
        foundDateTime
        isPrimary
        marketId
        selectionId
        site {
          abbreviation
          enumValue
          fullImage
          iconImage
          id
          isSisterSite
          name
          sisterSiteIds
        }
        siteId
      }
      conditions {
        betValue
        betValueMax
        marketType
        overUnder
        playerId
        teamId
      }
    }
  }
`;

interface IProps {
  league: LeagueEnum;
  betMarketType: BetMarketTypeEnumTypeTwo;
  onData?: (options: OnDataOptions<BetCacheSubscription>) => void;
}

export const useBetCacheSubscription = ({
  league,
  betMarketType,
  onData,
}: IProps) => {
  return useSubscription<BetCacheSubscription>(BET_CACHE, {
    variables: { league, betMarketType },
    onData,
  });
};
