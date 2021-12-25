import axios from "axios";
import useSWR from "swr";

const useMember = ({ user, guild }) => {
  const { data: member, error } = useSWR(
    `/api/users/${user}/${guild}/member`,
    async (url) => {
      try {
        const data = await axios.get(url);
        return data.data;
      } catch (error) {
        if (error.response.status != 422) throw error;
      }
    }
  );

  return { member, error, isLoading: !error && !member };
};

export default useMember;
