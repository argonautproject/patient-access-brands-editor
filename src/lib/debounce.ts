export default function debounce() {
    let timer = null;
    return (f, duration) => {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(f, duration);
    };
  }

 