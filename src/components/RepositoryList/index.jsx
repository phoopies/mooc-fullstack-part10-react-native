import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const options = {
    "Latest": { orderBy: "CREATED_AT", orderDirection: "DESC" },
    "Highest rated": { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    "Lowest rated": { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  }

  const [orderBy, setOrderBy] = useState(Object.keys(options)[0]);
  const { repositories } = useRepositories(options[orderBy]);

  return (
    <RepositoryListContainer repositories={repositories} orderByOptions={Object.keys(options)} setOrderBy={setOrderBy} />
  );
};

export default RepositoryList;
