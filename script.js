const cr = () => {
  if(window.location.href.indexOf('shorts') != -1) {
    window.location.replace(window.location.href.replace('shorts/', 'watch?v='));
  }
};


window.onload = () => {
  cr();
  let oldHref = document.location.href;
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      cr();
    }
  });
  observer.observe(document.querySelector("body"), { childList: true, subtree: true });
};
