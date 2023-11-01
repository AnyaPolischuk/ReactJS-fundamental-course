import { useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

  return sortedAndSearchedPost;
}