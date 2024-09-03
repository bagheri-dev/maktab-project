import { login } from "../apis/services/auth.service";
import { errorHandler } from "../libs/error-handler";
import { setSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";

const loginForm = document.getElementById("login-form");
const backPage = document.getElementById("back-page")
backPage.addEventListener("click", () => {
  window.location.href = "/";
})
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const usernameInput =
    event.target.children[0].children[1].children[0].children[1];
  const passwordInput =
event.target.children[0].children[1].children[1].children[1];
    try {
      const response = await login({
            username: usernameInput.value,
            password: passwordInput.value,
          });
          console.log(response);
          setSessionToken(response.token)
          toast("successful login" , "successful")
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 3000);
    } catch (error) {
        errorHandler(error);
    }
});
