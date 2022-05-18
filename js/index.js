const tagUl = document.getElementsByClassName('content')[0]

const carrinho = []

function criarItens(data){

    const imagem = data.img
    const itemNome = data.nameItem
    const descriptionItem = data.description
    const price = data.value
    const category = data.tag
    const addCart = data.addCart

    const tagLi = document.createElement('li')
    const tagDivImg = document.createElement('div')
    const tagImg = document.createElement('img')
    const tagDivDescription = document.createElement('div')
    const pCategory = document.createElement('p')
    const h2Nome = document.createElement('h2')
    const pDescription = document.createElement('p')
    const pPrice= document.createElement('p')
    const butAddCart = document.createElement('button')

    tagLi.classList.add('pai')
    tagDivImg.classList.add('space-img')
    tagDivDescription.classList.add('descricao')
    pCategory.classList.add('categoria')
    h2Nome.classList.add('nome-item')
    pPrice.classList.add('price')
    butAddCart.classList.add('add-cart')

    tagImg.src = imagem
    tagImg.alt = itemNome
    pDescription.innerText = descriptionItem
    h2Nome.innerText = itemNome
    pCategory.innerText = category
    pPrice.innerText = `R$ ${price},00`
    butAddCart.innerText = addCart

    tagDivImg.appendChild(tagImg)

    tagDivDescription.appendChild(pCategory)
    tagDivDescription.appendChild(h2Nome)
    tagDivDescription.appendChild(pDescription)
    tagDivDescription.appendChild(pPrice)
    tagDivDescription.appendChild(butAddCart)

    tagLi.appendChild(tagDivImg)
    tagLi.appendChild(tagDivDescription)

        
        
    butAddCart.addEventListener("click", function(e){
        carrinho.push(data)
        listarProdutosKart(carrinho)
    })
    
    return tagLi
}
    
const input = document.querySelector('input')
console.log(input)

    const getTodos = document.getElementsByClassName('todos')[0]
    const getAcessorios = document.getElementsByClassName('acessorios')[0]
    const getCalcados = document.getElementsByClassName('calcados')[0]
    const getCamisetas = document.getElementsByClassName('camisetas')[0]

function listarProduto(produtos){
    for(let i = 0; i < produtos.length; i++){

        const liProduto = criarItens(produtos[i])
        tagUl.appendChild(liProduto)
   
    }
}
listarProduto(data)




const addCart = document.getElementsByClassName('space-kart')[0]

function montarItemCarrinho(data){
    const tagLiItem = document.createElement('li')
    const tagFigure = document.createElement('figure')
    const imgKart = document.createElement('img')
    const tagDivKart = document.createElement('div')
    const tagH3Kart = document.createElement('h3')
    const pPriceKart = document.createElement('p')
    const buttonRemoveKart = document.createElement('button')

    imgKart.src = data.img
    imgKart.alt = data.nameItem
    tagH3Kart.innerText = data.nameItem
    pPriceKart.innerText = `R$ ${data.value},00`
    buttonRemoveKart.innerText = 'Remover do Carinnho'

    tagLiItem.classList.add('item-adicionado')
    tagFigure.classList.add('space-img-kart')
    tagDivKart.classList.add('description-item-adicionado')
    pPriceKart.classList.add('price-kart')
    buttonRemoveKart.classList.add('remove')

    tagDivKart.appendChild(tagH3Kart)
    tagDivKart.appendChild(pPriceKart)
    tagDivKart.appendChild(buttonRemoveKart)

    tagFigure.appendChild(imgKart)

    tagLiItem.appendChild(tagFigure)
    tagLiItem.appendChild(tagDivKart)
    
    buttonRemoveKart.addEventListener('click',function(e){
        for(let i = 0; i <= carrinho.length; i++){
        carrinho.splice(i, 1)
        listarProdutosKart(carrinho)
        return
        }
    }
    )
    return tagLiItem
}
        const tagDivQuantidade = document.getElementsByClassName('quantidade')[0]
        const pQuantidade = document.createElement('p')
        tagDivQuantidade.appendChild(pQuantidade)   
    
        const tagDivTotal = document.getElementsByClassName('total')[0]
        const pTotal = document.createElement('p')
        tagDivTotal.appendChild(pTotal)

function listarProdutosKart(produtos){
        addCart.innerHTML = ''
        pQuantidade.innerText = produtos.length
        let count = 0
        for(var contadora in produtos){
            count += produtos[contadora].value
        }
        pTotal.innerText = `R$ ${count},00`
    for(let i = 0; i < produtos.length; i++){
        const liProduto = montarItemCarrinho(produtos[i])
        addCart.appendChild(liProduto)
    }
}