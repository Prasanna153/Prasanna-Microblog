document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.getElementById('newPostForm');
    const postsContainer = document.getElementById('postsContainer');

    // Handle form submission
    newPostForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;
        const postImage = document.getElementById('postImage').files[0]; // Image file

        // Create new post div
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitleElement = document.createElement('h3');
        postTitleElement.innerText = postTitle;

        const postContentElement = document.createElement('p');
        postContentElement.innerText = postContent;

        // Append title and content
        postDiv.appendChild(postTitleElement);
        postDiv.appendChild(postContentElement);

        // If there is an image, display it
        if (postImage) {
            const postImageElement = document.createElement('img');
            postImageElement.src = URL.createObjectURL(postImage);
            postDiv.appendChild(postImageElement);
        }

        // Create Like and Share buttons
        const postActionsDiv = document.createElement('div');
        postActionsDiv.classList.add('post-actions');

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.innerText = 'Like';
        likeButton.addEventListener('click', function () {
            likeButton.classList.toggle('active');
            if (likeButton.classList.contains('active')) {
                likeButton.innerText = 'Liked';
            } else {
                likeButton.innerText = 'Like';
            }
        });

        const shareButton = document.createElement('button');
        shareButton.classList.add('share-btn');
        shareButton.innerText = 'Share';
        shareButton.addEventListener('click', function () {
            alert('Shared successfully!');
        });

        postActionsDiv.appendChild(likeButton);
        postActionsDiv.appendChild(shareButton);
        postDiv.appendChild(postActionsDiv);

        // Add post to the container
        postsContainer.prepend(postDiv);

        // Clear form
        newPostForm.reset();
    });
});
