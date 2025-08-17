import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(3),
  background: "linear-gradient(145deg, #f5f1f8 0%, #ede4f0 100%)",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(139, 90, 159, 0.2)",
}));

export const ResultBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: 12,
  textAlign: "center",
}));
