import {koalas} from './koalas.js'
import { renderKoalaList } from './renderKoalaList.js'
import { renderActiveKoala } from './renderActiveKoala.js'
import { activeKoala} from './selectKoala'




// Called once when the page loads, and again every time a koala is selected
 let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}










// Render the page after all functions are defined
render()

export default render