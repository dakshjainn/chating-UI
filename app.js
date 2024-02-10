const PostButton = document.getElementById('postBTN');
const inputdiv = document.getElementById('post_input_box');
const right_div = document.getElementById('right');

PostButton.addEventListener('click', () => {
    const inputText = inputdiv.value;
    // create new div tag
    const PostDiv = document.createElement("div");
    PostDiv.id = "Post";
    right_div.appendChild(PostDiv);
    PostDiv.innerHTML = 
`<div id="PostDIV">
    <div id="posted_area">
        <div id="img"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt=""></div>
        <div id="input">
            <textarea name="post_input_box" id="post_input_box" placeholder="Type your thoughts here....." cols="30" rows="10"></textarea>
        </div>
    </div>
    <div id="button_area">
        <button id="editBTN">edit</button>  
        <button id="likeBTN">like</button>
        <button id="commentBTN">comment</button>
    </div>
</div>`
    post_input_box.innerHTML = inputText;
})

