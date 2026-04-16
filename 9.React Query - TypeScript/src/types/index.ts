interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type?: string;
}

/** Full profile returned by GET /users/:username */
interface GithubUserProfile {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  type: string;
  location: string | null;
  blog: string | null;
  company: string | null;
}

interface NavProps {
  setPage: (page: string) => void;
}

export type { GithubUser, GithubUserProfile, NavProps };
