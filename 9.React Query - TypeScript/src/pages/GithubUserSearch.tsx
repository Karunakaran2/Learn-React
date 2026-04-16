import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchGithubUsers } from "../services/githubApi";

const GithubUserSearch = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["github-users", query],
    queryFn: () => searchGithubUsers(query),
    enabled: query.length > 0,
  });

  return (
    <div>
      <input
        className=""
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.items.map((user: any) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GithubUserSearch;
