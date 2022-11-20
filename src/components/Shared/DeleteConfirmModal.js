import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteBlog, refetch, setDeleteBlog }) => {
  const { _id } = deleteBlog;

  const handDelete = () => {

    const deleteProd = async () => {
      const response = await axios.delete(`http://localhost:5000/blog/${_id}`);
      if (response.status === 200) {
        toast.success(`Blog is Deleted!`)
        setDeleteBlog(null)
        refetch()
      }
    }
    deleteProd()
  }
  return (
    <div>
      {/* <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">Are you want to delete !</h3>
          <div className="modal-action">
            <button onClick={handDelete} className="btn btn-xs bg-red-600" >Delete</button>
            <label htmlFor="delete-modal" className="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DeleteConfirmModal;