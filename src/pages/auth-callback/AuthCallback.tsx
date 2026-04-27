import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../../services/auth.service";
import { useAuthStore } from "../../store/auth.store";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token =
      params.get("token") ?? params.get("accessToken");

    if (!token) {
      navigate("/?error=oauth_failed", { replace: true });
      return;
    }

    const run = async () => {
      useAuthStore.getState().setAuth(token, null);
      try {
        const user = await fetchProfile();
        useAuthStore.getState().setAuth(token, user);
      } catch {
        // Access token is still valid; user can retry loading profile later.
      }
      navigate("/", { replace: true });
    };

    void run();
  }, [navigate]);

  return <p className="p-4 lato">Signing you in…</p>;
}
