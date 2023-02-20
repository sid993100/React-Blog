import { useState } from 'react';
import { firestore } from '../firebase';
import {useFormInput} from '../hooks';
import Navbar from "./Navbar";


function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    //posting data to firebase
  firestore.collection('posts').add({
    title:title.value,
    content:content.value,
    subTitle:subTitle.value,
    createdAt: new Date(),
  });
  }

  
  return (
    <div className="create-post">
      <Navbar />
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content} ></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
