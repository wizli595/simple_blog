const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const head = document.querySelector("title");
const deleBtn = document.querySelector(".btn");
const renderDetails = async () => {
  const resp = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await resp.json();
  console.log(post);
  const tamp = `
  <h1>${post.title}</h1>
  <p>${post.body}</p>
  `;
  container.innerHTML = tamp;
  head.innerHTML = post.title;
};
deleBtn.addEventListener("click", async (e) => {
  let res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("/");
});
window.addEventListener("DOMContentLoaded", () => renderDetails());
