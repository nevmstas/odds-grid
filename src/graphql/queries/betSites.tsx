import { BetSitesQuery } from "@/__generated__/graphql";
import { gql, useQuery } from "@apollo/client";

const BET_SITES = gql`
  query BetSites {
    constants {
      betSites {
        abbreviation
        enumValue
        fullImage
        iconImage
        id
        isSisterSite
        name
        sisterSiteIds
      }
    }
  }
`;

export const useBetSitesQuery = () => {
  return useQuery<BetSitesQuery>(BET_SITES);
};
