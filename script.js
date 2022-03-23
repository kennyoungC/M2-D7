`use strict`;
// ? EX11) Write a function to add a new link into the navbar
const addNewLink = function () {
  const allNavLink = document.querySelectorAll(`.nav-scroller > nav.nav a`);
  allNavLink.forEach(
    (link) =>
      (link.href = `https://getbootstrap.com/docs/4.6/layout/grid/#equal-width-multi-line`)
  );
};
// TODO addNewLink();
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
  const linkUnderElsewhere = document.querySelectorAll(
    `aside div h4 + ol:not(.mb-0) li`
  );
  linkUnderElsewhere.forEach((link) => link.remove());
};
// TODO removeLink();
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
//? EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
//? EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
//? EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
