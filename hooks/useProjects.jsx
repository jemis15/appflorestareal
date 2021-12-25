import axios from "axios";
import useSWR from "swr";

export const useProject = () => {
  const { data, error } = useSWR("/api/projects/1", async (url) => {
    const data = await axios.get(url);
    return data.data;
  });

  return {data, error, isLoading: !error && !data};
};
