const posts = [
    {
        title: 'Post one',
        body: 'This is post one',
    },
    {
        title: 'Post Two',
        body: 'This is post two',
    },
];

function createPost(post, displayPosts) {
    setTimeout(function() {
        posts.push(post);
        displayPosts();
    }, 2000);
}

function displayPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.querySelector('.posts').innerHTML = output;
    }, 1000);
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
}, displayPosts);

