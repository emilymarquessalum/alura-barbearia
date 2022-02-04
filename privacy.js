








let politics = document.getElementById("politica");

function copyPolitics()
{


    console.log("hey yo");

    for(child of politics.children)
    {

         
        
        for(element of child.children)
        {
 
            if(element.tagName == "UL")
            {
                for(el of element.querySelectorAll("li"))
                {
                    console.log(el.innerHTML);
                }
                continue;
            }

            elementCopy = document.createElement(element.tagName);

            element.querySelectorAll("a");

            elementCopy.innerHTML = element.innerHTML;
 

            for(link_elem of elementCopy.querySelectorAll("a"))
            {
                link_elem.parentNode.removeChild(link_elem);
            }
            

            console.log(elementCopy.innerHTML);
        }

    }

}