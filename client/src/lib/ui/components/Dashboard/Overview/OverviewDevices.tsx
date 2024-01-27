import { Box, Grid, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import useGetDevicesData from "src/lib/hooks/useGetDevicesData";

export default function OverviewDevices() {
  const data = useGetDevicesData();
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: `0px 2px 7px ${theme.palette.text.primary}`,
        borderRadius: "2rem",
        height: "32.5rem",
        display: "block",
        justifyContent: "center",
        maxWidth: "88vw",
        minWidth: { xs: "87vw", sm: "84vw", md: "66vw", xl: "30rem" },
        mb: { xs: 3, xl: 0 },
      }}
    >
      <Typography
        sx={{
          pl: 4,
          pt: 4,
          fontWeight: 900,
          fontSize: "150%",
          color: theme.palette.text.primary,
        }}
      >
        Activity Devices
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <PieChart
          width={400}
          height={400}
          style={{ transform: "translateY(-10%)" }}
        >
          <Pie
            data={data}
            cx={200}
            cy={200}
            outerRadius={150}
            innerRadius={90}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={data[index].color}
                stroke="none"
              />
            ))}
          </Pie>
        </PieChart>
      </Box>
      <Grid
        container
        direction="column"
        gap={1}
        alignItems="center"
        sx={{ transform: "translateY(-70%)" }}
      >
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          {data.map((device, ind) => (
            <Box
              key={ind}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".2rem",
              }}
            >
              <Box sx={{ width: "1.5rem" }}>
                <img
                  src={device.icon}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    filter:
                      theme.palette.mode === "dark"
                        ? "invert(100%) brightness(1000%)"
                        : "",
                    userSelect: "none",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "110%",
                  color: theme.palette.text.primary,
                }}
              >
                {device.name}
              </Typography>
              <Typography sx={{ color: device.color }}>
                {device.value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
}
