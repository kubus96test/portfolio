import React, {useState} from 'react'

const Menu= ()=>{

    const [isTriggered, changeMenu] = useState(false)

const triggerMenu = ()=>{
    let menu = document.querySelector('.menu')
    let menuMidCol = document.querySelector('.menu__mid-col')
    let leftMenu = document.querySelector('.left-part-menu')
    let rightMenu = document.querySelector('.righ-part-menu')
    let logoWrap = document.querySelector('.left-part-menu__logo')
    let subpagesWrap = document.querySelector('.left-part-menu__subpages-wrap')

    if(!isTriggered){
        subpagesWrap.classList.add('left-part-menu__subpages-wrap--clicked')
        menu.classList.add('menu--clicked')
        menuMidCol.classList.add('menu__mid-col--clicked')
        leftMenu.classList.add('left-part-menu--clicked')
        changeMenu(true)
    }
    else{
        subpagesWrap.classList.remove('left-part-menu__subpages-wrap--clicked')
        menu.classList.remove('menu--clicked')
        menuMidCol.classList.remove('menu__mid-col--clicked')
        leftMenu.classList.remove('left-part-menu--clicked')
        changeMenu(false)
    }
}

	return(
		<div className='menu'>
        <div className='menu__left-col'>
        </div>
        <div className='menu__mid-col'>
            <div className='left-part-menu'>
                <div className="left-part-menu__button" onClick={triggerMenu}>|||</div>
                <div className='left-part-menu__logo'>
                    <img src="./images/menu_logo.png" alt="site logo"/>
                </div>
                <div className='left-part-menu__subpages-wrap'>
                    <div className='left-part-menu__subpage'><a href="#projects">Projekty</a></div>
                    <div className='left-part-menu__subpage'><a href="#about-me">O mnie</a></div>
                    <div className='left-part-menu__subpage'><a href="#contact">Kontakt</a></div>
                </div>
            </div>
            <div className='right-part-menu'>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_facebook.png" alt="facebook icon"/>
                </div>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_instagram.png" alt="instagram icon"/>
                </div>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_linkedin.png" alt="linkedin icon"/>
                </div>
            </div>
        </div>
        <div className='menu__right-col'>
        </div>
    </div>
    )
}

export default Menu