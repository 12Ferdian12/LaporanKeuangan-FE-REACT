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

export async function createCategory({
  kategoriName,
}: {
  kategoriName: string;
}): Promise<any> {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const response = await unauthorizedClient.post("/categories", {
    kategoriName: kategoriName,
    createAt: today.toLocaleDateString(),
  });

  return response;
}
