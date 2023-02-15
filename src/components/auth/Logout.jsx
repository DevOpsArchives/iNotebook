import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster, ToastBar } from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("Authorization") !== null) {
      sessionStorage.removeItem("Authorization");
      toast.success("User Successfully logged out");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, []);
  return (
    <div>
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
    </div>
  );
};

export default Logout;
