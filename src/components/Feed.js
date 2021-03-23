import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotoList, sendPhoto } from '../store/actions'
import { withRouter, Link } from 'react-router-dom'

import '../App.scss'

const Feed = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotoList())
  }, [])

  const images = useSelector((state) => state.photosListReducer.data)

  const onClickAddComment = (image) => {
    dispatch(sendPhoto(image))
  }

  return (
    <div className='profile'>
      {
        images.map((image) => (
          <div className='feed' key='key'>
            <div className='user-info'>
              <img className='pp' src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png' />
              <p><b>{image.author.toLowerCase()}</b></p>
            </div>
            <div>
              <img src={image.download_url} alt='images' width='100%' />
            </div>
            <div className='like-comment'>
              <img className='like' src='https://cdn3.iconfinder.com/data/icons/instagram-18/512/198_Love_Instagram_Interface_Like-512.png' />
              <Link to={{ pathname: '/comment' }} onClick={() => onClickAddComment(image)}>
                Add a comment...
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default withRouter(Feed)
