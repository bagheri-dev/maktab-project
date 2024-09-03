import { httpClient } from "../client";
import { urls } from "../urls";

export async function items(id) {
    const response = await httpClient().post(urls.sneakers.item(id))
    return response.data;
}