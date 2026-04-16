import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useSearchGithubUsers } from "../hooks/useGithub";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-avatar" />
      <div style={{ flex: 1 }}>
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text-sm" />
      </div>
    </div>
  );
}

export default function SearchPage({
  setSelectedUser,
}: {
  setSelectedUser: (username: string) => void;
}) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading, error, isFetching } =
    useSearchGithubUsers(debouncedQuery);

  const showResults = data && data.length > 0;
  const showEmpty = data && data.length === 0 && debouncedQuery.length > 2;

  return (
    <div className="search-page">
      {/* Hero */}
      <div className="search-hero">
        <h1>Discover GitHub Users</h1>
        <p>Search over 100 million developers on GitHub</p>
      </div>

      {/* Search Input */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          id="github-search-input"
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by username, e.g. torvalds…"
          autoFocus
          autoComplete="off"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Status bar */}
      {(isLoading || isFetching) && (
        <div className="status-bar">
          <span className="status-dot" />
          <span>{isLoading ? "Searching…" : "Updating results…"}</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="error-banner">
          ⚠️ {error.message}
        </div>
      )}

      {/* Results */}
      {isLoading ? (
        <div className="skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : showResults ? (
        <>
          <div className="status-bar">
            <span>Results for <strong style={{ color: "var(--text-primary)" }}>"{debouncedQuery}"</strong></span>
            <span className="status-count">{data.length} users found</span>
          </div>
          <div className="user-grid">
            {data.map((user: any) => (
              <div
                id={`user-card-${user.login}`}
                key={user.id}
                className="user-card"
                onClick={() => setSelectedUser(user.login)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedUser(user.login)}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="user-avatar"
                />
                <div className="user-info">
                  <div className="user-login">{user.login}</div>
                  <div className="user-type">{user.type ?? "User"}</div>
                </div>
                <span className="user-card-arrow">›</span>
              </div>
            ))}
          </div>
        </>
      ) : showEmpty ? (
        <div className="empty-state">
          <span className="empty-icon">🔭</span>
          <h3>No users found</h3>
          <p>Try a different username or check your spelling.</p>
        </div>
      ) : !query ? (
        <div className="empty-state">
          <span className="empty-icon">👨‍💻</span>
          <h3>Start searching</h3>
          <p>Type at least 3 characters to search for GitHub users.</p>
        </div>
      ) : null}
    </div>
  );
}
