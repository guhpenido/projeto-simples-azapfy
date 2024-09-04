import React from 'react';
import { TablePagination } from "@mui/material";

interface EnhancedTablePaginationProps {
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EnhancedTablePagination: React.FC<EnhancedTablePaginationProps> = (props) => {
  const { count, rowsPerPage, page, onPageChange, onRowsPerPageChange } = props;

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default EnhancedTablePagination;
