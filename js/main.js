const container = document.querySelector(".blogs");
const formSer = document.querySelector(".search");
formSer.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(formSer.term.value.trim());
  // console.log(formSer.term.value);
});
window.addEventListener("DOMContentLoaded", () => getData());
const getData = async (trm) => {
  let uri = "http://localhost:3000/posts?_sort=likes";
  if (trm) {
    uri += `&q=${trm}`;
  }
  const res = await fetch(uri);
  let posts = await res.json();
  let tampl = "";
  posts.forEach((post) => {
    tampl += `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body.slice(0, 100)}</p>
    <a href="/details.html?id=${post.id}">read more </a>
  </div>
    `;
  });
  container.innerHTML = tampl;
};
