/* import  Tessaron  from "./tessaron";

const html = `
  <div id="container">
    <h1 class="title">Hello, Tessaron!</h1>
    <p class="desc">A lightweight HTML parser</p>
    <a href="https://example.com">Visit</a>
  </div>
`;

(async () => {
  const parser = await Tessaron.read(html);

  console.log(parser.text("#title")); 
  console.log(parser.html(".desc"));  
  console.log(parser.attr("a", "href")); 
})();


*/