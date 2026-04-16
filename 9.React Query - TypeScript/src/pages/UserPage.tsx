import { useEffect, useRef } from "react";
import {
  useFollowers,
  useGithubUser,
  useGithubUserRepos,
} from "../hooks/useGithub";

/* Map language names to CSS class names */
function getLangClass(lang: string | null): string {
  if (!lang) return "lang-default";
  const map: Record<string, string> = {
    JavaScript: "lang-javascript",
    TypeScript: "lang-typescript",
    Python: "lang-python",
    Java: "lang-java",
    CSS: "lang-css",
    HTML: "lang-html",
    Go: "lang-go",
    Rust: "lang-rust",
  };
  return map[lang] ?? "lang-default";
}

function ProfileSkeleton() {
  return (
    <div className="profile-skeleton">
      <div className="skeleton skeleton-avatar" style={{ width: 96, height: 96, borderRadius: "50%" }} />
      <div className="skeleton-lines">
        <div className="skeleton" style={{ height: 20, width: 180 }} />
        <div className="skeleton" style={{ height: 14, width: 120 }} />
        <div className="skeleton" style={{ height: 12, width: "80%" }} />
        <div className="skeleton" style={{ height: 12, width: "60%" }} />
      </div>
    </div>
  );
}

interface UserPageProps {
  username: string;
  onBack: () => void;
}

export default function UserPage({ username, onBack }: UserPageProps) {
  const {
    data: profile,
    isLoading,
    error,
    isFetching,
  } = useGithubUser(username);

  const { mutate: follow, isPending: isFollowing } = useFollowers();

  const {
    data: repos,
    isLoading: isReposLoading,
    error: reposError,
    isFetching: isReposFetching,
    fetchNextPage,
    hasNextPage,
  } = useGithubUserRepos(username);

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const allRepos = repos?.pages.flat() ?? [];

  return (
    <div className="user-page">
      {/* Back button */}
      <button id="back-to-search" className="back-btn" onClick={onBack}>
        ← Back to Search
      </button>

      {/* Profile section */}
      {isLoading && <ProfileSkeleton />}
      {error && <div className="error-banner">⚠️ {error.message}</div>}

      {profile && (
        <div className="profile-card">
          <div className="profile-avatar-wrap">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="profile-avatar"
            />
          </div>

          <div className="profile-main">
            <h1 className="profile-name">{profile.name || profile.login}</h1>
            <p className="profile-handle">@{profile.login}</p>

            {profile.bio && (
              <p className="profile-bio">{profile.bio}</p>
            )}

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">
                  {profile.public_repos?.toLocaleString() ?? "—"}
                </span>
                <span className="stat-label">Repos</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {profile.followers?.toLocaleString() ?? "—"}
                </span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {profile.following?.toLocaleString() ?? "—"}
                </span>
                <span className="stat-label">Following</span>
              </div>
            </div>

            <div className="profile-actions">
              <button
                id={`follow-btn-${username}`}
                className="btn-follow"
                onClick={() => follow(username)}
                disabled={isFollowing}
              >
                {isFollowing ? (
                  <>
                    <span className="spinner" style={{ borderWidth: 2 }} />
                    Following…
                  </>
                ) : (
                  "＋ Follow"
                )}
              </button>

              <a
                id={`github-link-${username}`}
                className="btn-github"
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
              >
                ↗ View on GitHub
              </a>
            </div>

            {isFetching && !isLoading && (
              <div className="fetching-indicator" style={{ marginTop: 12 }}>
                <span className="status-dot" /> Refreshing…
              </div>
            )}
          </div>
        </div>
      )}

      {/* Repos section */}
      {(isReposLoading || allRepos.length > 0) && (
        <div className="repos-section">
          <div className="section-header">
            <h2 className="section-title">
              📁 Repositories
              {allRepos.length > 0 && (
                <span className="section-badge">{allRepos.length}</span>
              )}
            </h2>
            {isReposFetching && !isReposLoading && (
              <div className="fetching-indicator">
                <span className="status-dot" /> Loading…
              </div>
            )}
          </div>

          {reposError && (
            <div className="error-banner">⚠️ {reposError.message}</div>
          )}

          {isReposLoading ? (
            <div className="repos-list">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="repo-card"
                  style={{ gap: 12 }}
                >
                  <div className="skeleton" style={{ height: 14, width: "60%" }} />
                  <div className="skeleton" style={{ height: 10, width: "90%" }} />
                  <div className="skeleton" style={{ height: 10, width: "40%" }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="repos-list">
              {allRepos.map((repo: any) => (
                <a
                  key={repo.id}
                  id={`repo-${repo.id}`}
                  className="repo-card"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="repo-name">
                    <span>📄</span> {repo.name}
                  </div>

                  {repo.description && (
                    <p className="repo-desc">{repo.description}</p>
                  )}

                  <div className="repo-meta">
                    {repo.language && (
                      <span className="repo-meta-item">
                        <span
                          className={`lang-dot ${getLangClass(repo.language)}`}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="repo-meta-item">
                      ⭐ {repo.stargazers_count.toLocaleString()}
                    </span>
                    <span className="repo-meta-item">
                      🍴 {repo.forks_count.toLocaleString()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Infinite scroll sentinel */}
          {hasNextPage && <div ref={sentinelRef} className="load-more-sentinel" />}
          {isReposFetching && !isReposLoading && (
            <div className="loading-more">
              <div className="spinner" />
              Loading more repositories…
            </div>
          )}
        </div>
      )}
    </div>
  );
}
