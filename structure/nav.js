
/*
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


nav = document.getElementById("app-nav");

nav.innerHTML = appNav;



const body = document.body; 
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

let scrollLimit = nav.getAttribute("show-up");


nav.classList.add(scrollDown);

let firstShow = true;

if(scrollLimit == 0)
{
  nav.classList.add('scrolled');
  nav.classList.remove(scrollDown);
  firstShow = false;
}

else
{

let finishedScroll = false;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if(finishedScroll)
    {
      return;
    }

    if (currentScroll < scrollLimit) {
      nav.classList.add(scrollDown);
      
      return;
    }
      
    if(firstShow)
    {
      nav.classList.add('scrolled');
    }

    nav.classList.remove(scrollDown); 
    
     
    lastScroll = currentScroll;
  });
  
  
}


/* # test it in an empty page! Em always bringing up the best solutions uhu!

  for(let i = 0; i < 1000; i++)
  {
      
  document.write("s <br   >");
  }
  
*/ 
