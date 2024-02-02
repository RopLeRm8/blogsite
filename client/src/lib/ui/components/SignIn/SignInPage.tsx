import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import IconsHandler from "src/lib/hooks/IconsHandler";
import SpacingBox from "../layouts/SpacingBox";
import { useGetGlobalValues } from "src/lib/hooks/useGlobalValues";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Slide,
  Snackbar,
  useTheme,
} from "@mui/material";
import LinkText from "src/lib/ui/customElements/LinkText";
import { useState } from "react";
import useFormsHandlers from "src/lib/hooks/useFormsHandlers";
import { useAuth } from "src/lib/hooks/api/useAuth";
import useSnackbar from "src/lib/hooks/useSnackbar";
export default function SignInPage() {
  const {
    lockIcon: LockIcon,
    googleIcon: GoogleIcon,
    facebookIcon: FacebookIcon,
    emailIcon: EmailIcon,
    visibleIcon: VisibleIcon,
    visibleOffIcon: VisibleOffIcon,
  } = IconsHandler();
  const { font } = useGetGlobalValues();
  const theme = useTheme();
  const [visible, setVisible] = useState<boolean>(false);
  const { visibleHandler } = useFormsHandlers({ setVisible });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { request, loading, data, error, setError, setData } = useAuth<
    string | undefined
  >();
  const snackbar = useSnackbar({ error, data, setError, setData });
  const handleLogin = async () => {
    await request({
      method: "POST",
      url: "/api/user/login",
      data: {
        email,
        password,
        rememberMe,
      },
      withCredentials: true,
    });
  };
  return (
    <SpacingBox>
      <Snackbar
        open={!!error || !!data}
        TransitionComponent={Slide}
        autoHideDuration={4000}
        onClose={() => {
          setError(null);
          setData(undefined);
        }}
      >
        {snackbar()}
      </Snackbar>
      <Grid container direction="column" alignItems="start">
        <Box
          sx={{ display: "flex", alignItems: "center", gap: ".5rem", mb: 3 }}
        >
          <Avatar
            variant="rounded"
            sx={{ background: theme.palette.primary.main }}
          >
            <LockIcon />
          </Avatar>
          <Typography
            sx={{
              fontSize: "120%",
              fontWeight: 900,
              color: theme.palette.primary.main,
            }}
          >
            Blogger
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "2rem",
            my: 1,
            fontWeight: 700,
            color: theme.palette.text.primary,
          }}
        >
          Log in to your Account
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "90%",
            color: theme.palette.text.primary,
          }}
        >
          Welcome back! Select method to log in:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "1rem",
            my: 4,
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: ".5rem",
              alignItems: "center",
              p: 2,
              border: `.5px solid ${theme.palette.text.primary}`,
              width: "50%",
              borderRadius: ".5rem",
            }}
          >
            <GoogleIcon />
            <Typography sx={{ textTransform: "none", fontWeight: 600 }}>
              Google
            </Typography>
          </Button>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: ".5rem",
              alignItems: "center",
              p: 2,
              width: "50%",
              border: `1px solid ${theme.palette.text.primary}`,
              borderRadius: ".5rem",
            }}
          >
            <FacebookIcon />
            <Typography sx={{ textTransform: "none", fontWeight: 600 }}>
              Facebook
            </Typography>
          </Button>
        </Box>
        <Divider
          sx={{
            width: "100%",
            fontFamily: font,
            fontSize: "80%",
            opacity: 0.8,
            "&:before": { borderColor: theme.palette.text.primary },
            "&:after": { borderColor: theme.palette.text.primary },
            color: theme.palette.text.primary,
          }}
        >
          or continue with email
        </Divider>
        <TextField
          variant="outlined"
          placeholder="Email"
          required
          sx={{ my: 3 }}
          fullWidth
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          placeholder="Password"
          required
          fullWidth
          type={visible ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={visibleHandler}>
                  {visible ? <VisibleOffIcon /> : <VisibleIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box
          sx={{
            alignSelf: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CheckBox
              sx={{
                p: 0,
                mr: 1,
                "& .MuiSvgIcon-root": {
                  color: theme.palette.text.primary,
                },
              }}
              onChange={() => setRememberMe((prev) => !prev)}
            />
            <Typography sx={{ color: theme.palette.text.primary }}>
              Remember me
            </Typography>
          </Box>
          <LinkText sx={{ fontSize: "85%" }}>Forgot password?</LinkText>
        </Box>

        <Button
          sx={{ fontFamily: font, mt: 4, textTransform: "none" }}
          variant="contained"
          fullWidth
          size="large"
          onClick={handleLogin}
          disabled={loading}
        >
          {!loading ? "Sign Up" : "Loading"}
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 3,
          }}
        >
          <LinkText link="/register" sx={{ fontSize: "85%", textAlign: "end" }}>
            Don't have an account? Sign Up
          </LinkText>
        </Box>
      </Grid>
    </SpacingBox>
  );
}
