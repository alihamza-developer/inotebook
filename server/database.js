import mongoose from 'mongoose';

// Connect
async function connect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');
  return true;
}

export {
  connect
};