import axios from "axios";
import { useEffect, useState } from "react";

function getQuery({ search, nav_router_name, type, project }) {
  var query = "";
  if (project) {
    query += `project=${project}`;
  }
  if (search) {
    query += `&search=${search}`;
  }
  if (nav_router_name) {
    query += `&nav_router_name=${nav}`;
  }
  if (type) {
    query += `&type=${type}`;
  }
  query += `&sort=last_updated:desc`;
  return query;
}

const useClients = ({ search, nav_router_name, type, project }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberReload, setNumberReload] = useState(0);

  function refresh() {
    setNumberReload(numberReload + 1);
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const query = getQuery({ search, nav_router_name, type, project });
        const { data: apiClients } = await axios.get(`/api/clients?${query}`);
        setClients(apiClients.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
    project && loadData();
  }, [project, search, nav_router_name, type, getQuery, numberReload]);

  return { clients, loading, refresh };
};

export default useClients;
