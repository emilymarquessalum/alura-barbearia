# alura-semana-4


Site do Curso da Alura

## Relacionados

 [Notion](https://bristle-place-65a.notion.site/Botic-rio-HTML-CSS-05165d9b1ea947a0a574d21e67a4f673)


## Estado

Em desenvolvimento.

## "structure"

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
