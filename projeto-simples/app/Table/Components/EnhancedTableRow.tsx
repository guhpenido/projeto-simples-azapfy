import React from 'react';
import { TableRow, TableCell, Checkbox } from "@mui/material";
import { Data } from './Types';

interface EnhancedTableRowProps {
  row: Data;
  isItemSelected: boolean;
  labelId: string;
  onClick: (event: React.MouseEvent<unknown>, id: number) => void;
}

const EnhancedTableRow: React.FC<EnhancedTableRowProps> = (props) => {
  const { row, isItemSelected, labelId, onClick } = props;

  return (
    <TableRow
      hover
      onClick={(event) => onClick(event, row.id)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.quantidade}
      </TableCell>
      <TableCell align="right">R$ {row.vlrUnit}</TableCell>
      <TableCell align="right">R$ {row.valor}</TableCell>
      <TableCell align="right">{row.peso}kg</TableCell>
      <TableCell align="right">{row.volume} uni</TableCell>
      <TableCell align="right">{row.prazoMin}</TableCell>
      <TableCell align="right">{row.prazoMax}</TableCell>
      <TableCell align="right">{row.desc}</TableCell>
    </TableRow>
  );
};

export default EnhancedTableRow;
