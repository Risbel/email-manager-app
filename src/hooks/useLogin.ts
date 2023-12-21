import { login } from "@/services/login";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export default useLogin;
