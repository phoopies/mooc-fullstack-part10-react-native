import { useState } from "react";
import { useDebounce } from 'use-debounce';
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const options = {
    "Latest": { orderBy: "CREATED_AT", orderDirection: "DESC" },
    "Highest rated": { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    "Lowest rated": { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  }
  const [orderBy, setOrderBy] = useState(Object.keys(options)[0]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

  const onEndReach = () => { 
    console.log("Reached end");
    fetchMore(); 
  }

  const { repositories, fetchMore } = useRepositories({ first: 10, ...options[orderBy], searchKeyword: debouncedSearchKeyword });

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderByOptions={Object.keys(options)}
      orderBy={orderBy} setOrderBy={setOrderBy}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
