import { httpClient } from "../client";
import { urls } from "../urls";

const containerProduct = document.querySelector("#container-product")
const page1 = document.getElementById("totalpages1")
const page2 = document.getElementById("totalpages2")
const page3 = document.getElementById("totalpages3")
const page4 = document.getElementById("totalpages4")
const page5 = document.getElementById("totalpages5")

page1.addEventListener("click" , () => {
    containerProduct.innerHTML = ""
    sneakers();
})

export async function sneakers(params) {
    const response = await httpClient().get(urls.sneakers.sneaker,{params : params});
    const sneakers = response.data
    const productArrat = sneakers.data
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
                        <div class="flex flex-col justify-between gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;

}
page1.addEventListener("click", async () => {
    const response = await httpClient().get(urls.sneakers.sneaker);
    const sneakers = response.data
    const productArrat = sneakers.data
    console.log(sneakers);
    containerProduct.innerHTML = ""
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
            <div class="flex flex-col gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;
})

page2.addEventListener("click", async () => {
    const response = await httpClient().get(urls.sneakers.sneaker2);
    const sneakers = response.data
    const productArrat = sneakers.data
    console.log(sneakers);
    containerProduct.innerHTML = ""
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
            <div class="flex flex-col gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;
})
page3.addEventListener("click", async () => {
    const response = await httpClient().get(urls.sneakers.sneaker3);
    const sneakers = response.data
    const productArrat = sneakers.data
    console.log(sneakers);
    containerProduct.innerHTML = ""
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
            <div class="flex flex-col gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;
})
page4.addEventListener("click", async () => {
    const response = await httpClient().get(urls.sneakers.sneaker4);
    const sneakers = response.data
    const productArrat = sneakers.data
    console.log(sneakers);
    containerProduct.innerHTML = ""
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
            <div class="flex flex-col gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;
})
page5.addEventListener("click", async () => {
    const response = await httpClient().get(urls.sneakers.sneaker5);
    const sneakers = response.data
    const productArrat = sneakers.data
    console.log(sneakers);
    containerProduct.innerHTML = ""
    productArrat.forEach(function (product) {
        containerProduct.insertAdjacentHTML("beforeend" , `<div class="">
            <a href="/product?id=${product.id}">
            <div class="flex flex-col gap-2 p-1 rounded-xl mb-10">
                <div class="">
                    <img class="w-full h-40" src="${product.imageURL}" alt="">
                </div>
                <div class="px-2">
                    <p class="truncate">${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
            </a>
            </div>`)
    }) ;
})