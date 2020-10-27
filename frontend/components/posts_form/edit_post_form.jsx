import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPost, fetchUserPosts, updatePost } from '../../actions/post_actions';

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const [postBody, setBody] = useState(props.post.body);
  let postPhoto = props.post.postPhoto;
  const formType = 'Update Post';
  const buttonText = 'Update';
  const dispatch = useDispatch();

  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: "us-east-2", 
  });

  const uploadImage = (file) => {
    const params = {
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: file.name,
      Body: file,
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    const uploadPhoto = s3.upload(params).promise();
    return uploadPhoto;
  };

  const handleUpload = () => {
    debugger
    if (postPhoto === '' || postPhoto === null) {
      handleSubmit()
    } else if (typeof postPhoto !== "string") {
      uploadImage(postPhoto)
      .then(data => {
        postPhoto = data.Location
      })
      .then(() => handleSubmit());
    } else {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    const post = new FormData();
    post.append('post[id]', props.post.id)
    post.append('post[body]', postBody);
    post.append('post[owner_id]', currentUser.id);
    post.append('post[user_id]', props.post.userId);
    post.append('post[post_photo]', postPhoto);

    dispatch(updatePost(props.post.id, post));
    dispatch(fetchPost(props.post.id));
    props.hideModal();
  }

  const postProfileRef = React.createRef();

  const clickInput = () => {
    postProfileRef.current.click()
  }
  const getImgClass = () => {
    if (postPhoto === null || postPhoto === '') {
      return 'post-dynamic-image-edit hidden';
    } else {
      return 'post-dynamic-image-edit show';
    }
  }

  const getButtonClass = () => {
    if (postPhoto === null || postPhoto === '') {
      return 'post-remove-photo-edit hidden';
    } else {
      return 'post-remove-photo-edit show';
    }
  }

  const loadFile = (e) => {
    let image = document.getElementsByClassName(`post-dynamic-image-edit`);
    image[0].src = URL.createObjectURL(e.target.files[0]);
    image[0].classList.remove('hidden');
    image[0].classList.add('show');
  }

  const removePhoto = () => {
    let image = document.getElementsByClassName(`post-dynamic-image-edit`);
    image[0].src = '';
    image[0].classList.remove('show');
    image[0].classList.add('hidden');

    let button = document.getElementsByClassName(`post-remove-photo-edit`);
    button[0].classList.remove('show');
    button[0].classList.add('hidden');

    postPhoto = '';
  }

  const showRemoveButton = () => {
    let button = document.getElementsByClassName(`post-remove-photo-edit`);
    button[0].classList.remove('hidden');
    button[0].classList.add('show');
  }

  if (!props.post) return null;
  return (
    <div>
      <div className='post-form-card'>
        <div className='post-form-header'>
          <div>
            <span>
              <h1>{formType}</h1>
            </span>
            <span>
              <button onClick={props.hideModal}><p className='form-close-button'>X</p></button>
            </span>
          </div>
          <div className='post-dividor'/>
        </div>
        <div className='post-form-user'>
          <div className='post-form-user-image'>
            <img src={currentUser.profilePhoto} alt=""/>
          </div>
          <div className='post-form-user-name'>
            <p>{currentUser.firstName} {currentUser.lastName}</p>
            <div className='post-form-friends-click'>
              <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="friends-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></div>
              <p className='friends-p'>Friends</p>
              <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></div>
            </div>
          </div>
        </div>
        <form className='post-form'>
          <div className='post-form-text'>
            <textarea
              type="text"
              onChange={e => setBody(e.currentTarget.value)}
              value={postBody}
            ></textarea>
          </div>
          
          <div className='post-image-show'>
            <img src={props.post.postPhoto} className={getImgClass()}/>
          </div>

          <div className='add-to-your-post'>
            <div>
              <p>Edit your post</p>
            </div>


            <div> 
              <input type="button" value="Update image" className="file-upload-input" onClick={clickInput} />
              <input 
                type="file" 
                className="file"
                onChange={e => {
                    postPhoto = e.currentTarget.files[0];
                    console.log(postPhoto)
                    loadFile(e);
                    showRemoveButton();
                  }
                }
                ref={postProfileRef}
              />
              <input type="button" value="Remove image" className={getButtonClass()} onClick={removePhoto} />
            </div>
          </div>


          <div className='post-button'>
            <button onClick={handleUpload}>
              <span>
                {buttonText}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}