import React from 'react';
import { TableRow, TableCell, Checkbox } from "@mui/material";
import { Data } from '../Utils/Types';

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
      <TableCell align="center">R$ {row.vlrUnit}</TableCell>
      <TableCell align="center">R$ {row.valor}</TableCell>
      <TableCell align="center">{row.peso}kg</TableCell>
      <TableCell align="center">{row.volume} uni</TableCell>
      <TableCell align="center">{row.prazoMin}</TableCell>
      <TableCell align="center">{row.prazoMax}</TableCell>
      <TableCell align="center">{row.desc}</TableCell>
    </TableRow>
  );
};

export default EnhancedTableRow;
