const posts = [
    {title: 'Post One', body:  'This is post one'},
    {title: 'Post Two', body:  'This is post two'}
];

function getPosts () {
    setTimeout (() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// createPost({
//   title:'Post Three', 
//   body:'This is post three'
// })
// .then(getPosts)
// .catch(err => console.log(err));


// Promise.all 
const promise1 = Promise.resolve('Hello EN'); 
const promise2 = 20; 
const promise3 = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, 'Good bye'));

const promise4 = fetch(' ')
Promise.all([promise1,promise2, promise3]).then(values => 
    console.log(values));