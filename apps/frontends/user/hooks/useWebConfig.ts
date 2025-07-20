import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

export const useWebConfig = () => {
  return useQuery({
    queryKey: ["web-config"],
    queryFn: async () => {
      console.log(
        "Making request to:",
        axiosInstance.defaults.baseURL + "/api/web-config"
      );
      const { data } = await axiosInstance.get("/web-config");
      console.log("Response:", data);
      return data;
    },
  });
};
