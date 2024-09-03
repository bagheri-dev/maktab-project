import { removeSessionToken } from "./session-manager";
import { toast } from "./toast";

export const errorHandler = (error) => {
  const massage = error.response?.data?.massage;
  if (typeof massage === "string") {
  } else if (Array.isArray(massage)) {
    for (const msgText of massage) {
      toast(msgText);
    }
  }

  const statusCode = Number(error.response?.data?.statusCode || 0)
  if (statusCode === 403) {
    toast("Please login again");
    removeSessionToken();
    setTimeout(() => {
        window.location.href = "/login"
    }, 3000);
  }
  if (statusCode === 400) {
    toast("Please enter the correct username and password");
  }
  if (statusCode === 404) {
    toast("User with this profile was not found");
  }
};
