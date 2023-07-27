function Comments({comment}) {
  return (
    <div className="comment">
        <div className="image">
          <img src={comment.pic} alt="" />
        </div>
        <div className="details-and-content">
          <span>{comment.name}</span>
          <p>{comment.desc}</p>
        </div>
    </div>
  );
}

export default Comments;
