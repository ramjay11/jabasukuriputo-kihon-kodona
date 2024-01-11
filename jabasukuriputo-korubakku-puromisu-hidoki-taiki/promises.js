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
Promises:
Promises are objects that represent the eventual completion or failure of an asynchronous operation.
A Promise has four states: fulfilled, rejected, pending, and settled.
Promises improve code readability, provide better handling of asynchronous operations, better flow of control definition in asynchronous logic, 
and better error handling.
Unlike callbacks, promises allow you to attach callbacks to the returned promise object*/
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// Use .then(). If error is true, use .catch(err => console.log(err)) instead
//createPost({ title: "Post three", body: "This is post three" }).then(getPosts);

// Async / Await is a way to handel responses
// async function init() {
//     await createPost({ title: "Post three", body: "This is post three" });
//     getPosts();
// }

// init();

// Async / Await with fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();


// Promise.all
// const promise1 = Promise.resolve('約束1');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye Promises'));
//     const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

