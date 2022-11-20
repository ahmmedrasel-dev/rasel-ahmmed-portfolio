import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const NewPost = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('')

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const handleContent = value => {
    if (value) {
      setContent(value)
    }
  }

  const onSubmit = data => {
    const { title, category, image } = data;
    const imgKey = '71c3b2215e8817f9c1afc8f8d7c617f4';
    const formData = new FormData();
    formData.append('image', image[0])
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        const imgurl = result.data.url;
        const blog = {
          title: title,
          category: category,
          thumbnail: imgurl,
          content: content,
        }
        try {
          const sendPost = async () => {
            const { data } = await axios.post('http://localhost:5000/add-blog', blog);
            if (data.success) {
              toast.success(data.message);
              reset();
            }
            else {
              toast.error('Fail to add the Post.')
            }
          }
          sendPost()
        }
        catch (error) {
          toast.error(error.message)
        }

      })
  }

  return (
    <>
      <Helmet>
        <title>Registe | Rasel Ahmmed Webdeveloepr</title>
      </Helmet>
      <div className='md:p-8 h-screen'>

        <div className='md:w-5/6 sm:w-4/6 md:h-82 py-8 md:mx-auto flex flex-col justify-center bg-slate-100 border-2 rounded-3xl'>

          <form className='sm:w-4/4 md:w-3/4 mx-auto mt-4' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""> Post Title</label>
            <input
              className='block w-full p-3 mb-3 rounded-md text-md' type="text"
              placeholder='Post title'
              {...register("title", {
                required: {
                  value: true,
                  message: 'Post title is Required!'
                }
              })}
            />
            <label className="label">
              {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.title?.message}</span>}
            </label>

            <label htmlFor="">Post Category</label>
            <select className="select w-full bg-white mb-2"
              {...register("category", {
                required: {
                  value: true,
                  message: 'Post category is Required!'
                }
              })}
            >
              <option disabled selected>Choose Category</option>
              <option value='react'>React</option>
              <option value='node js'>Node Js</option>
              <option value='express js'>Express Js</option>
              <option value='php'>Php</option>
              <option value='laravel'>Laravel</option>
            </select>
            <label className="label">
              {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.category?.message}</span>}
            </label>

            <label htmlFor=""> Post Content</label>

            <Editor
              apiKey='iwykjm8q6ce2q54w49ioaeg10mpydsahr5g3imomj3p3ykn1'
              onInit={(evt, editor) => editorRef.current = editor}
              onEditorChange={handleContent}
            />

            <input
              type="file"
              className="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: 'Image is Required!'
                }
              })}
            />
            <label className="label">
              {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>}
            </label>

            <input
              type="submit"
              className="btn btn-accent uppercase"
              value="Save Post"
            />
          </form>

        </div>
      </div>
    </>

  );
};

export default NewPost;