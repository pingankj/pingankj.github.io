var posts=["2024/11/26/hello-world/","2024/11/27/windows/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };