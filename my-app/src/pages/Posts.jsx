import { useEffect, useState } from "react";
import { PostList } from "../components/PostList";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import "../styles/App.css";
import { MyModal } from "../components/UI/MyModal/MyModal";
import { MyButton } from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", searchQuery: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.searchQuery);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  })
  
  // способ создания неуправляемого инпута с помощью useRef,
  // с его помощью можно напрямую получать доступ к DOM элементу
  //const bodyInputRef = useRef();

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} />
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {isLoading 
        ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPost} title="Посты про JS" /> 
      }
      {
        postError && <h1>Произошла ошибка {postError}</h1>
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={setPage}
      />
    </div>
  );
}

export default Posts;
