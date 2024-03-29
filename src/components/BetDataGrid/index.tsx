"use client";
import React, { useMemo } from "react";
import {
  BetCacheSubscription,
  BetSitesQuery,
  GetGamesQuery,
} from "@/__generated__/graphql";
import {
  DataGrid,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { betGridDataAdapter } from "@/adapters/betGridData/betGridData";

interface IBetDataGrid {
  betData?: BetCacheSubscription;
  games?: GetGamesQuery | null;
  sites?: BetSitesQuery;
}

const renderCell = (
  params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
) => {
  if (params.value)
    return (
      <div>
        <Typography variant="subtitle1">{params.value[0]}</Typography>
        <Typography variant="subtitle1">{params.value[1]}</Typography>
      </div>
    );
};

const BetDataGrid = ({
  betData = {},
  sites = {},
  games = {},
}: IBetDataGrid) => {
  const { rows, columns } = useMemo(
    () =>
      betGridDataAdapter({
        betData,
        sites,
        games: games || {},
        renderCell,
      }),
    [betData, sites, games, renderCell]
  );

  return (
    <div style={{ height: 1000 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowHeight={70}
        scrollbarSize={10}
        sx={{
          "* ::-webkit-scrollbar": {
            "-webkit-appearance": "none",
            width: "7px",
            height: "7px",
          },
          "* ::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            backgroundColor: "rgba(0, 0, 0, .5)",
          },
        }}
      />
    </div>
  );
};

export default BetDataGrid;
