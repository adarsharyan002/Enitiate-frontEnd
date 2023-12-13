
import Post from "../Post";

const PostDetails = ({params}) => {

    const post = {
        title: 'Graphic Design',
        content: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        imageUrl: 'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
        link: '#',
      }
    // const id = params.id
    return ( 
        <div className="flex justify-center items-center h-screen">
        <Post
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              link={post.link}
            />
            </div>

     );
}
 
export default PostDetails;