import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/AxiosPrivate';
import slugify from 'react-url-slugify';

const NewPost = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');
  let currentDate = new Date().toJSON().slice(0, 10);

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
        const slug = slugify(title)

        const blog = {
          title: title,
          slug: slug,
          category: category,
          thumbnail: imgurl,
          content: content,
          create_at: currentDate
        }
        try {
          const sendPost = async () => {
            const { data } = await axiosPrivate.post('https://rasel-web-server.onrender.com/add-blog', blog);
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
            <label htmlFor="title" className='text-neutral'>Post Title</label>
            <input
              className='block w-full p-3 mb-3 text-neutral rounded-md text-md' id='title' type="text"
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

            <label htmlFor="" className='text-neutral'>Post Category</label>
            <select className="select w-full bg-neutral mb-2"
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

            <label htmlFor="" className='text-neutral'> Post Content</label>

            <Editor

              apiKey='iwykjm8q6ce2q54w49ioaeg10mpydsahr5g3imomj3p3ykn1'
              onInit={(evt, editor) => editorRef.current = editor}
              onEditorChange={handleContent}
            />

            <label htmlFor="" className='text-neutral mb-2'> Upload Image</label>
            <input
              type="file"
              className="input input-bordered bg-neutral w-full mt-2"
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
              className="btn btn-bg-neutral uppercase"
              value="Save Post"
            />
          </form>

        </div>
      </div>
    </>

  );
};

export default NewPost;