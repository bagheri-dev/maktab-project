import { urls } from "../urls";
import { httpClient } from "../client";
import { sneakers } from "./sneaker.service";

export async function brand() {
    const response = await httpClient().get(urls.sneakers.brands);
    const brands = response.data
    for (let i = 0 ; i < response.data.length ; i++) {
        const containerBrands = document.getElementById("brands-shose")
        const btnBrand = document.createElement("button")
        containerBrands.append(btnBrand)
        btnBrand.textContent = brands[i]
        btnBrand.className = "w-full px-8 rounded-full border border-gray-500"
    }
}