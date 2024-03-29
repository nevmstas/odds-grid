import {
  BetCacheSubscription,
  BetSitesQuery,
  GetGamesQuery,
} from "@/__generated__/graphql";
import { GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";

export interface BetGridDataAdapterInput {
  betData: BetCacheSubscription;
  games: GetGamesQuery;
  sites: BetSitesQuery;
  renderCell: (
    params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
  ) => any;
}
