# Alura-Barbearia


Site Curso da Alura - HTML 

## Relacionados

 [Link Docs Para conteúdo estudado](https://docs.google.com/document/d/15aEcVLfdDfoKa_wCJQsRasfXziqRMN9UHO1MjB-O3ho/edit?usp=sharing)


## Estado

Em desenvolvimento.

## "structure" folder

 Inside the structure folder, you can find the file nav.js along with footer.js, and their respective .css files. Together, they allow us to share the footer and navbars to all of our pages, as long as the page imports them.
 
 Learned of this type technique about an year ago. 


 The first time I used it the source was from [here](https://www.w3schools.com/howto/howto_html_include.asp)


 The way I used it in this case, which was easier,
 I got it from [here!](https://stackoverflow.com/questions/18712338/make-header-and-footer-files-to-be-included-in-multiple-html-pages/29858653) (from the new answer made in Dec 26 '21 at 16:35)

### How did you use that?...
To use these its necessary to make an element and give it ids of "app-nav" and "app-footer", that will represent where the elements of the footer and navbar will be. Then, you need to import the 2 .js files, and the 2 .css files.

I decided to make so the element representative of the footer section or navbar section are divs inside 
of either the header or the footer

So, the content of the footer section is not directly inside the footer. I could have made it differently, making
so that it would get the footer itself by tag, without the need for an id, and then add it up. However, by making so its a div that is
inside of the main element I find it more semantically logical and explicit.
Accepting opnions towards that however! Give me your thoughts!
