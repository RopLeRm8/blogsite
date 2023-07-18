import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/LockOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SyncIcon from "@mui/icons-material/Sync";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function IconsHandler() {
  const lockIcon = () => <LockIcon />;
  const manageIcon = () => <ManageAccountsIcon />;
  const signalIcon = () => <SignalCellularAltIcon />;
  const dashboardIcon = () => <DashboardIcon />;
  const blogsIcon = () => <RateReviewIcon />;
  const accountIcon = () => <PersonIcon />;
  const settingsIcon = () => <SettingsIcon />;
  const registerIcon = () => <PersonAddAlt1Icon />;
  const searchIcon = () => <SearchIcon />;
  const peopleIcon = () => <PeopleIcon />;
  const notificationsIcon = () => <NotificationsIcon />;
  const syncIcon = () => <SyncIcon />;
  const googleIcon = () => <GoogleIcon />;
  const facebookIcon = () => <FacebookIcon />;
  const emailIcon = () => <EmailIcon />;
  const visibleIcon = () => <VisibilityOutlinedIcon />;
  const visibleOffIcon = () => <VisibilityOffOutlinedIcon />;
  const usernameIcon = () => <DriveFileRenameOutlineIcon />;
  const friendRequestIcon = () => <PersonAddIcon />;
  const confirmIcon = () => <CheckIcon />;
  const closeIcon = () => <CloseIcon />;
  const darkModeIcon = () => <DarkModeIcon />;
  const lightModeIcon = () => <LightModeIcon />;
  return {
    lockIcon,
    manageIcon,
    signalIcon,
    dashboardIcon,
    blogsIcon,
    accountIcon,
    registerIcon,
    settingsIcon,
    searchIcon,
    peopleIcon,
    notificationsIcon,
    syncIcon,
    googleIcon,
    facebookIcon,
    emailIcon,
    visibleIcon,
    visibleOffIcon,
    usernameIcon,
    friendRequestIcon,
    confirmIcon,
    closeIcon,
    darkModeIcon,
    lightModeIcon,
  };
}
