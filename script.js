`use strict`;
// ? EX11) Write a function to add a new link into the navbar
const addNewLink = function (content) {
  const parent = document.querySelector(`.nav`);
  const a = ` <a class="p-2 text-muted" href="#">${content}</a>`;
  parent.innerHTML += a;
};
addNewLink(`kenneth`);
//?  EX12) Write a function to change the color of the main title
const changeMainTitleColor = function () {
  const title = document.querySelector(`.jumbotron h1 `);
  title.style.color = `green`;
};
// TODO changeMainTitleColor();
//?  EX13) Write a function to change the background of the jumbotron
const changeJumbotronBg = function () {
  const jumbotron = document.querySelector(`.jumbotron`);
  jumbotron.style.backgroundColor = `blue`;
};
// TODO changeJumbotronBg();
//?  EX14) Write a function to remove all the links under "Elsewhere"
const removeLink = function () {
  // const linkUnderElsewhere = document.querySelectorAll(
  //   `aside div h4 + ol:not(.mb-0) li`
  // );
  // linkUnderElsewhere.forEach((link) => link.remove());
  const linkUnderElsewhere = document.querySelector(
    `aside div h4 + ol:not(.mb-0)`
  );
  linkUnderElsewhere.innerHTML = ``;
};
removeLink();
//?  EX15) Write a function to change the column size for heading in jumbotron
const changeColumnSizeForHeading = function () {
  const jumbotronHeader = document.querySelector(`.jumbotron div`);
  jumbotronHeader.classList.remove(`col-md-6`);
  jumbotronHeader.classList.add(`col-md-9`);
};
// TODO changeColumnSizeForHeading();
//?  EX16) Write a function to remove the "Search" magnifying glass icon
const removeSearch = function () {
  const Search = document.querySelector(`header a svg `);
  Search.remove();
};
//  TODO removeSearch();
//? EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
const trimPost = function () {
  const posts = document.querySelectorAll(`.blog-post p:nth-child(3)`);
  posts.forEach((post) => {
    const inner = post.innerText;
    const slicedValue = inner.slice(150);
    post.innerText = slicedValue;
    // post.innerText = post.innerText.substring(150);
  });
};
trimPost();
//? EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
const addNewBlogPost = function () {
  const div = document.createElement(`div`);
  div.innerHTML = `<div class="blog-post">
  <h2 class="blog-post-title">NEW BLOG POST</h2>
  <p class="blog-post-meta">
  December 23, 2013 by <a href="#">kenneth</a>
  </p>
  <p>
  Cum sociis natoque penatibus et magnis
  <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
  Aenean eu leo quam. 
  </p>
  </div>`;
  // const newDiv = `<div class="blog-post">
  // <h2 class="blog-post-title">NEW BLOG POST</h2>
  // <p class="blog-post-meta">
  // December 23, 2013 by <a href="#">kenneth</a>
  // </p>
  // <p>
  // Cum sociis natoque penatibus et magnis
  // <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
  // Aenean eu leo quam.
  // </p>
  // </div>`;
  const btnNewer = document.querySelector(
    `nav.blog-pagination > a:nth-child(2)`
  );
  btnNewer.classList.remove(`disabled`);
  btnNewer.removeAttribute(`href`);
  btnNewer.addEventListener(`click`, function () {
    const parent = document.querySelector(`div.blog-main`);
    // parent.innerHTML += newDiv;
    parent.append(div);
  });
};
addNewBlogPost();
const Older = document.querySelector(`nav.blog-pagination > a `);
Older.addEventListener(`click`, addNewBlogPost);
//? EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
const removeLastPost = function () {
  const btnOlder = document.querySelector(
    `nav.blog-pagination > a:nth-child(1)`
  );
  btnOlder.removeAttribute(`href`);
  btnOlder.addEventListener(`click`, function () {
    const Blogs = document.querySelectorAll(`.blog-post`);
    Blogs[Blogs.length - 1].remove();
  });
};
removeLastPost();

//? EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
const authors = document.querySelectorAll(`.blog-post-meta > a`);
authors.forEach((author) => {
  author.addEventListener(`mouseover`, function () {
    alert(author.innerHTML);
  });
});
