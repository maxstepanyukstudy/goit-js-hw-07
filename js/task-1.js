const categories = document.querySelector("ul#categories");

const nCategories = categories.children.length;
console.log("Number of categories: " + nCategories);

const categoryLiItems = categories.querySelectorAll("li.item");

categoryLiItems.forEach((liItem) => {
  const title = liItem.querySelector("li.item > h2").textContent;
  console.log("Category: " + title);

  const subCategoriesNumber = liItem.querySelectorAll("li").length;
  console.log("Elements: " + subCategoriesNumber);
});
