let childrenElemArray = []

const addNewPage = () => {
  const newPage = document.createElement("div")
  newPage.classList.add("_a4-paper")

  const paperPage = document.querySelector("._paper-page")
  paperPage?.appendChild(newPage)

  const paperColumns = document.createElement("div")
  paperColumns.classList.add("_paper_column-2")
  newPage.appendChild(paperColumns)
}

export const hasOverflown = (children, container) => {
  // converts nodelist into array and filters out the 'comment' Node elements...
  childrenElemArray = Array.from(children).filter(
    item => item.nodeType !== Node.COMMENT_NODE
  )

  for (let i = 0; i < childrenElemArray.length; i++) {
    if (childrenElemArray[i].offsetLeft >= container.clientWidth) {
      console.log("overflowed at...", childrenElemArray[i])
      return {
        isOverflown: true,
        overflownAtElement: childrenElemArray[i],
        overflownAt: i
      }
    }
  }
  return {
    isOverflown: false,
    overflownAtElement: null,
    overflownAt: null
  }
}

export const breakPage = (children, container) => {
  const { isOverflown, overflownAt, overflownAtElement } = hasOverflown(
    children,
    container
  )

  if (!isOverflown) {
    return 0;
  }

  if (isOverflown && overflownAt) {
    addNewPage()

    const newSlicedChildrenElemArr = childrenElemArray.slice(overflownAt)
    // childrenElemArray = childrenElemArray.slice(0, overflownAt)

    // adding divs into new .paper_column-2 of newly created page
    const newArticleColumn = document.querySelectorAll("._paper_column-2");
    newSlicedChildrenElemArr.forEach(item => {
      // document.querySelector("._paper_column-2")?.appendChild(item)
      newArticleColumn[newArticleColumn.length - 1].appendChild(item)
    })
  }

    const allNewPageContainer = document.querySelectorAll('._paper_column-2');
    const latestNewPageContainer = allNewPageContainer[allNewPageContainer.length-1];
    const newPageChildrens = latestNewPageContainer?.childNodes;
    breakPage(newPageChildrens, latestNewPageContainer);

}
