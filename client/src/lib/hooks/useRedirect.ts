import { useNavigate } from "react-router";

export function useRedirect() {
  const navigate = useNavigate();
  const redirect = (page: string) => navigate(page);
  return redirect;
}
