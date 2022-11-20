import React, { useState } from 'react';
import DeleteConfirmModal from '../../components/Shared/DeleteConfirmModal';

const Blog = ({ blog, sl, refetch }) => {
  const { title, category, thumbnail } = blog;
  const [deleteBlog, setDeleteBlog] = useState(null);
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Images</th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
              <label htmlFor="delete-modal" onClick={() => setDeleteBlog(blog)} className="btn btn-sm bg-red-600">Delete</label>
            </td>
          </tr>
        </tbody>
      </table>

      {deleteBlog && <DeleteConfirmModal
        deleteBlog={deleteBlog}
        refetch={refetch}
        setDeleteBlog={setDeleteBlog}
      ></DeleteConfirmModal>}

    </div>
  );
};

export default Blog;