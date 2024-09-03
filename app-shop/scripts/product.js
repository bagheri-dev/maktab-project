import { httpClient } from "../apis/client"
import { urls } from "../apis/urls"

const backBtn = document.getElementById("back")
backBtn.addEventListener("click" , () => {
    history.back();
})
const shoeTitle = document.querySelector("#title-shoe")
const shoeimage = document.querySelector("#image-shoe")
const sizesList = document.querySelector("#size-list")
const colorsList = document.querySelector("#color-list")
const btnMinus = document.querySelector("#btn-minus")
const btnPlus = document.querySelector("#btn-plus")
const count = document.querySelector("#count")
const totalPrice = document.querySelector("#total-price")
let numCount = 0

const locationParams = new URLSearchParams(location.search)
const mainProductId = locationParams.get("id")
// console.log(mainProductId);

async function productItems(id) {
    const response = await httpClient().get(urls.sneakers.item(id));
    const sneakers = response.data
    shoeTitle.innerHTML = sneakers.name
    shoeimage.setAttribute("src" , sneakers.imageURL)
    shoeimage.setAttribute("class" , "w-full")
    const colorList = sneakers.colors.split("|")
    const sizeList = sneakers.sizes.split("|")
    for (let i = 0 ; i < sizeList.length ; i++) {
        sizesList.insertAdjacentHTML("beforeend" , `<button id="${sizeList[i]}" class="border border-slate-400 px-3 py-2 rounded-full">${sizeList[i]}</button>`)
    }
    for (let i = 0 ; i < colorList.length ; i++) {
        colorsList.insertAdjacentHTML("beforeend" , `<button id="${colorList[i]}" style="background-color: ${colorList[i]}; border: 1px solid silver; width: 40px; height: 40px;  border-radius: 50%;"></button>`)
        let btnColor = document.querySelector(`#${colorList[i]}`)        
        btnColor.addEventListener("click" , () => {
            btnColor.innerHTML = ""
            btnColor.innerHTML = `<i class="fa fa-check"></i>`
        })
    }
    btnPlus.addEventListener("click" , () => {
        numCount ++
        count.innerHTML = numCount
        totalPrice.innerHTML = numCount * sneakers.price
    })
    btnMinus.addEventListener("click" , () => {
        if (numCount > 0) {
            numCount --
            count.innerHTML = numCount
            totalPrice.innerHTML = numCount * sneakers.price
        } else {
            count.innerHTML = numCount
        }
    })
}
productItems(mainProductId);