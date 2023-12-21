import { httpService } from "@/config/axios.config";

export const login = async (data: any) => {
  const response = await httpService.post("/auth/jwt/create", data);
  return response.data;
};
