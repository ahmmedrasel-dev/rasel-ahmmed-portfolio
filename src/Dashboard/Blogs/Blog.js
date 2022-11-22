import React, { useState } from 'react';
import DeleteConfirmModal from '../../components/Shared/DeleteConfirmModal';

const Blog = ({ blog, sl, refetch }) => {
  const { title, category, thumbnail } = blog;
  const [deleteBlog, setDeleteBlog] = useState(null);
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
          <label htmlFor="delete-modal" className="btn btn-sm bg-green-600">Edit</label>
          <label htmlFor="delete-modal" onClick={() => setDeleteBlog(blog)} className="btn btn-sm bg-red-600">Delete</label>
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