function createPost(title, userDetails, imgUrl, likes, profilePic, comments, postTime) {
  const articleList = document.querySelector("#articleListID");

  if (!articleList) {
    console.error("No #articleListID element found.");
    return;
  }

  const rootElement = document.createElement("article");
  rootElement.classList.add("card");

  rootElement.innerHTML = `
    <div class="top">
      <div class="userDetails">
        <div class="profilePic">
          <div class="profile_img">
            <div class="image">
              <img src="${profilePic}" alt="User profile" />
            </div>
          </div>
        </div>
        <h3>${userDetails}</h3>
      </div>
    </div>

    <div class="imgBox">
      <img src="${imgUrl}" alt="${title}" />
    </div>

    <div class="bottom">
      <div class="actionBtns">
        <div class="left">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <i class="far fa-paper-plane"></i>
        </div>
        <div class="right">
          <i class="far fa-bookmark"></i>
        </div>
      </div>

      <p class="likes">${likes} likes</p>
      <p class="message"><b>${userDetails} </b> ${title}</p>

      <a href="#">
          <h4 class="comments">View all ${comments} comments</h4>
      </a>

      <a href="#">
          <h5 class="postTime">${postTime}</h5>
      </a>

      <div class="addComments">
          <div class="reaction">
              <h3>
                  <i class="far fa-smile"></i>
              </h3>
          </div>

          <input
              type="text"
              class="text"
              placeholder="Add a comment..."
          />
          <a href="#">Post</a>
    </div>
  `;

  articleList.appendChild(rootElement);
}

const initialPosts = [
  {
    title: "Mijn poesje 👀👀👀",
    profilePic: "images/Screenshot 2026-10-05 112156.png",
    userDetails: "SceptileGaming",
    imgUrl: "https://placecats.com/800/800",
    likes: 882,
    comments: 17,
    postTime: "3 days ago"
  },
  {
    title: "Dit zijn mijn katten niet meer de feds hebben ze herplaatst",
    profilePic: "https://media.istockphoto.com/id/1388645967/nl/foto/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=1024x1024&w=is&k=20&c=F5-L8URKSRcwmcoGRsuGYT5oHYy7jehaXphX51Yca9A=",
    userDetails: "Stock image guy",
    imgUrl: "https://placecats.com/700/700",
    likes: 34,
    comments: 3,
    postTime: "54w ago"
  },
];

initialPosts.forEach((post) =>
  createPost(post.title, post.userDetails, post.imgUrl, post.likes, post.profilePic, post.comments, post.postTime)
);

export { createPost };
