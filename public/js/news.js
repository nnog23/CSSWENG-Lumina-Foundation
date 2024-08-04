// FRONT-END JS For News view
const submitBtn = document.querySelector("#createNews");
const newsForm = document.forms.createNewsForm;

submitBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    const formData = new FormData(newsForm);
    console.log('submit');
    const myObj = { 
        title: formData.get("title"),
        body: formData.get("body"),
        date: formData.get("date"),
        published: 0
    };
    console.log(myObj);
    const jString = JSON.stringify(myObj);
    console.log(jString);

    try {
        const response = await fetch("/news", {
            method: 'POST',
            body: jString,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log(response);
        if (response.status === 200) {
            // Check for redirect
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                location.reload();
            }
        } else {
            console.log("Status code received: " + response.status);
        }
    } catch (err) {
        console.error(err);
    }
});