import {
  Grid,
  Box,
  Typography,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useGetOverviewStats from "src/lib/hooks/useGetOverviewStats";
import increaseIcon from "assets/overview/increase.png";
import decreaseIcon from "assets/overview/decrease.png";

export default function OverviewStats() {
  const stats = useGetOverviewStats();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      gap={4}
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
      }}
    >
      {stats.map((stat) => (
        <Box
          sx={{
            display: "block",
            p: 4,
            mt: 7,
            background: `rgba(${stat.color},0.2)`,
            py: 2,
            borderRadius: "20px",
            width: matches ? "100%" : "16rem",
            maxWidth: matches ? "70vw" : "16rem",
            minHeight: "12.5rem",
          }}
          key={stat.label}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: { md: "6rem" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "120%",
                  opacity: 0.5,
                  color: theme.palette.text.primary,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "5vw", md: "2rem" },
                background: `rgb(${stat.color})`,
                borderRadius: "3rem",
                display: "flex",
                justifyContent: "center",
                p: 3,
              }}
            >
              <img
                src={stat.icon}
                alt=""
                style={{
                  maxWidth: matches ? "100%" : "2rem",
                  userSelect: "none",
                }}
              />
            </Box>
          </Box>
          {stats.indexOf(stat) === 3 ? (
            <>
              <Typography
                sx={{
                  fontSize: "300%",
                  fontWeight: 900,
                  height: "2rem",
                  transform: "translateY(-70%)",
                  color: theme.palette.text.primary,
                }}
              >
                {stat.amount}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={stat.amount}
                sx={{ mt: 5, height: ".6vh" }}
              />
            </>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "300%",
                  fontWeight: 900,
                  height: "3rem",
                  transform: "translateY(-50%)",
                  color: theme.palette.text.primary,
                }}
              >
                {stat.amount}
              </Typography>
              {stat.changes && stat.changes > 0 ? (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Box sx={{ maxWidth: "2rem" }}>
                    <img
                      src={increaseIcon}
                      alt=""
                      style={{ maxWidth: "100%", userSelect: "none" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "80%",
                      fontWeight: 900,
                      opacity: 0.6,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {stat.changes}% Since last month
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Box sx={{ maxWidth: "2rem" }}>
                    <img
                      src={decreaseIcon}
                      alt=""
                      style={{ maxWidth: "100%", userSelect: "none" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "80%",
                      fontWeight: 900,
                      opacity: 0.6,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {-(stat.changes ?? 0)}% Since last month
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      ))}
    </Grid>
  );
}
