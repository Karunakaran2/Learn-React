import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getGithubUser,
  getGithubUserRepos,
  searchGithubUsers,
} from "../services/githubApi";
import type { GithubUser, GithubUserProfile } from "../types";

export const useSearchGithubUsers = (query: string) => {
  return useQuery<GithubUser[]>({
    queryKey: ["github-users", query],
    queryFn: () => searchGithubUsers(query),
    enabled: query.length > 2,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useGithubUser = (username: string) => {
  return useQuery<GithubUserProfile>({
    queryKey: ["github-user", username],
    queryFn: () => getGithubUser(username),
    enabled: !!username,
  });
};

export const useGithubUserRepos = (username: string) => {
  return useInfiniteQuery({
    queryKey: ["github-user-repos", username],
    queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
      getGithubUserRepos(username, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, allPages: any) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
    enabled: !!username,
  });
};

export function useFollowers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (username: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { username, isFollowed: true };
    },
    onMutate: async (username: string) => {
      await queryClient.cancelQueries({
        queryKey: ["user", username],
      });

      const previousUser = queryClient.getQueryData(["user", username]);

      queryClient.setQueryData(["user", username], (oldUser: any) => ({
        ...oldUser,
        followers: oldUser.followers + 1,
        isFollowed: true,
      }));

      return { previousUser, username };
    },
    onError: (_err, _username, context: any) => {
      if (context?.previousUser) {
        queryClient.setQueryData(
          ["user", context.username],
          context.previousUser,
        );
      }
    },
    onSettled: (_data, _error, username) => {
      queryClient.invalidateQueries({
        queryKey: ["user", username],
      });
    },
  });
}
