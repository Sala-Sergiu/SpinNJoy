import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../model/pagination";
import { useState } from "react";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalPages, pageSize, totalCount } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        Displaying {(currentPage - 1) * pageSize + 1} -{" "}
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={pageNumber}
        onChange={(_e, page) => {
          handlePageChange(page);
        }}
      />
    </Box>
  );
}
