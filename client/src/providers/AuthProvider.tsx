import { useEffect, useMemo } from "react";
import { useAuth } from "src/lib/hooks/api/useAuth";
import AuthContext, { IUser } from "src/contexts/AuthContext";
import useRestrict from "src/lib/hooks/useRestrict";
interface IAuth {
  children: JSX.Element;
}

const AuthProvider = ({ children }: IAuth) => {
  const { request, data, loading } = useAuth<IUser | undefined>(true);
  const restrict = useRestrict({ loading, data });
  const handleLogin = async () => {
    await request({
      method: "GET",
      url: "/api/user/authenticate",
      withCredentials: true,
    });
  };

  useMemo(() => {
    handleLogin();
  }, []);

  useEffect(() => {
    restrict();
  }, [data, loading]);

  return (
    <AuthContext.Provider value={{ user: data }}>
      {loading ? <div style={{ color: "red" }}>LOADING...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
