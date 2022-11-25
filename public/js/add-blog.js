async function newFormHandler(event) {
    event.preventDefault();
    console.log('ima in the add blog');
    const title = document.querySelector('#blog-titles').value;
    const body = document.querySelector('#blog-contents').value;
    console.log(body, title);
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

    // document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
    document.querySelector('#create-blog').addEventListener('click', newFormHandler);
}
