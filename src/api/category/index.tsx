import { unauthorizedClient } from "../apiClient";

export async function getAllCategories(): Promise<any> {
  const response = await unauthorizedClient.get("/categories");
  if (response.status === 200) {
    const categories = await response.data;
    console.log(categories);
    return categories;
  } else {
    throw new Error(response.statusText);
  }
}
