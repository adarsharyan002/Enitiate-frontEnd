import Post from './Post';
import Navbar from '../components/Navbar';

const Posts = () => {
  // Define an array of post data
  const postsData = [
    {
      title: 'Graphic Design',
      content: 'Obcaecati, quam?...',
      imageUrl: 'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
      link: '#',
    },
    {
      title: 'UI Design',
      content: 'Obcaecati, quam?...',
      imageUrl: 'https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg',
      link: '#',
    },
    {
      title: 'UX Design',
      content: 'Obcaecati, quam?...',
      imageUrl: 'https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg',
      link: '#',
    },
    {
      title: 'UX Design',
      content: 'Obcaecati, quam?...',
      imageUrl: 'https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg',
      link: '#',
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className="py-4 bg-customGray px-6 h-screen">
      
      <div className="container mx-3  px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {postsData.map((post, index) => (
            <Post
              key={index} // Provide a unique key for each item in the array
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Posts;
