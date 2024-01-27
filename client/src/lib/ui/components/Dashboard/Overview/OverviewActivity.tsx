import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetGlobalValues } from "src/lib/hooks/useGlobalValues";
import IconsHandler from "src/lib/hooks/IconsHandler";
import useGetActivityData from "src/lib/hooks/useGetActivityData";
import ActivityCustomTooltip from "./ActivityCustomTooltip";

export default function OverviewActivity() {
  const { font } = useGetGlobalValues();
  const { syncIcon: SyncIcon } = IconsHandler();
  const data = useGetActivityData();
  const CustomTooltip = ActivityCustomTooltip();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: { xs: "80vw", md: "89%", lg: "50rem" },
        p: 2,
        boxShadow: `0px 2px 7px ${theme.palette.text.primary}`,
        borderRadius: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            p: 3,
            ml: 1,
            fontWeight: 900,
            fontSize: "150%",
            color: theme.palette.text.primary,
          }}
        >
          Activity
        </Typography>
        <IconButton
          sx={{ display: "flex", color: theme.palette.text.primary, mr: 3 }}
        >
          <SyncIcon />
          <Typography
            sx={{ ml: 1, fontWeight: 700, color: theme.palette.text.primary }}
          >
            Sync
          </Typography>
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 400,
          display: "flex",
          justifyContent: { xs: "center", lg: "start" },
          alignItems: "center",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="0 0" style={{ opacity: 0.2 }} />
            <XAxis
              dataKey="month"
              style={{
                fontFamily: font,
                fontSize: "80%",
                color: theme.palette.text.primary,
              }}
            />
            <YAxis
              style={{
                fontFamily: font,
                fontSize: "80%",
                color: theme.palette.text.primary,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="entries"
              fill={theme.palette.primary.main}
              barSize={8}
            />
            <Bar
              dataKey="oldEntries"
              fill={theme.palette.primary.main}
              opacity={0.3}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
