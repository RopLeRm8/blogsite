import {
  Avatar,
  TextField,
  Typography,
  Grid,
  useTheme,
  InputAdornment,
  IconButton,
  Snackbar,
  Slide,
} from "@mui/material";
import IconsHandler from "../../../hooks/IconsHandler";
import SpacingBox from "../layouts/SpacingBox";
import { Box, Button } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import LinkText from "../../customElements/LinkText";
import { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";
import { useGetGlobalValues } from "../../../hooks/useGlobalValues";
import useFormsHandlers from "../../../hooks/useFormsHandlers";
import { useRegister } from "src/lib/hooks/api/useRegister";
import useSnackbar from "../../../hooks/useSnackbar";
export default function SignUpPage() {
  const [modalOpenPolicy, setModalOpenPolicy] = useState<boolean>(false);
  const [modalOpenTerms, setModalOpenTerms] = useState<boolean>(false);
  const theme = useTheme();
  const { font } = useGetGlobalValues();
  const [visible, setVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const {
    lockIcon: LockIcon,
    emailIcon: EmailIcon,
    visibleIcon: VisibleIcon,
    visibleOffIcon: VisibleOffIcon,
    usernameIcon: UsernameIcon,
  } = IconsHandler();

  const { openModalPolicyHandler, openModalTermsHandler, visibleHandler } =
    useFormsHandlers({ setModalOpenPolicy, setModalOpenTerms, setVisible });
  const { request, error, data, setError, setData, loading } =
    useRegister<string>();
  const snackbar = useSnackbar({ error, data, setError, setData });

  const handleRegister = async () => {
    await request({
      method: "POST",
      url: "/api/user/register",
      data: {
        username,
        email,
        password,
        checked,
      },
    });
  };
  return (
    <>
      <TermsModal isOpen={modalOpenTerms} setIsOpen={setModalOpenTerms} />
      <PrivacyModal isOpen={modalOpenPolicy} setIsOpen={setModalOpenPolicy} />
      <Snackbar
        open={!!error || (!error && !!data)}
        TransitionComponent={Slide}
        autoHideDuration={4000}
        onClose={() => {
          setError(null);
          setData(null);
        }}
      >
        {snackbar()}
      </Snackbar>

      <SpacingBox>
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
            Register new account
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Username"
            required
            sx={{ mt: 3 }}
            fullWidth
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UsernameIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
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

          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex" }}>
              <CheckBox
                sx={{
                  p: 0,
                  mr: 1,
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                onChange={() => setChecked((prev) => !prev)}
              />
              <Typography sx={{ color: theme.palette.text.primary }}>
                I have read and agree to the
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.3rem" }}>
              <LinkText
                action={openModalPolicyHandler}
                sx={{ fontSize: "85%" }}
              >
                Privacy Policy
              </LinkText>
              <Typography sx={{ color: theme.palette.text.primary }}>
                &
              </Typography>
              <LinkText action={openModalTermsHandler} sx={{ fontSize: "85%" }}>
                Terms of Service
              </LinkText>
            </Box>
          </Box>

          <Button
            sx={{ fontFamily: font, mt: 4, textTransform: "none" }}
            variant="contained"
            fullWidth
            size="large"
            onClick={handleRegister}
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
            <LinkText link="/login" sx={{ fontSize: "85%", textAlign: "end" }}>
              Already have an account? Log in
            </LinkText>
          </Box>
        </Grid>
      </SpacingBox>
    </>
  );
}
