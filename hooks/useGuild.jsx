import axios from "axios";
import useSWR from "swr";

const useGuild = ({project_id}) => {
  const { data: guild, error } = useSWR(
    `/api/projects/${project_id}/guild`,
    async (url) => {
      try {
        const data = await axios.get(url);
        return data.data;
      } catch (error) {
        if (error.response.status != 422) throw error;
      }
    }
  );

  return { guild, error, isLoading: !error && !guild };
};

export default useGuild;
