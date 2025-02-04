import React from 'react'
import Notes from './Notes.js';

const Home = () => {
  return (
    <>
      <h3>Add Note</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" placeholder="Title here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea className="form-control" placeholder='Your content here...' rows="3"></textarea>
        </div>
        <button className='btn btn-secondary btn-sm mt-2'>Save</button>
      </form>

    
      <Notes />
    </>
  )
}

export default Home;
