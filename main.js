let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0992ab;">Desarrollo sitios web y me gusta la Tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
