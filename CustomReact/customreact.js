function customRender(swastik,container){
    // const domElement =  document.createElement(swastik.type)
    // domElement.setAttribute('href',swastik.props.href)
    // domElement.setAttribute('traget',swastik.props.target)
    // domElement.innerHTML = swastik.children

    // container.appendChild (domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === "children")continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        
        container.appendChild(domElement)
    }
}


const reactElement = {
    type: "a",
    props:{
        href: "https://goolge.com",
        target:'_blank'
    },
    children: "Click me to visit goolge"
}



const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)