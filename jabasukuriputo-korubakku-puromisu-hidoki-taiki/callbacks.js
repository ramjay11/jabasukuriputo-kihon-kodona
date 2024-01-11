const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  // Takes a callback function
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>{$post.title}</li>`;
    });
    document.body.innerHTML = output;
    // outputting after 1 second
  }, 1000);
}
/*
Callbacks:
Callbacks are functions passed as arguments into other functions to ensure that certain variables are available within the callback function’s scope1.
Callbacks are a way to handle something once another task has been completed.
They can be used if we wish to run a function immediately following the return of another function.
However, when performing multiple asynchronous operations at a time, we can easily end up with something known as “callback hell”, which can lead to
unmanageable and hard-to-read code.*/
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// Call function
//getPost();

createPost({ title: "Post three", body: "This is post three" }, getPosts);
