const express = require('express');
const mongoose = require('mongoose');
const commentsRoutes = require('./routes/commentsRoutes');
const commentsController = require('./controllers/commentsController');
const postsRoutes = require('./routes/postsRoutes');


const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=> {
    console.log("Connected to MongoDB");
});

app.use(express.json());


app.get('/posts/:postId/comments', commentsController.getCommentsByPostId);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
