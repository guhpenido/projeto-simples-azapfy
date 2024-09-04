import { HeadCell } from './Types';

export const headCells: readonly HeadCell[] = [
  { id: "quantidade", numeric: false, disablePadding: true, label: "Quantidade" },
  { id: "vlrUnit", numeric: false, disablePadding: false, label: "Valor Unitário" },
  { id: "valor", numeric: false, disablePadding: false, label: "Valor" },
  { id: "peso", numeric: false, disablePadding: false, label: "Peso" },
  { id: "volume", numeric: false, disablePadding: false, label: "Volume" },
  { id: "prazoMin", numeric: false, disablePadding: false, label: "Prazo Mínimo" },
  { id: "prazoMax", numeric: false, disablePadding: false, label: "Prazo Máximo" },
  { id: "desc", numeric: false, disablePadding: false, label: "Descrição" },
];
