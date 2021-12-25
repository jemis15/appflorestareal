import axios from "axios";
import useSWR from "swr";

export const useProject = ({ project_id }) => {
  const { data: project, error } = useSWR(
    `/api/projects/${project_id}`,
    async (url) => {
      try {
        const {data: apiProject} = await axios.get(url);
        return apiProject.data;
      } catch (error) {
        if (error.response.status != 422) throw error;
      }
    }
  );

  return { project, error, isLoading: !error && !project };
};
