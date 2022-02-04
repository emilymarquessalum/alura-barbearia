# Barbearia Alura - HTML, CSS

---

Github do site: https://github.com/emilymarquessalum/alura-barbearia

## Definições - Curso (com um pouquinho de Pesquisa Online!)

- HTML
    
    Hyper Text Markup Language, tipo de arquivo para uma linguagem de marcação usada na criação de páginas web. Define a estrutura semântica da página.
    
- Tag
    
    Nomes especiais que modificam o conteúdo da pagina. São demarcados por <> e, quando são do tipo de tag que fecha, </>. 
    
    <h1> Texto dentro de h1 </h1>
    
    Cada tag tem seu significado e funcionalidade particular. 
    
    Tags podem receber ‘atributos’ dentro de suas tags de entrada para especificar certos valores.
    
    <h1 nome-de-propriedade = “”> </h1>
    
    Atributos de toda tag:
    
    - id
        
        Componentes podem ter um id, para diferenciação do componente. O id é um valor único para cada componente!
        
    - style
    - class
        
        Explicações serão feitas na categoria CSS.
        
    
    Podemos adicionar atributos próprios para elementos, e acessa-los no javascript. 
    Darei exemplo na seção de javascript.
    
- Estrutura HTML
    
    Os componentes que formam o HTML de nosso site são colocados dentro de outros para compor a estrutura, definindo relações de parent e child (pai e filho). 
    
    Um componente tem 1 pai, e pode ter muitas filhas.
    
    - <!DOCTYPE>
        
        Através de DOCTYPE, no topo da página, configuramos a versão do HTML que nossa página está utilizando, definindo para o navegador como ela deve ser carregada. 
        <!DOCTYPE html>
        Ao definir apenas “html” em DOCTYPE, estamos dizendo que a versão mais atual deve ser utilizada. Esta possibilidade foi adicionada a partir da versão 5 do HTML.
        
    - <html ...> </html>
        
        Propriedades:
        
        - lang
            
            Através desta propriedade podemos especificar a linguagem utilizada no site. Desta forma, permitimos que seja identificado. 
            
            <html lang = “pt-br”>
            
        
        Estrutura Anexada:
        
        - <head> </head>
            
            Metadata sobre o site.
            
            - <title> ... </title>
                
                Especifica o título da página.
                
                <title> Week 4- HTML </title>
                
                ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled.png)
                
            - <meta ...>
                
                Utilizado para definir certos valores que serão usados pelo navegador para o carregamento de nossa página.
                
                - charset
                    
                    Define o character set, o sistema utilizado para carregar os caracteres. Exemplos de charsets: “UTF-8”, “UNICODE”, “LATIN1”, “ASCII”. Esta escolha é relevante pelo suporte necessário que gostaríamos de ter em certos caracteres. Por exemplo, não utilizaríamos “ASCII” se quiséssemos carregar acentuação. 
                    # TODO: Add link to week 2 related to character sets.   
                    
                    <meta charset = “UTF-8”>
                    
                - viewport
                    
                    <meta name="viewport" content="width=device-width">
                    
                    Utilizamos esta tag para especificarmos como o tamanho será definido para o viewport.
                    
                
            - <link>
                
                Utilizamos link para definir arquivos externos que devem ser importados juntamente ao carregamento do site.
                <link rel = “stylesheet” href = “style.css”>
                
                Através de href, especificamos onde o arquivo deve estar.  
                
                Através de rel, especificamos o tipo de relação do arquivo externo com o arquivo atual. Então, através de ‘rel = “stylesheet”’ definimos que o arquivo desse ser considerado o stylesheet do site, permitindo que ele altere sua aparência.
                
            
             
            
        - <body> </body>
            
            Onde todo o conteúdo visual da página está!
            
            - <header> </header>
                
                Cabeçalho, início de nossa página
                
                - <nav> </nav>
                    
                    Definimos através disto onde teremos a barra de navegação de nossa página
                    
            - <main> </main>
                
                Tag para indicar conteúdo principal da página
                
            
            - Tags de Conteúdo
                
                Categorizam as diferentes partes de nosso conteúdo para adequar seu objetivo, ênfase e importância. Visualmente, alteram posicionamento, espaçamento e/ou aparência do texto.
                
                - <H1...H6> ...  </H1...H6>
                    
                    Headings, utilizadas para demarcar certa seção de texto como um título ou subtítulo de um conteúdo,  demarcando seu sentido principal. Quando maior o número, menor será sua relevância para o conteúdo geral da página. Visualmente, por default, heading faz o texto ficar em negrito e modifica seu tamanho conforme o nível utilidade.
                    
                    <h1> Titulo de exemplo</h1>
                    
                    Existem recomendações sobre utilizar apenas um <h1> por página, o texto principal, pois, supostamente, os motores de pesquisa utilizariam essa informação.  Você pode ler sobre isso aqui se quiser: [https://www.searchenginejournal.com/h1-headings-for-google/406720/#:~:text=That means one H1 on,down as low as H4](https://www.searchenginejournal.com/h1-headings-for-google/406720/#:~:text=That%20means%20one%20H1%20on,down%20as%20low%20as%20H4).
                    
                    Porém, podemos concluir que, apesar de não existir necessariamente um limite de uso para heading, motores de pesquisa utilizam o conteúdo nessas heading para categorizar a página em pesquisas. Por esta razão, é importante pensarmos com relevância no uso deste elemento para clarificação de nosso conteúdo, e não pelas modificações visuais, afinal de contas este não é o objetivo do HTML e sim do CSS 
                    
                - <br>
                    
                    Esta tag, “break”, força uma quebra de linha.
                    
                - <p></p>
                    
                    Delimita parágrafos.
                    
                    <p> Esse é um paragrafo</p> <p>  E esse é outro paragrafo </p>
                    
                - <img ...>
                    
                    Utilizamos esta tag para colocar imagens em nosso site
                    
                    Atributos:
                    
                    src: Utilizamos src para especificar o caminho da imagem que será colocada na página.
                    
                    alt: descrição da imagem, adicionada com o objetivo de tornar nosso site mais acessível e inclusivo.  
                    
                - <a ...> </a>
                    
                    Através desta tag definimos hyperlinks em nossa página.
                    Hyperlinks são conteúdos comuns que o usuário pode clicar para ir para outra página.
                    
                    <a href= “caminho-pra-pagina”> Clique Aqui  </a>
                    
                - <ul> </ul>, <ol> </ol>
                    
                    unordered list, ordered list.
                    Utilizamos para definir listas de conteúdos. ol para listas em ordem (como instruções) e ul para listas sem ordem definida.
                    
                    <li>  </li> : list item. Utilizamos um li para cada item na lista que estamos definindo. 
                    
                - <div> <div>
                    
                    Division, divisão. Colocamos elementos dentro de divs para separar partes do nosso conteúdo em grupos que façam sentido para nossa estrutura.
                    
                    <div id = “painel”>
                    
                    ...
                    
                    <div>
                    
                    <div id = “recomendados”>
                    
                    ...
                    
                    </div>
                    
                - <section </section>
                    
                    Uma seção é como um div, porém serve para indicar uma parte do conteúdo que tenha o mesmo sentido, objetivo. 
                    
                - <strong></strong>
                    
                    Utilizamos strong para dar ênfase maior em uma determinada seção de um texto. Por default, ele se coloca em negrito. 
                    
                    Escrevemos uma frase e podemos dar ênfase <strong> no meio dela</strong> desta maneira. 
                    
                - <em> </em>
                    
                    Utilizado para indicar um contraste implícito ou explicito de determinado conteúdo. Por default, deixa o texto em italics.
                    
                - <i> </i>
                    
                    A ênfase  nesse caso pode representar uma palavra em outro idioma, pensamentos de um personagem, ou definição de uma palavra. Ou seja, pode ser útil na utilização de metalinguagem, ou para demarcar uma mudança no contexto do modo de comunicação. Como <em>, deixa o texto marcado com italics por default.
                    
                - <form> </form>
                    
                    Criação de formulários. Por ter um conteúdo extensivo, será explicado em outra categoria, abaixo da seção de CSS.
                    
                - <iframe> </iframe>
                    
                    Utilizamos essa tag para inserir janelas de conteúdo externo de algum serviço que o disponibilize, como o Google Maps por exemplo. 
                    
                
            - <footer> </footer>
                
                Final da página
                
        
    
- CSS
    
    Cascading Style Sheets, através de arquivos CSS podemos especificar a aparência dos componentes na estrutura HTML. Chamamos Cascading pois as propriedades são passadas do componentes parent para suas childrens. Se modificássemos a cor do elemento “body” por exemplo, que é parent de todos os elementos visuais da página, todos os elementos do site trocariam sua cor. 
    
    - Como Usar
        - <tag style = “...”>
            
            É possível especificar o estilo de um elemento particular através do próprio HTML. Exemplo:
            
            <p style = “font-size: 20px”> Texto com tamanho 20! </p>
            
            Porém esta maneira não é utilizada pois:
            
            1. HTML deveria ser utilizado para criar a estrutura semântica, e não definir a aparência.
            2. Esta técnica modificaria aquele paragrafo, não teríamos modificado qualquer outro paragrafo de nosso site. Por esta razão, utilizamos as regras de CSS com métodos de seleção para atingirmos um grupo de elementos. 
            
             
            
        - <style> </style>
            
            - Criamos esta tag no html em <head>, podendo criar regras CSS dentro dela, podendo assim selecionar diversos elementos para modifica-los. Esta técnica ainda não é a correta, pois:
            
            1. É desorganizado.
            2. Não poderemos usar o mesmo estilo de uma página em outra.
        - Arquivo CSS
            
            Criamos um arquivo .css, que poderá ser importado por qualquer página. Desta forma, temos regras de CSS que alteram os elementos da página, e temos páginas utilizando as mesmas regras. Atingimos consistência através disso!
            
            As outras maneiras poderiam ser usadas se a pessoa quisesse testar algo, mas fora isso não é uma escolha inteligente.
            
        
         
        
        A estrutura básica de uma regra CSS:
        
        METODO-DE-SELECAO
        
        {
        
           propriedade: valor;
        
        }
        
        As propriedades e métodos de seleção serão especificados abaixo
        
    - Propriedades
        
        Propriedades podem ser usadas para modificar a forma na qual os elementos da página serão renderizados. Afetamos seu tamanho, cor, posicionamento, visibilidade, entre outros. Algumas dessas propriedades: 
        
        Syntax da seção:
        
        “...” - valores serão especificados dentro da seção
        
        “(Tipo-De-Propriedade)”, valores foram especificados abaixo, em “Valores Para Propriedades”
        
        - Exclusivamente Para Textos
            - font-size: (Tamanhos)
                
                Podemos alterar o tamanho que um texto será renderizado
                .h1
                {
                
                font-size: 100px; 
                
                }
                
                Recebe: Um número + unidade de medida para tamanho
                
                A lista de unidades de medida para tamanho de texto será especificada aqui: [https://www.notion.so/Week-4-HTML-05165d9b1ea947a0a574d21e67a4f673#94bd1a2ec00949c8949ae41d16365231](https://www.notion.so/Barbearia-Alura-HTML-CSS-05165d9b1ea947a0a574d21e67a4f673) 
                
            - font-style: ...
                
                O estilo do texto. É desta maneira que <em> altera a aparência do texto para itálico.
                
                normal (default)
                
                italic
                
                oblique
                
                italic X oblique
                
                italic conta como uma versão especial da fonte, enquanto oblique é a fonte enclinada.
                
                Ao utiliza-las numa fonte comum, pode ser que não seja percebida nenhuma diferença, isto porque aquela fonte não tinha nenhuma configuração especial e foi utilizado o efeito de oblique invés disso.
                
                 
                
            - font-family: ...
                
                utilizamos para definir a fonte que será utilizada para o texto. Além disso, definimos mais de um para serem escolhidos,  evitando problemas caso algum recurso de fonte não esteja disponível. A prioridade de qual recurso utilizar será por ordem, entãõ se tudo der certo a fonte selecionada deve ser a primeira.
                
            - line-height - Valor
                
                A quantidade de espaço de uma linha pra outra, em um bloco que contenha texto.
                Colocamos um número que regulará baseando-se no tamanho do texto.
                
                line-height: 1 == tamanho do texto
                
                line-height: 1.5 = = tamanho to texto + 50%
                
            - text-shadow: ...
                
                Sombreamento de texto.
                
                x
                
                y
                
                raio de desfoque
                
                cor
                
                text-shadow: 1px 1px 0.005em #ffffff;
                
            - text-transform: ...
                
                Utilizamos esta tag para definir uma configuração de nosso texto com relação as letras.
                
                uppercase = maiúsculas.
                
                lowercase = minúsculas.
                
                capitalize = primeira letra em uppercase.
                
            - text-decoration-thickness: (Tamanhos)
                
                Através desta propriedade podemos alterar a grossura da linha da text-decoration. Pessoalmente, eu considero o text-decoration algo bem feio por default.  Configurar sua grossura pode torna-lo mais aceitável!
                
            - text-decoration (Estilo de Traço)
                
                Decoração do texto, um traço abaixo dele. Definimos seu tipo de linha, estilo e cor.
                
                h3 {
                
                text-decoration: underline dashed red;
                
                }
                
                text-decoration-line: underline, overline, line-through *(OBRIGATÓRIO!)
                
                text-decoration-color: Cores
                
                text-decoration-style: Estilo de Desenho
                
            - font-weight: ...
                
                Como acima, mas para negrito!
                
                normal (default)
                
                bold
                
                bolder
                
                lighter
                
        - Cores e Imagens
            
            PS: Se houverem novas propriedades relacionadas a imagem exclusivamente, seria interessante ter uma categoria só para imagens.
            
            - background-color: (Cores)
                
                Cor de fundo do espaço ocupado pelo elemento. 
                
            - color: (Cores)
                
                Cor do elemento. Através dele, podemos alterar a cor da fonte, 
                
            - opacity: ( 0f - 1f )
                
                Opacidade do elemento. Através desta propriedade podemos tornar elementos transparentes.
                
                Além disso, podemos definir a opacidade por meio da cor do elemento. 
                
            - box-shadow
                
                Permite definir uma sombra para o elemento
                 
                
                Para isso, definimos:
                
                eixo x, 
                
                eixo y 
                
                blur
                
                tamanho da sombra
                
                cor da sombra.
                
                box-shadow: 10px 10px #ffffff;
                
            - background: ...
                
                Podemos passar uma imagem para o background! Assim, o fundo fica bem mais personalizado.
                
            - background-attachment: ...
                
                Utilizamos para especificar o comportamento da imagem de fundo com relação ao scrolling
                
                fixed
                
                local
                
                scroll
                
        - Regras De Espaço, Preenchimento e Posição
            - width, height (Tamanhos)
                
                Largura e altura do componente.
                
            - max-width, max-height (Tamanhos)
                
                O elemento não pode ter seu width ou height maior que o valor estipulado por max-width e max-height.
                
            - padding (Tamanhos)
                
                Espaçamento interno dentro do componente. Podemos especificar as direções em que é aplicado. 
                
                padding-left, padding-top, padding-right, padding-bottom
                
            - margin (Tamanhos)
                
                Espaçamento externo do elemento. 
                
                margin-left, margin-top, margin-right, margin-bottom
                
            - text-align: ...
                
                Define o alinhamento do elemento, com base no elemento parent. 
                
                left - esquerda do parent
                right - direita do parent;
                center - centro do parent;
                justify - Faz com que o conteúdo tente ocupar todo o espaço de um bloco em cada linha, exceto na última
                
                Leitura sobre [https://css-tricks.com/almanac/properties/t/text-align/](https://css-tricks.com/almanac/properties/t/text-align/)
                
            - border: ...
                
                Podemos estilizar a borda do elemento. A borda é localizada entre o padding (espaçamento interno) e a margin (espaçamento externo). Para definir uma borda por completo, temos:
                
                border-color: Cor
                
                border-width: Tamanho
                
                border-style: Estilo de Traço
                
            - border-radius - Valor
                
                Essa propriedade permite arredondar a forma da borda definida pela propriedade border citada acima.
                
            - overflow
                
                Define como um elemento será renderizado quando for grande demais para a determinada área que ele deveria ocupar. A área tem que ter definido uma altura, height, para que o overflow seja considerado.
                
                visible: Conteúdo ultrapassa área
                
                hidden: Partes do conteúdo fora da área não são visíveis.
                
                scroll: Uma scrollbar é adicionada a área, e o usuário pode utilizar ela para ver diferentes partes do conteúdo.
                
                auto:  Como scroll, mas a scrollbar só aparece caso o conteúdo tenha realmente ultrapassado a tela.
                
        
        - Regras De Posicionamento
            - position: ...
                
                Define o método de posicionamento inicial do elemento
                
                static = (default) Posição definida pelo flow da página.
                
                relative = Posição é relativa a sua posição normal.  
                
                fixed = Posição é relativa a tela da página. O elemento continuará em posição visível mesmo após scrolling.
                
                absolute = valor relativo ao ponto ancestral mais próximo. Não faz parte do flow da página.
                
                Basicamente, alteramos isso e podemos utilizar para ter controle especifico da posição do elemento. 
                
            - display: ...
                
                Define a maneira em que o elemento será disposto em relação ao flow de blocos de nossa página.
                
                block → elemento ocupa toda a sua linha de bloco.
                
                inline → elemento ocupa seu tamanho, e permite que outros elementos possam ir para seu lado.
                
                inline-block →  elemento ocupa seu tamanho, porém pode ser regulado.
                
            - float: ...
                
                
                Retira o elemento do fluxo/flow normal que ele ocuparia, e força elementos, como texto, a ficarem ao seu redor.
                
            - clear
                
                O float influencia a estrutura de nossa página, modificando a maneira que outros elementos se posicionam. Usamos clear para impedir mudanças na estrutura que não queiramos. 
                
            - vertical-align (Direções)
                
                Alinhamento vertical
                
                bottom (default)
                
                top
                
        - Regras De Interação
            
            Mudanças na forma em que o usuário pode interagir com o elemento. Não são reações para a interação, isso veremos em pseudo selectors. 
            
            - cursor
                
                Definimos como o cursor do mouse reagirá quando estiver sobre o element
                
            - user-select
                
                Como o usuário poderá selecionar o elemento. 
                
                h1
                
                {
                
                user-select: none;
                
                }
                
                A regra acima faz com que elementos h1 não sejam selecionados (seu texto não será selecionável, e a aparência do cursor não terá reação ao passar por cima dele).
                
        
        - Etc
            - transition - segundos
                
                Definimos a velocidade em que um elemento muda ao ter suas regras  mudadas por uma interação. Abaixo, leia sobre Interações.
                
            - content
                
                Conteúdo do elemento
                
            - transform
                
                Através de transform, podemos definir diversas mudanças complexas em nosso elemento
                
                scale(X): Elemento e suas propriedades de tamanho mudam proporcionalmente
                
                rotation(X): Rotacionamos um elemento, em graus.
                
        
    - Valores Para Propriedades
        
        Aqui colocarei informações úteis quando utilizando valores nas propriedades.
        
        - Tamanhos
            
            Quando especificando coordenadas e tamanhos, é necessário utilizar uma unidade de medida que será usada para calcular o valor final. Tipos:
            
            - Absolute
                
                 Valor independente de tela, não é bom para páginas responsivas. 
                
                - cm
                    
                    Valor em centímetros.
                    
                - mm
                    
                    Tamanho em milímetros! 
                    
                - in
                    
                    1 inche = 2.54cm
                    
                - px
                    
                    1px = 1in / 96
                    
                    Apesar de absoluto, em dispositivos de alta resolução o valor de 1px pode representar um grupo de pixels. Chamamos isso de DPI, (dots per inch) a densidade de pixels por polegada. 
                    
                     
                    
                     
                    
                       
                    
                
            - Relative
                
                Medida relativa a algo. Cada uma das opções abaixo tem seu próprio método, podendo ser útil para diferentes situações. 
                
                - vw, vh
                    
                    Relativos ao tamanho da janela do browser. vw representa 1% de sua largura, vh representa 1% de sua altura.  
                    
                - vmin, vmax
                    
                    vmin: 1% da medida menor da tela, vmax: 1% da medida maior da tela 
                    
                - em
                    
                    Relativo ao tamanho da fonte do elemento.
                    
                - rem
                    
                    Relativo ao tamanho da fonte do elemento raiz
                    
                - %
                    
                    Relativo ao elemento parent.
                    
                
            
            Além disso, temos como realizar calculos usando diferentes tipos  de métrica usando calc()
            
            calc(40% - 25px)
            
             
            
        - Cores
            
            Existem algumas formas de definir cores no css. Mencionarei algumas.
            
            - Por nome!
                
                O css já tem alguns nomes de cores definidas. Exemplo:
                
                h1{
                
                color: red;
                
                }
                
                Isso realmente funciona, tornando a cor do texto vermelha!
                
                Não é exatamente prático, é simples de definir porém teríamos que utilizar outro método se quiséssemos ajustar a cor para algo específico. Nem um pouco dinâmico! 
                
            - RGB!
                
                (R - vermelho, G - verde, B - azul):
                
                Especificamos a cor pelos valores RGB, de 0 a 255! 
                
                color: rgb(255, 0, 0); 
                
                podemos utilizar porcentagem também:
                
                color: rgb(100%, 0%, 0%);
                
            - RGB por Hexadecimal!
                
                Como o anterior, porém invés de escrever rgb(...), usamos números hexadecimais.
                
                base 10, decimal: (0,1,2,3,4,5,6,7,8,9)
                
                base 16, hexadecimal: (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F)
                
                color: #FF0000 
                
                Equivalente a disser rgb(255, 0, 0).  Ou seja, F significa 255 e 0 significa.. 0!
                
                Eu pessoalmente prefiro usar esse método.
                
            
            Cores ainda podem receber um valor de opacidade!
            
            Temos um valor adicional na declaração da cor.
            
            - RGBA
                
                rgb(120, 100, 10, 0.5)
                
            - RGBA Hexadecimal
                
                #FF12FFFF
                
                Adicionamos mais dois números no final para a opacidade.
                
            
            Além disso, podemos fazer regras de cor mais complexas com...
            
            Transição de cores!
            
            - linear-gradient
                
                Passamos para o linear-gradient instruções para a criação de uma transição linear de cores. 
                
                Podemos passar um valor em deg (degrees, graus) para configurar a inclinição da transição.
                
                Após isso, podemos passar valores de cor. Automaticamente, o espaço ocupado por cada cor será dividido igualmente entre elas. Caso queiramos especificar o quanto de espaço uma cor deveria ocupar simplesmente colocamos a quantidade em % ao lado da cor
                
                linear-gradient(45deg, red, green, blue)
                
                linear-gradient(red, green, blue)
                
                linear-gradient(45deg, red 50%, green, blue)
                
            - radial-gradient
                
                Como linear gradient, porém a transição será feita de forma circular
                
            
        - Direções
            
            top, bottom, right, left
            
        - Estilo De Traço
            
            solid = linha normal
            
            dashed = linha tracejada
            
            dotted = linha pontilhada
            
            double = linha dupla
            
            wavy = linha ondulada
            
            none = linha nenhuma
            
        - Imagem!
            
            Dentro do css, podemos chamar url(”path”), especificando o caminho de uma imagem para utiliza-la em alguma propriedade que a aceite.
            
        
         
        
    - Métodos de Seleção
        
        O css tem diversos métodos para selecionar elementos.
        
        - <tag-name>
            
            Definimos uma seleção por tag. 
            h1
            
            {
            
            background-color: #c3c3c3;
            
            }
            Assim, mudamos a cor de fundo de todos os elementos H1 da página!
            
        - #id
            
            Utilizamos “#” com o id do componente para selecionar um componente específico de nossa página.
            
        - .class (Método recomendado!)
            
            Da mesma forma que utilizamos id, podemos definir classes para um elemento de nossa interface, e então selecionar a classe para modificar sua aparência. Porém, classes não são únicas! Então, utilizamos classes para definir um grupo específico de nossa página, sem alterar indevidamente elementos comuns através de tags, ou um por um através de ids.
            
            Para selecionar uma classe, é necessário colocar um “.” antes de seu nome ao definir uma regra CSS.
            
            .aviso
            
            {
            
            color: red;
            
            }
            
        - tag.class
            
            Juntamos a especificação por tag e de classe, para definir que devem ser selecionados apenas os elementos que sejam de uma tag E classe. 
            
            p.section
            
            {
            
            font-size: 22px;
            
            }
            
            Apenas parágrafos com a classe section serão selecionados! Um paragrafo comum, ou outro elemento que tenha a classe section mas não seja um paragrafo, não será selecionado!!
            
        
        Também é importante entendermos como selecionar estruturas específicas de nossos elementos, com base na relação de child e parent. Desta vez, utilizamos mais de uma regra de seleção, uma do lado da outra, para sinalizar que queremos modificar elementos que estejam dentro de outros elementos, portanto que todos sejam correspondentes a estrutura especificada.
        
        div h2
        
        {
        
        color: red;
        
        }
        
        Apenas h2 que estivesse dentro de um div seriam selecionados pela regra acima.
        
        .pagina .nome { ... } - > Selecionamos um elemento com classe nome, que esteja dentro de um elemento de classe pagina. 
        
        Devemos entender que, mesmo que “.nome” esteja dentro de um elemento que não seja “.pagina”, ainda é possível que ele receba a regra, portanto que ele esteja dentro da estrutura. Não é necessário que eles estejam diretamente relacionados. Se por exemplo tivermos um .nome dentro de um div, e esse div estivesse dentro de .pagina, a regra ainda conta!
        
        Temos também...
        
        - Múltipla Seleção
            
            Podemos realizar mais de uma seleção por vez separando os métodos de seleção por vírgula!
            
            h1, h2, #principal
            
            {
            
            background-color: #c3c3c3;
            
            }
            
            Agora h1, h2 e um elemento com id “principal” terão essa cor de fundo!
            
        - Pseudo Elementos
            
            Pseudo elementos são palavras chave que são usadas para especificarmos ainda mais quando uma certa regra se aplicará. Para utilizar um pseudo elemento, colocamos “:” e seu nome após uma regra css.
            
            h1:pseudo-element
            
            Vejamos os diferentes tipos de pseudo elemento..
            
            - De Interação
                
                Podemos definir a maneira na qual nossos elementos reagem a certas interações feitas pelo usuário. 
                
                - hover
                    
                    Quando o usuário passa o mouse sobre o elemento
                    
                    a:hover
                    
                    {
                    
                    color: red;
                    }
                    
                - active
                    
                    Elemento selecionado.
                    
                    input:active 
                    
                    {
                    
                    transform: scale(1.2);
                    
                    }
                    
                
            - not(...)
                
                Para seleções onde queremos que uma determinada regra não seja verdade!
                
                p:not(.title) { font-size: 1vw } → Pegamos todos os elementos de tag p, portanto que estes não sejam da classe .title. Assim, nesse exemplo, evitamos diminuir o tamanho dos títulos!
                
            - De Estrutura
                
                Podemos aprofundar a seleção de nossa regra CSS.
                
                - first-child
                    
                    Primeira filha do elemento
                    
                - last-child
                    
                    Ultima filha do elemento
                    
                - nth-child(n)
                    
                    nth-child(n) receberá um número (n) e a partir disso aplicará as regras a filha que o número corresponda na ordem indicada da página.
                    
                    nth-child(7) - > aplica para a sétima filha
                    
                    Podemos ainda definir equações matemáticas para trazer resultados diferentes.
                    Para isto, utilizamos “n”, que será um número que irá de 1 até o número de elementos do parent. Para cada um desses números, a regra será aplicada. Exemplo:
                    
                    :nth-child(2n)
                    
                    Digamos que o elemento tenha 4 filhos.
                    
                    Valores de n e resultado:
                    
                    1 - 2 * 1 = 2
                    
                    2 - 2 * 2  = 4
                    
                    3 - 2 * 3  = 6
                    
                    4 - 2 * 4  = 8  
                    
                    Podemos concluir que esta regra pega os números pares. Podemos perceber também que a partir do número 3, o resultado não será mais usado.  Temos apenas 4 filhas! Não podemos alcançar a filha 6! Causamos um erro? Como acontece quando tentamos usar um index incorreto num array? Nope, sem problemas! O navegador entende onde deve tentar seguir uma regra ou não, podemos definir qualquer tipo de regra utilizando os números e eles serão valídos.
                    
                    :nth-child(100 + n)
                    
                    Essa regra não vai resultar em nada a menos que o elemento tenha mais de 100 filhas, mas é valído!
                    
                
            - De Conteúdo
                - first-letter
                    
                    Primeira letra do conteúdo. Não funciona corretamente com display inline.
                    
                    Não existe um “primeira letra de cada palavra”.
                    
                - after
                    
                    Depois do conteúdo
                    
                - before
                    
                    Antes do conteúdo
                    
        - Seletores Avançados
            
            
            - >
                
                Vimos que podemos selecionar elementos dentro de elementos. Também vimos que estes são selecionados independente de seu real parent, portanto que estejam dentro da estrutura. Usamos > para podermos especificar que queremos um elemento que tenha como seu parent um outro elemento específico, invés de só se encontrar dentro de sua estrutura.
                
                .pagina > .nome {} → Desta vez, selecionamos apenas nome se ele estiver diretamente dentro de pagina. Se nome estiver dentro de  um div, e o div dentro de pagina, ainda assim a regra não contará
                
            - +
                
                Agora, queremos selecionar o próximo elemento depois de outro através de regras css. Para isso, usamos +
                
                .nome + .sobrenome {} → Selecionamos o próximo sobrenome depois de cada nome!
                
                 Vale ressaltar que essa regra se o nome e o sobrenome tem o mesmo parent!
                
            - ~
                
                E se invés de selecionar o próximo, queiramos selecionar todos os próximos?
                
                .nome ~ .sobrenome {} → Selecionamos todos os próximos sobrenomes depois do nome (Até porque a pessoa pode ter mais de um sobrenome!)
                
                Da mesma maneira que +, apenas são selecionados elementos dentro do mesmo parent.
                
        
    - Ordem
        
        As vezes, devido a forma em que selecionamos elementos, podemos ter regras conflitantes. Como o CSS escolhe qual utilizar?
        No caso de regras exatamente iguais, o CSS escolheria o último caso definido. E se estivéssemos selecionando um elemento de um certo id, que fosse um div, e em outra regra estivéssemos selecionando todos os divs, como o CSS escolheria qual das duas regras seria utilizada para aquele div então?
        
        - Força de Seleção
            
            As diferentes  formas de selecionar tem um nível de força. Esse nível de força irá definir qual estilo será aplicado. Para cada especificação na seleção, aumentaremos seu ponto de força com base em...
            
            +1 para cada tag utilizada na seleção
            
            +10 para cada classe utilizada na seleção
            
            +100 para cada id utilizado na seleção
            
        - !important
            
            Quer ignorar todas as regras que eu mencionei lá em cima? Utilize !important em uma regra, e ele receberá uma relevância superior a qualquer outra!
            
    - CSS RESET
        
        CSS RESET foi criado pela comunidade como um arquivo que remove a configuração visual iniciais do CSS. É uma forma de padronizar nosso site para navegadores diversos, pois a aparência inicial encontrada nestes navegadores varia, e portanto modifica nosso layout. 
        
         
        
- Formulários
    
    Criamos formulários que tornam possível que o usuário possa, por meio de uma interface, se comunicar com algum serviço. O próprio navegador utiliza formulários na entrada de dados do usuário para pesquisa. O formulário pode ser constituído por um número diversos de componentes de entrada de dados. Vejamos a seguir...
    
    - <label> ...  </label>
        
        Utilizamos juntamente a inputs para informar ao usuário o tipo de dado que o mesmo está preenchendo. Não utilizamos outras tags de conteúdo como <h2> ou <p> para identificar um único campo de input em um formulário. O label tem um atributo especial, “for”. Nele, passamos o id do input que esse label representa. 
        
        <label for = ‘email’> Email </label>
        
        <input type = ‘text’ id = ‘email’>
        
        Dessa maneira o usuário selecionará o input ao clicar no label, facilitando a utilização da form. 
        
        Podemos também, ao invés disso, criar o elemento dentro do  label. 
        
    - <input type = “...” ...>
        
        Usamos para definir diversos componentes para entrada de dados
        
        ## type:
        
        - text
            
            
        - email
            
            Como um input de texto, mas para emails. Especialmente interessante em mobile, onde ele modifica o teclado para facilitar a utilização do usuário.
            
        - tel
            
            Como o tipo acima, este é um input de texto direcionado a números telefônicos.
            
        - number
            
            Entrada de texto onde o teclado mobile terá números e simbolos.
            
        - password
            
            Para senhas, ocultando o conteúdo digitado.
            
        - data
            
            Inserir a.. data!
            
        - search
            
            Input de texto onde o botão de confirmar do mobile fica como “Buscar”
            
        - submit
            
            Cria um botão que acionará a interação da form
            
            Podemos definir o texto dentro do botão através de ‘value’
            
            <input type = ‘submit’ value = ‘send’>
            
        - radio
            
            Utilizamos para definir opções que o usuário deve escolher. Para isto, temos que passar seu valor e um nome que seja comum ao grupo de inputs.
            
            <input type = "radio" name = "color" value = "red">
            
            <input type = "radio" name = "color" value = "green">
            
            <input type = "radio" name = "color" value = "blue">
            
            Criamos opções de cores para o usuário selecionar 1 entre as 3.
            Além disso, é necessário criarmos um label para o input, pois o valor passado para ele não é mostrado na interface.
            
            Podemos definir o input que será selecionado por default, através do atributo checked
            
            <input type = "radio" name = "color" value = "red" checked>
            
            <input type = "radio" name = "color" value = "green">
            
            <input type = "radio" name = "color" value = "blue">
            
            O vermelho estaria selecionado.
            
        - checkbox
            
            Utilizamos para criar um input de marcar e desmarcar. 
            
            utilizamos checked na tag do input, da mesma forma que utilizamos em radio, para marcar a checkbox por default.
            
            <input type = ‘checkbox’>
            
            ou
            
            <input type = ‘checkbox’ checked>
            
        
    - <textarea> </textarea>
        
        Um tipo de input de texto com múltiplas linhas.
        
        Propriedades:
        
        - rows, cols
            
            Podemos especificar o número de linhas e colunas desta textarea
            
            <textarea rows = “3” cols = “3”> ....
            
            Porém, o comportamento indicado pelo CSS é priorizado.
            
        - maxlength
            
            Podemos limitar o número de caracteres que o usuário pode inserir na textarea.
            
        
    - <select></select>
        
        Ao utilizar um select, definimos opções para o usuário selecionar em um dropdown menu. Para isso, colocamos cada opção dentro de : <option></option>
        
        <select>
        
        <option>Opção 1</option>
        
        <option>Opção 2</option>
        
        <option>Opção 3</option>
        
        </select>
        
    - <fieldset> </fieldset>
        
        Durante a criação de nossa form, não utilizamos divs, invés disso usamos fieldsets, representando um grupo de inputs comum, e  acrescentando a semântica correta de nosso site.
        
    - <legend></legend>
        
        Um titulo para um fieldset, que utilizamos para informar ao usuário sobre o que ele estará preenchendo naquela seção. 
        
    
    Propriedades:
    
    - required
        
        Podemos adicionar ‘required’ dentro das tags de input para definir que aquele campo é obrigatório
        
        <input type = ‘text’ required>
        
        Até que o campo seja preenchido o form não fará submit, e o usuário será notificado com um pop-up explicando que ele deve preencher aquele campo.
        
    
    - placeholder
        
        Podemos definir um valor de placeholder, que será um texto do input e que aparecerá dentro dele. não ocupando espaço real, com o objetivo de informar o tipo de informação que deve ser inserida.
        
        <input type = ‘email’ placeholder = “seu email aqui”>
        
- Tabelas
    
    Para criarmos tabelas...
    
    Começamos utilizando a tag <table> </table>.
    
    A tabela é composta por linhas que possuem células.
    
    Linha: <tr></tr>
    
    Célula: <td></td>
    
    - Tabela Normal Exemplo
        
        <table>
        
        <tr>
        
        <td>
        
        Dia 
        
        </td>
        
        <td>
        
        Hora
        
        </td>
        
        </tr>
        
        <tr>
        
        <td>
        
        Segunda
        
        </td>
        
        <td>
        
        22 horas
        
        </td>
        
        </tr>
        
        </table>
        
    
    Podemos ver pelo exemplo acima que para observarmos a relação dos valores temos de olhar para um determinado elemento <td< de cada <tr>. Ou seja,  o item do primeiro tr “Dia”, estárá representando o primeiro elemento de cada <tr> abaixo, e podemos ver isso ao olharmos para o próximo tr, que tem segunda.
    
    A primeira <tr> da tabela sempre vai ter a identificação dos valores que estiverem abaixo dela. 
    
    Percebemos as partes da tabela compõe diferentes função. Por esta razão, nossa tabela terá uma estrutura definida da mesma maneira que um site tem head, body e footer.
    
    Utilizamos <thead> </thead> da forma  que usamos <tr>. Além disso, não usamos td para criar uma célula, mas sim <th>! Ou seja...
    
    - Trocamos tr por thead
    - Trocamos td por th
    
    - Tabela com thead Exemplo
        
        <table>
        
        <thead>
        
        <th>
        
        Dia 
        
        </th>
        
        <th>
        
        Produção
        
        </th>
        
        </thead>
        
        <tr>
        
        <td>
        
        Segunda
        
        </td>
        
        <td>
        
        R$ 2200
        
        </td>
        
        </tr>
        
        <tr>
        
        <td>
        
        Terça
        
        </td>
        
        <td>
        
        R$ 2500
        
        </td>
        
        </tr>
        
        </table>
        
    
    Logo após, lidamos com o  conteúdo da tabela...
    
    - Colocamos todos os outros <tr>s na tag tbody
    - Tabela com thead e tbody Exemplo
        
        <table>
        
        <thead>
        
        <th>
        
        Dia 
        
        </th>
        
        <th>
        
        Produção
        
        </th>
        
        </thead>
        
        <tbody>
        
        <tr>
        
        <td>
        
        Segunda
        
        </td>
        
        <td>
        
        R$ 2200
        
        </td>
        
        </tr>
        
        <tr>
        
        <td>
        
        Terça
        
        </td>
        
        <td>
        
        R$ 2500
        
        </td>
        
        </tr>
        
        </tbody>
        
        </table>
        
    
    Após, podemos querer ter uma informação final, que tenha diferente relevância, como a soma das celulas que estivessem naquela posição de cada linha. Para esse tipo de coisa, separariamos utilizando tfoot
    
    - Tabela com semântica completa Exemplo
        
        <table>
        
        <thead>
        
        <th>
        
        Dia 
        
        </th>
        
        <th>
        
        Produção
        
        </th>
        
        </thead>
        
        <tbody>
        
        <tr>
        
        <td>
        
        Segunda
        
        </td>
        
        <td>
        
        R$ 2200
        
        </td>
        
        </tr>
        
        <tr>
        
        <td>
        
        Terça
        
        </td>
        
        <td>
        
        R$ 2500
        
        </td>
        
        </tr>
        
        </tbody>
        
        <tfoot>
        
        <tr>
        
        <td>
        
        Total
        
        </td>
        
        <td>
        
        R$ 4700
        
        </td>
        
        </tr>
        
        </tfoot>
        
        </table>
        
    
    Outras propriedades...
    
    - colspan
        
        Podemos adicionar um colspan em um td para especificar quantas células ele ocupa.
        
        - Tabela com colspan Exemplo
            
            <table>
            
            <thead>
            
            <th>
            
            Dia 
            
            </th>
            
            <th>
            
            Produção
            
            </th>
            
            </thead>
            
            <tbody>
            
            <tr>
            
            <td colspan = 2>
            
            Não houve trabalho domingo
            
            </td>
            
            </tr>
            
            <tr>
            
            <td>
            
            Segunda
            
            </td>
            
            <td>
            
            R$ 2200
            
            </td>
            
            </tr>
            
            <tr>
            
            <td>
            
            Terça
            
            </td>
            
            <td>
            
            R$ 2500
            
            </td>
            
            </tr>
            
            </tbody>
            
            <tfoot>
            
            <tr>
            
            <td>
            
            Total
            
            </td>
            
            <td>
            
            R$ 4700
            
            </td>
            
            </tr>
            
            </tfoot>
            
            </table>
            
        
        No exemplo acima, usamos colspan no td do primeiro tr para ocupar ambos o dia e a produção.
        
    
- IFRAMES - Exemplos Embedding
    
    Existem diversos serviços que disponibilizam a utilização de iframes. Colocarei os apresentados no curso, e adicionarei caso eu mesma utilize mais algum.
    
    - Google Maps
        
        O google maps disponibiliza a possibilidade de colocarmos uma tela de visualização de uma localização dentro de nosso site. 
        
        ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%201.png)
        
        Apesar de possível gratuitamente, podemos também escolher por pagar uma taxa para sua utilização para termos a habilidade de acesssar algumas das funcionalidades de um embed do google maps não normalmente disponíveis, como o modo de Street View. 
        
         
        
    - Youtube
        
        Podemos pôr vídeos do youtube!
        
        ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%202.png)
        
    
    Não podemos modificar o width e height  para modificar o tamanho do embed dinamicamente, pois prejudicará ou interromperá na interação. Por outro lado, temos a seguir o tutorial abaixo que demonstra como atingir este objetivo.
    
    [https://blog.duda.co/responsive-google-maps-for-your-website](https://blog.duda.co/responsive-google-maps-for-your-website)
    
    - Como ficou a minha solução
        
        /* div parent do iframe */
        
        .frame
        
        {
        
        width: 50%;
        
        margin-left: auto;
        
        margin-right: auto;
        
        overflow:hidden;
        
        padding-bottom:40.25%;
        
        position:relative;
        
        height:0;
        
        text-align: center;
        
        background-color: var(--dark);
        
        }
        
        .frame iframe
        
        {
        
        left:0;
        
        top:0;
        
        height:80%;
        
        width:100%;
        
        position:absolute;
        
        }
        
    
- Media Queries
    
    Utilizamos media queries para definir regras para determinadas configurações de tela. Podemos especificar regras css com base numa range de altura e largura da tela.
    
    Para criarmos uma regra, começamos por 
    
    @media
    
    logo ao lado, colocamos a regra de configuração entre ()
    
    Para tamanhos de tela, podemos especificar:
    
     max-width, max-height, min-width, min-height.
    
    Utilizaremos max-width para modificar nossa página em qualquer dispositivo que seja igual ou tenha menos que 1000 de largura.
    
    @media ( max-width: 1000px)
    
    E então, logo abaixo, colocamos nossas regras de css de forma normal.
    
    - Exemplo Final
        
        @media ( max-width: 1000px)
        
        {
        
        .items li
        {
        
        display: block;
        
        font-size: 5.7vw;
        
        }
        
        }
        
    
    No exemplo acima, fazemos com que os elementos de uma lista fiquem com display block, para terem mais espaço. E ainda modificamos o tamanho da fonte, que pode ser maior por ter mais espaço para ocupar.
    

## Campos extras

Para colocar possívveis 

- Fontes
    
    O curso sugere o uso do site abaixo para vermos fontes usadas na web
    
    [https://fonts.google.com/](https://fonts.google.com/)
    
    Pessoalmente, gosto de utilizar as fontes de DaFont em meus projetos.
    
    [https://www.dafont.com/pt/](https://www.dafont.com/pt/)
    
    Obviamente, não devemos nos esquecer de estarmos de acordo com os específicos termos de uso para cada recurso que desejamos usar em nosso projeto. 
    

# LOGS - Etapas no desenvolvimento do site!

- **Log - Course Section 1 - Week 4**
    
    Iniciando primeira parte da semana 4!
    
    1. Conteúdo sobre a página foi adicionado, raw.
    2. Estruturamos nossa página básica com tags essenciais para um site.
    3. Aplicamos regras de CSS para a alteração de aparência dentro de um arquivo .css separado.
    4. Adicionamos um banner e utilizamos css para coloca-lo de forma apropriada na página.
    5. Aprendemos sobre display e adicionamos mais informações a página.
- Log - Course Section 2 - Week 4
    
    Iniciando segunda parte da semana 4!
    
    1. Header com navbar criado
    2. Adicionamos serviços que a barbearia disponibiliza
    3. Utilizamos bordas para melhorar estilização dos elementos de serviço.
    4. Adicionamos reações para a interação do usuário no site
    5. Rodapé implementado!
- Log -  Extra - o que eu fiz durante e depois das seções 1 e 2
    
    Antes de continuar, queria adicionar algumas coisas...
    
    1. Escolhi um estilo de cor que queria usar no site. Escolhi o que queria inicialmente (basicamente, “acho que laranja e preto fica legal”), e usei o site Coolors para ajustar.
        
        [https://coolors.co/?home](https://coolors.co/?home)
        
        ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%203.png)
        
    
    1. Utilizei variáveis no css para permitir consistência de forma simples!
    
    ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%204.png)
    
    1. Fiz o nav ficar fixado na parte de cima da tela 
        
        ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%205.png)
        
    
    1. Tornei o header e footer universais entre as páginas de forma que não precisasse copiar colar. 
    
    2. Fiz alguns ajustes de aparência no nav pra não atrapalhar usuário
    
    3. Adicionei o efeito fixed na propriedade background-attachment do footer, pra dar um efeito legal na imagem. Recomendo, fica muito bom
    
    4. Coloquei tudo no github! uff, deveria ter feito isso antes. erro meu. Mas tudo bem! Agora a gente faz direitinho!
    
- Log - Course Section 3- Week 5
    1. Criação inicial da página de contatos
    2. Iniciamos nosso formulário
    3. Estilização do formulário!
    4. Aprendemos sobre outros tipos de input
    5. Estrutura de formulário adaptada para melhor semântica
    6. Imagens passam a providenciar melhor acessibilidade através de sua propriedade ‘alt’
    7. Criamos tabela
    8. Estilizamos tabela
- Log - Course Section 4 - Week 5
    1. Revisitamos a estrutura fazendo mudanças com o que aprendemos.
    2.  Adicionamento de fontes!
    3. Utilizamos serviço do Google Maps para colocar um mapa em nossa página.
    4. inserimos um vídeo de demonstração do serviço.
    5. Mudanças de escala.
    6. Usando linear-gradient no fundo!
    7. box-shadow e text-shadow!!!
    8. Media Queries para adaptação do site para mobile
- Log - Extra- Media Queries
    
    Eu estava tendo problemas com a forma que a seção de produtos ficava em mobile
    
    ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%206.png)
    
     Fiz com que em telas pequenas os itens estivessem com display: block;
    
    ![Untitled](Barbearia%20Alura%20-%20HTML,%20CSS%207596b76ba4b9453da1a0c34339e0821c/Untitled%207.png)
    
    E isso possibilitou aumentar o tamanho da fonte de cada item, trazendo melhor visualização!.