import { GridColDef } from "@mui/x-data-grid";
import { BetGridDataAdapterInput } from "./types";

const getSitesColumns = ({
  sites,
  renderCell,
}: Pick<BetGridDataAdapterInput, "sites" | "renderCell">): GridColDef[] =>
  sites.constants?.betSites
    ? sites.constants?.betSites?.map((site) => ({
        field: site?.enumValue || "",
        headerName: site?.name || "",
        width: 150,
        renderCell,
      }))
    : [];

export const getColumns = ({
  sites,
  renderCell,
}: Pick<BetGridDataAdapterInput, "sites" | "renderCell">): GridColDef[] => {
  const teamsColumn: GridColDef = {
    field: "teams",
    headerName: "Teams",
    width: 150,
    renderCell,
  };

  const bestLineColumn: GridColDef = {
    field: "bestLine",
    headerName: "BestLine",
    width: 150,
    renderCell,
  };

  return [
    teamsColumn,
    bestLineColumn,
    ...getSitesColumns({ sites, renderCell }),
  ];
};
