import Link from "next/link";

const Post = ({ title, content,id,display}) => {
    return (
      <div className="bg-white rounded-2xl shadow-gray-50 px-6 py-10 sm:px-12 lg:px-8">
        <div className="mb-4 space-y-4">
          <h3 className="text-2xl font-semibold text-purple-900">{title}</h3>
          <p className="mb-4">{content}...</p>
         {!display && <Link href={`/posts/${id}`} className="block font-medium text-purple-600">
            Know more
          </Link>}
        </div>
        
      </div>
    );
  };

  export default Post;
  