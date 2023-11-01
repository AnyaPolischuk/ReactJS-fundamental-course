import { useNavigate } from "react-router-dom"
import { MyButton } from "./UI/button/MyButton"

export const PostItem = ({ post, number, remove }) => {
  const router = useNavigate();
  
  return (
    <div className="post">
        <div className="post__content">
          <strong>{number}. {post.title}</strong>
          <div>{post.body}</div>
        </div>
        <div className=" btns">
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        </div>
    </div>
  )
}