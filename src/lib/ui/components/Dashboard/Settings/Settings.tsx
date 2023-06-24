import Grid from "@mui/material/Grid";
import useGetSettings from "../../../../hooks/useGetSettings";
import {
  Switch,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useGetLanguages from "../../../../hooks/useGetLanguages";
import { useState } from "react";
export default function Settings() {
  const { settingsByCategory } = useGetSettings();
  const langs = useGetLanguages();
  const theme = useTheme();
  const [selectedLang, setSelectedLang] = useState("en");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLang(event.target.value);
  };
  return (
    <>
      <Typography sx={{ color: theme.palette.text.primary, fontSize: "130%" }}>
        Configure settings suitable for you
      </Typography>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent={{ xs: "start", md: "space-evenly" }}
      >
        {Object.entries(settingsByCategory).map(([category, settings]) => (
          <Grid item key={category} sx={{ mt: 10 }}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: "110%",
                    textDecoration: "underline",
                    textDecorationColor: theme.palette.primary.main,
                    textUnderlineOffset: "0.5rem",
                  }}
                >
                  {category}
                </Typography>
              </Grid>
              {settings.map((setting, index) => (
                <Grid item key={index}>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "90%",
                    }}
                  >
                    {setting.name}
                  </Typography>
                  {setting.mode === "switch" ? (
                    <Switch
                      onChange={setting.action}
                      checked={
                        setting.value === "dark" || setting.value === true
                      }
                    />
                  ) : null}
                  {setting.mode === "select" ? (
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <Select
                        placeholder="Age"
                        variant="outlined"
                        size="small"
                        value={selectedLang}
                        onChange={handleChange}
                      >
                        {langs.map((lang) => (
                          <MenuItem key={lang.code} value={lang.code}>
                            {lang.lang}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : null}
                  {setting.mode === "button" ? (
                    <Button
                      sx={{ textTransform: "none", my: 0.5 }}
                      variant="outlined"
                      size="small"
                    >
                      {setting.buttonFill}
                    </Button>
                  ) : null}

                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      opacity: 0.7,
                      fontSize: "70%",
                    }}
                  >
                    {setting.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
