import Grid from "@mui/material/Grid";
import useGetSettings from "src/lib/hooks/useGetSettings";
import {
  Switch,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useGetLanguages from "src/lib/hooks/useGetLanguages";
import { useState } from "react";
import IconsHandler from "src/lib/hooks/IconsHandler";
interface IconContainer {
  checked: boolean;
}
export default function Settings() {
  const IconContainer = styled("div")<IconContainer>(({ theme, checked }) => ({
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    backgroundColor: checked ? theme.CustomColors.backgroundColor : "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const { settingsByCategory } = useGetSettings();
  const langs = useGetLanguages();
  const theme = useTheme();
  const [selectedLang, setSelectedLang] = useState("en");
  const { darkModeIcon: DarkIcon, lightModeIcon: LightIcon } = IconsHandler();
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
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "space-evenly" }}
      >
        {Object.entries(settingsByCategory).map(([category, settings]) => (
          <Grid item key={category} sx={{ mt: 10 }}>
            <Grid container direction="column" spacing={{ xs: 1, md: 4 }}>
              <Grid item>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: "110%",
                    textDecoration: "underline",
                    textDecorationColor: theme.palette.primary.main,
                    textUnderlineOffset: "0.5rem",
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  {category}
                </Typography>
              </Grid>
              {settings.map((setting, index) => (
                <Grid item key={index}>
                  <Grid
                    container
                    direction="column"
                    alignItems={{ xs: "center", md: "flex-start" }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.text.primary,
                        fontSize: "90%",
                      }}
                    >
                      {setting.name}
                    </Typography>
                    {setting.mode === "switch" &&
                      (setting.name === "Dark mode" ? (
                        <Switch
                          onChange={setting.action}
                          checked={
                            setting.value === "dark" || setting.value === true
                          }
                          icon={
                            <IconContainer checked={false}>
                              <LightIcon />
                            </IconContainer>
                          }
                          checkedIcon={
                            <IconContainer checked={true}>
                              <DarkIcon />
                            </IconContainer>
                          }
                        />
                      ) : (
                        <Switch
                          onChange={setting.action}
                          checked={
                            setting.value === "dark" || setting.value === true
                          }
                        />
                      ))}
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
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
