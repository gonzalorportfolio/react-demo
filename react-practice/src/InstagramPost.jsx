
const InstagramPost = (props) => {
    return (
      <div>
        <img alt={props.catAlt} src={props.catPicUrl} />
        <p>Check out my cute cat!</p>
      </div>
    );
  };

  export default InstagramPost;