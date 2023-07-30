const cr = () => {
  let s = window.location.href;
  //string 'shorts' is in the url and not at the end,
  //like on a channel's shorts page.
  if(s.indexOf('shorts') != -1 && s.length - s.indexOf('shorts') > 7) {
    window.location.replace(window.location.href.replace('shorts/', 'watch?v='));
  }
};


window.onload = () => {
  cr();
  let oldHref = document.location.href;
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) { 
      cr();
      oldHref = document.location.href;
    }
  });
  observer.observe(document.querySelector("body"), { childList: true, subtree: true });
};
