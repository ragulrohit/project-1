import React, {useRef , useState} from 'react'
import './UseRef.css'

const ImageCard = () => {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle Like
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  // Handle Comment Submit
  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="card">
      <h2>Image Upload</h2>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />

      {image && (
        <div className="image-container">
          <img src={image} alt="Uploaded" />
        </div>
      )}

      {/* Like Section */}
      <div className="like-section">
        <button
          className={liked ? "liked" : ""}
          onClick={handleLike}
        >
          ❤️
        </button>
        <span>{likes} Likes</span>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Post</button>

        <div className="comments">
          {comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
