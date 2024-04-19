import { API_URL } from "./apiURL";

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories.php`);
  if (!res.ok) throw Error("Failed to fetch categories");
  const data = await res.json();
  return data;
}

export async function getCountry() {
  const res = await fetch(`${API_URL}/list.php?a=list`);
  if (!res.ok) throw Error("Failed to load Country");
  const data = await res.json();
  return data.meals;
}
