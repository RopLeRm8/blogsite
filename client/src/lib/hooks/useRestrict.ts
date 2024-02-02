import { useLocation } from "react-router";
import { useRedirect } from "./useRedirect";
import { IUser } from "src/contexts/AuthContext";

type IRestrict = {
  loading: boolean;
  data: IUser | undefined;
};
export default function useRestrict({ loading, data }: IRestrict) {
  const redirect = useRedirect();
  const location = useLocation();
  const restrict = () => {
    const path = location.pathname;
    if (loading) return;
    if (data) {
      if (path === "/login" || path === "/register") {
        redirect("/home");
      }
    } else {
      if (path !== "/login" && path !== "/register") {
        redirect("/login");
      }
    }
  };
  return restrict;
}
