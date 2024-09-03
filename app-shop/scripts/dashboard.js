import { brand } from "../apis/services/brand.service";
import { sneakers } from "../apis/services/sneaker.service";
import { getUserInfo } from "../apis/services/user.service";
import { errorHandler } from "../libs/error-handler";
import { toast } from "../libs/toast";

const username = document.getElementById("user-name")
const containerBrands = document.getElementById("brands-shose")
const btnLogout = document.getElementById("logout")

async function init() {
  try {
    const response = await getUserInfo();
    username.innerText = response.username
  } catch (error) {
    errorHandler(error);
  }
}

async function product() {
  try {
    const response = await sneakers(); 
  } catch (error) {
    errorHandler(error);
  }
}
function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
      greeting = "good morning";
  } else if (hour >= 12 && hour < 18) {
      greeting = "good evening";
  } else {
      greeting = "good night";
  }

  document.getElementById('greeting').innerText = greeting;
}

btnLogout.addEventListener("click" , () => {
  toast("logout successful" , "successful")
    setTimeout(() => {
      localStorage.removeItem('sneaker-store-server-token');
      window.location.href = '/login'
    }, 3000);
})

showGreeting();
init();
brand();
product();