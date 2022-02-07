








let politics = document.getElementById("politica");



new ClipboardJS('.copy_button', {
    text: function(_) {
        console.log("hi");
        return copyPolitics();
    }
});


function copyPolitics()
{


    let politicContent = readPolitics();
    

 //   console.log(`politics: ${politicContent}`);
 
    
    return politicContent;
}



function readPolitics()
{

    let readContent = "";

    for(child of politics.children)
    {
  
        readContent += readElementFromPolitics(child);

    }

    return readContent;
}


function readElementFromPolitics(element)
{
    let elementContent = "";
    for(element of child.children)
    {
 
            if(element.tagName == "UL")
            {
                for(el of element.querySelectorAll("li"))
                {
                    elementContent += el.innerHTML;
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
            

            elementContent += elementCopy.innerHTML;
    }

    return elementContent;
}