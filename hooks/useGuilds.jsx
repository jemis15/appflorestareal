import axios from "axios";
import useSWR from "swr";

const useGuilds = ({user}) => {
  const { data: guilds, error } = useSWR(
    `/api/users/${user}/guilds`,
    async (url) => {
      try {
        const data = await axios.get(url);
        return data.data;
      } catch (error) {
        if (error.response.status != 422) throw error;
        return [];
      }
    }
  );

  return { guilds, error, isLoading: !error && !guilds };
};

export default useGuilds;
