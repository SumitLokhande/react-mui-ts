import { apiGet, apiPost } from "./axios";

export const login = async (formData: object) => {
  const res = await apiPost("/token", formData);
  return res.data;
};

export const getUserData = async () => {
  const res = await apiGet("/todos/1");
};
