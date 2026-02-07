onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  window.onload = function() {
  alert(
    "Hey Tulsi 💖\n\n" +
    "If you reached this page, you already said YES in my heart 😏\n" +
    "Now just make it official."
  );
};
