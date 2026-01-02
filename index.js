// Function to Display Posts
function displayPosts(posts) {
    const ul = document.getElementById('post-list');
    posts.forEach((post, index) => {
        // Create an li element
        const li = document.createElement('li');
        li.style.setProperty('--item-index', index);

        // Create an h1 element
        const h1 = document.createElement('h1');
        // Set textContent to the title of the post
        h1.textContent = post.title;

        // Create a p element
        const p = document.createElement('p');
        // Set textContent to the body of the post
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to the ul
        ul.appendChild(li);
    });
}

// Function to house fetch and apply async
async function getPosts() {
    // Apply await to fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Call displayPosts() after fetch
    displayPosts(posts);
}

// Initialize the fetch
getPosts();
