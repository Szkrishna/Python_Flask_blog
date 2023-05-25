function doThing(event) {
  event.preventDefault();
  window.confirm('Do you want to delete this post?') ? 
    window.location.href="/delete/{{post.sno}}" :
    null;
};