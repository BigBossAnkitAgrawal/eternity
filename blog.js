// Check if there is any saved blog post in local storage and display it
window.onload = function() {
    displayBlogPosts();
};

// Function to save the blog post in local storage
function saveBlogPost() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    if (title && content) {
        var blogPost = {
            title: title,
            content: content
        };

        // Check if there are existing blog posts in local storage
        var existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        existingPosts.push(blogPost);

        // Save the updated blog posts to local storage
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        // Clear the input fields
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';

        // Display the updated blog posts
        displayBlogPosts();
    } else {
        alert('Please enter both title and content for the blog post.');
    }
}

// Function to display blog posts
function displayBlogPosts() {
    var blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    var blogPostsContainer = document.getElementById('blogPosts');
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = '<div class="blog-post-title">' + post.title + '</div>' +
                                '<div class="blog-post-content">' + post.content + '</div>';
        blogPostsContainer.appendChild(postElement);
    });
}
