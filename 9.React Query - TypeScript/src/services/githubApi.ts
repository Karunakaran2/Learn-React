import axios from "axios";

const BASE_URL = "https://api.github.com";

export const githubApi = axios.create({
  baseURL: BASE_URL,
});

export const getGithubUser = async (username: string) => {
  const { data, status } = await githubApi.get(`/users/${username}`);
  if (status !== 200) {
    throw new Error("Failed to fetch user");
  }
  return data;
};

export const searchGithubUsers = async (query: string) => {
  const { data, status } = await githubApi.get(
    `/search/users?q=${query}&per_page=10`,
  );
  if (status !== 200) {
    throw new Error("Failed to fetch users");
  }
  return data.items;
};

export const getGithubUserRepos = async (
  username: string,
  pageParam: number,
) => {
  const { data, status } = await githubApi.get(
    `/users/${username}/repos?sort=updated&direction=desc&per_page=10&page=${pageParam}`,
  );
  if (status !== 200) {
    throw new Error("Failed to fetch user repos");
  }
  return data;
};
