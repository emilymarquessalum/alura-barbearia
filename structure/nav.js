
/*

 -- this explanation below can also be found in my README, but in case you didnt see or
 skipped that...-

 Weird stuff in my files... Em here to explain!

 The file nav.js along with footer.js make so that we add the footer and navbars to
 all of our pages (that is, as long as they import these).

 Learned of this type technique about an year ago. 


 The first time I used it:
 https://www.w3schools.com/howto/howto_html_include.asp


 The way I used it in this case, which was easier: (new answer made in Dec 26 '21 at 16:35)
 https://stackoverflow.com/questions/18712338/make-header-and-footer-files-to-be-included-in-multiple-html-pages/29858653

Now, to use these its necessary to make an element and give it a certain id
I decided to make so these elements are divs inside of either the header or the footer

So, the content of the footer is not actually inside the footer, but inside a div that is
inside of the footer.. But our page uses it to semantically indicate 
-where- the footer is! It also allows us to expand what is considered
a header or footer inside of any particular page. 

*/

let appNav = `
            
            <div class = 'nav-box'>
              <h1>
                  <img src = "res/logo-branco.png" class = "alura_logo">
              </h1>

              
              <nav >
                <ul>
            
                    <li>
                          <a href="index.html">Home</a>
                      </li>

                      <li>
                      <a href="contatos.html">Contatos</a>
                      </li>

                      <li>
                      <a href="product_page.html">Produtos</a>
                      </li>
                </ul>    
              </nav>
            </div< 

            
`;

/* tip: check if your variable name doesnt collide with the name of some other module. */
let navbar = document.getElementById("app-nav");

navbar.innerHTML = appNav;



const body = document.body;  
let scrollDown = "scroll-down"; 


let scrollLimit = body.scrollHeight * navbar.getAttribute("show-up") / 100;

console.log("scroll limit is " + scrollLimit);

let  inicial_pad = navbar.getAttribute("init-pad");

if(!inicial_pad)
{
  inicial_pad = 0;
}

navbar.insertAdjacentHTML("afterend",'<div style= "padding-bottom:' + inicial_pad +'%;"> </div>' )

navbar.classList.add(scrollDown);
 



if(scrollLimit == 0)
{
  navbar.classList.add('scrolled');
  navbar.classList.remove(scrollDown);
 
}
else
{

console.log("Gonna call up scroll");
let finishedScroll = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if(finishedScroll)
    {
      return;
    }

    
    if (currentScroll < scrollLimit) {
      //;
      
      console.log("Scroll limits..");
      return;
    }
      
    console.log("finishing scroll");

    navbar.classList.add('scrolled');
  navbar.classList.remove(scrollDown);
 
     finishedScroll =true; 
  });
  
  
}


/* # test it in an empty page! Em always bringing up the best solutions uhu!

  for(let i = 0; i < 1000; i++)
  {
      
  document.write("s <br   >");
  }
  
*/ 
