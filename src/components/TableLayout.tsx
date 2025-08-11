import { Box, Typography, Stack } from "@mui/material";
import { theme } from "../theme";

interface TableLayoutProps {
  tableNumber: number;
  partnerTableNumber?: number;
}

const TableLayout = ({ tableNumber, partnerTableNumber }: TableLayoutProps) => {
  // Define table groups for each column
  const leftColumn = {
    top: [13, 14, 15, 16, 17, 18],
    bottom: [19, 20, 21, 22, 23, 24],
  };

  const middleColumn = {
    top: [12, 11, 10, 9, 8, 7],
    bottom: [30, 29, 28, 27, 26, 25],
  };

  const rightColumn = {
    top: [1, 2, 3, 4, 5, 6],
    bottom: [31, 32, 33, 34, 35, 36],
  };

  const vendorTables = [37, 38];

  const renderTable = (
    tableNum: number,
    isSelected: boolean = false,
    isTop: boolean = false,
    isBottom: boolean = false,
    isVendor: boolean = false
  ) => (
    <Box
      key={tableNum}
      sx={{
        width: "40px",
        height: "40px",
        border: `1px solid ${theme.palette.primary.light}`,
        borderBottom:
          isVendor || isBottom
            ? `1px solid ${theme.palette.primary.light}`
            : "none",
        borderTopLeftRadius: isVendor || isTop ? "4px" : "0px",
        borderTopRightRadius: isVendor || isTop ? "4px" : "0px",
        borderBottomLeftRadius: isVendor || isBottom ? "4px" : "0px",
        borderBottomRightRadius: isVendor || isBottom ? "4px" : "0px",
        backgroundColor: isSelected ? theme.palette.primary.main : "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: isSelected ? "bold" : "normal",
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        color={isSelected ? "white" : theme.palette.primary.light}
      >
        {tableNum}
      </Typography>
    </Box>
  );

  const renderColumn = (
    column: { top: number[]; bottom: number[] },
    showLabel: boolean = false
  ) => (
    <Stack spacing={2} alignItems="center">
      {/* Chuppah gap */}
      <Box
        sx={{
          height: "24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "black", fontStyle: "italic" }}
        >
          {showLabel ? "Chuppah / Front Entrance" : ""}
        </Typography>
      </Box>

      {/* Top substack */}
      <Stack alignItems="center">
        {column.top.map((tableNum, index) =>
          renderTable(
            tableNum,
            tableNum === tableNumber || tableNum === partnerTableNumber,
            index === 0,
            index === column.top.length - 1
          )
        )}
      </Stack>

      {/* Dance floor gap */}
      <Box
        sx={{
          height: "24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#666", fontStyle: "italic" }}
        >
          {showLabel ? "Dance Floor" : ""}
        </Typography>
      </Box>

      {/* Bottom substack */}
      <Stack alignItems="center">
        {column.bottom.map((tableNum, index) =>
          renderTable(
            tableNum,
            tableNum === tableNumber || tableNum === partnerTableNumber,
            index === 0,
            index === column.bottom.length - 1
          )
        )}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        width: "100%",
        paddingY: 3,
      }}
    >
      {/* Main table layout */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        {renderColumn(leftColumn)}
        {renderColumn(middleColumn, true)}
        {renderColumn(rightColumn)}
      </Stack>

      {/* Vendor tables */}
      <Box sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={8} alignItems="center">
          {vendorTables.map((tableNum) =>
            renderTable(
              tableNum,
              tableNum === tableNumber || tableNum === partnerTableNumber,
              false,
              false,
              true
            )
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default TableLayout;
