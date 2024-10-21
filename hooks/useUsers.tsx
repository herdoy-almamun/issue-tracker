import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "next-auth";

const useUsers = (email: string) =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get(`/api/users/${email}`).then((res) => res.data),
  });
export default useUsers;
