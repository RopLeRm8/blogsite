import { Box, Typography } from "@mui/material";

interface Payload {
  color: string;
  dataKey: string;
  fill: string;
  name: string;
  payload: {
    month: string;
    entries: number;
    oldEntries: number;
  };
  value: number;
}

interface ToolTipProps {
  active?: boolean;
  payload?: Payload[];
  label?: string;
}

export default function ActivityCustomTooltip() {
  const CustomTooltip = ({ active, payload, label }: ToolTipProps) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            padding: 3,
          })}
        >
          <Typography sx={{ fontSize: "120%" }}>Month {label}</Typography>
          <Typography color="primary" component="p">
            Activity : {payload[0].value}
          </Typography>
          <Typography color="primary" component="p">
            Last Year Activity : {payload[1].value}
          </Typography>
        </Box>
      );
    }
    return null;
  };
  return CustomTooltip;
}
