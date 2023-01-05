import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmModal from '../../components/Shared/DeleteConfirmModal';

const Blog = ({ blog, sl, refetch }) => {
  const { title, category, thumbnail } = blog;
  const [deleteBlog, setDeleteBlog] = useState(null);
  const navigate = useNavigate();

  const handleReadView = slug => {
    navigate(`/blog/${slug}`);
  }
  const handleBlogEdit = (blog) => {
    const id = blog._id
    navigate(`/dashboard/blogEdit/${id}`);
  }


  return (
    <>
      <tr>
        <td>{sl + 1}</td>
        <td>
          <div className="avatar">
            <div className="w-10 rounded-sm">
              <img src={thumbnail} alt="" />
            </div>
          </div>
        </td>
        <td>{title}</td>
        <td>{category}</td>
        <td>

          <button className='btn btn-sm bg-green-600' onClick={() => handleBlogEdit(blog)}>Edit</button>
          <label htmlFor="delete-modal" onClick={() => setDeleteBlog(blog)} className="btn btn-sm bg-red-600">Delete</label>
          <button className="btn btn-sm bg-green-600" onClick={() => handleReadView(blog.slug)}>View</button>
        </td>
      </tr>

      {deleteBlog && <DeleteConfirmModal
        deleteBlog={deleteBlog}
        refetch={refetch}
        setDeleteBlog={setDeleteBlog}
      ></DeleteConfirmModal>}

    </>
  );
};

export default Blog;