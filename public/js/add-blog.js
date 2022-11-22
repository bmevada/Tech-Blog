async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name ="blog-title"]').value;
    const body = document.querySelector('textarea[name="blog-content"]').value;
    console.log(body, title)
    const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    };

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
}
