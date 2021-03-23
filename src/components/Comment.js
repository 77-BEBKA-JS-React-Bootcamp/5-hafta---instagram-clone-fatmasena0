import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPhoto, addComment, getComments } from '../store/actions'

import '../App.scss'

const Comment = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhoto())
    console.log(image)
    dispatch(getComments())
  }, [])

  const image = useSelector((state) => state.addCommentReducer.image)
  const comments = useSelector((state) => state.addCommentReducer.data)

  const [newComment, setNewComment] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addComment(newComment))
  }

  return (
    <div className='profile'>
      <div className='back'>
        <Link to={{ pathname: '/' }}>
          <img src='https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/left_2-512.png' alt='back' />
        </Link>
      </div>
      <div className='user-info'>
        <img className='pp' src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png' alt='profile-photo' />
        <p><b>{image.author.toLowerCase()}</b></p>
      </div>
      <img src={image.download_url} alt='images' width='100%' />
      {comments.length > 0 &&
        comments.map((comment) => (
          <>
            <p className='photo-info'>
              <span>{comment.name} </span> {comment.body}
            </p>
          </>
        ))}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) =>
            setNewComment({ name: 'user', body: event.target.value })}
          value={newComment.body}
          placeholder='Write your comment...'
        />
        <button type='submit'>Post</button>
      </form>

    </div>
  )
}

export default Comment
