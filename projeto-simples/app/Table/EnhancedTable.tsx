import React, { useState, useEffect } from 'react';
import {
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    FormControlLabel,
    Switch,
    Table,
    Box,
  } from "@mui/material";
import useStore from "../Form/hooks/useStore";
import { formatNumber } from '../Form/hooks/formatters';
import EnhancedTableHead from './Components/EnhancedTableHead';
import EnhancedTableToolbar from './Components/EnhancedTableToolbar';
import EnhancedTableRow from './Components/EnhancedTableRow';
import EnhancedTablePagination from './Components/EnhancedTablePagination';
import { Data, Order } from './Utils/Types';
import { createData } from './Utils/DataUtils';
import { headCells } from './Utils/HeadCells';
import { getComparator } from './Utils/ComparatorUtils';

const EnhancedTable: React.FC = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("valor");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const products = useStore((state) => state.products);
  const removeProductById = useStore((state) => state.removeProductById);
  const [rows, setRows] = useState<Data[]>([]);

  useEffect(() => {
    console.log("products", products);
    const newRows = products.map((produto, index) => createData(
      index,
      produto.quantidade.toString(),
      produto.vlrUnit.toString(),
      produto.valor.toString(),
      produto.peso,
      produto.volume,
      produto.prazoMin,
      produto.prazoMax,
      produto.desc
    ));
    setRows(newRows);
  }, [products]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => [...rows].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  const handleDelete = () => {
    selected.forEach((id) => {
      removeProductById(id);
    });
    setSelected([]);
  };

  return (
    <Box sx={{ width: "100%", padding: "4" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} onDelete={handleDelete} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <EnhancedTableRow
                    key={row.id}
                    row={row}
                    isItemSelected={isItemSelected}
                    labelId={labelId}
                    onClick={handleClick}
                  />
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell align='center' colSpan={headCells.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <EnhancedTablePagination
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Comprimir tabela"
      />
    </Box>
  );
};

export default EnhancedTable;
