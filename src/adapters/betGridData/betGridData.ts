import { BetGridDataAdapterInput } from "./types";
import { getColumns } from "./getColumns";
import { getRows } from "./getRows";

export const betGridDataAdapter = ({
  betData,
  sites,
  games,
  renderCell,
}: BetGridDataAdapterInput) => {
  const columns = getColumns({ sites, renderCell });
  const rows = getRows({ games, betData });

  return {
    columns,
    rows,
  };
};
