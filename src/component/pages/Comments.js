import React from "react";
import "../style/Comments.css";

const Comments = () => {
  return (
    <div className="comments-container">
      <div className="comment">
        <div className="avatar">
          <img
            src="https://www.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-250nw-1037215345.jpg"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <div className="comment-content">
          <h4>User 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            velit a ligula scelerisque dictum.
          </p>
        </div>
      </div>
      <div className="comment">
        <div className="avatar">
          <img
            src="https://www.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-250nw-1037215345.jpg"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <div className="comment-content">
          <h4>User 2</h4>
          <p>
            Sed et sapien in nulla luctus hendrerit a sit amet nisl. Maecenas
            nec consequat mi.
          </p>
        </div>
      </div>
      <div className="comment">
        <div className="avatar">
          <img
            src="https://www.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-250nw-1037215345.jpg"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <div className="comment-content">
          <h4>User 3</h4>
          <p>
            Integer sollicitudin orci vel nisi elementum, a feugiat tortor
            rhoncus. Vivamus auctor.
          </p>
        </div>
      </div>
      <div className="comment">
        <div className="avatar">
          <img
            src="https://www.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-250nw-1037215345.jpg"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <div className="comment-content">
          <h4>User 4</h4>
          <p>
            Fusce vulputate, nunc eget mattis luctus, justo est efficitur
            ligula, non bibendum.
          </p>
        </div>
      </div>
      <div className="comment">
        <div className="avatar">
          <img
            src="https://www.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-250nw-1037215345.jpg"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <div className="comment-content">
          <h4>User 5</h4>
          <p>
            Aliquam erat volutpat. Donec lacinia, nulla a hendrerit gravida,
            justo orci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
