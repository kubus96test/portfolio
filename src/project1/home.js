import React, { useEffect, useState } from 'react'
import AboutMe from './aboutMe'

const Home = () => {

    function setCoordinates(el, title, parent) {
        el.style.left = (title.getBoundingClientRect().left - parent.getBoundingClientRect().left) + 'px'
        el.style.top = (title.getBoundingClientRect().top - parent.getBoundingClientRect().top - 0.8 * el.clientHeight) + 'px'
    }

    useEffect(() => {
        let title = document.querySelector('.mid-header__title-wrap')
        let parent = document.querySelector('.mid-header__left-part')
        let element = document.querySelector('.mid-header__background-inscription')
        window.addEventListener('load', () => setCoordinates(element, title, parent))
        window.addEventListener('resize', () => setCoordinates(element, title, parent))
    })

    function accordionStripe(el, value, newClassName) {
    if((document.querySelector('.home').offsetHeight/document.documentElement.offsetHeight>0.5) && (document.querySelector('.home').offsetWidth<=768)){
        if (document.documentElement.scrollTop/document.querySelector('.home').offsetHeight>=0.15) {
            for (let i = 0; i < el.classList.length; i++) {
                if (el.classList[i] == newClassName) {
                    resultStripe = true;
                }
            } 
            if (resultStripe !== true) {
                el.classList.add(newClassName)
            }
        }

        if (document.documentElement.scrollTop/document.querySelector('.home').offsetHeight<0.15) {
            for (let i = 0; i < el.classList.length; i++) {
                if (el.classList[i] == newClassName) {
                    resultStripe = true;
                }
            }
            if (resultStripe == true) {
                el.classList.remove(newClassName)
            }
            resultStripe = false
        }
    }
}
    let resultStripe = false;
    const movableStripe = document.querySelector('.mid-header__stripe')
    useEffect(()=>{window.addEventListener('scroll', function() { accordionStripe(document.querySelector('.mid-header__stripe'), 230, 'mid-header__animate-stripe') })})

    return (
        <div className="home__underlay">
        <div className="home">
            <img src="images/home_zygzak1.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak2.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak3.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak4.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak5.png" alt="background image" alt="background picture"/>
            <div className="home__left-col">
            </div>
            <div className="home__mid-col">
                <div className="mid-header">
                    <div className="mid-header__left-part">
                        <div className="mid-header__background-inscription">I'm
                        </div>
                        <h1><span className="mid-header__title-wrap">Front-end developer <span>&</span> Programmer</span></h1>
                        <h2>JAKUB WR??BEL</h2>
                        <div className="mid-header__buttons-wrap">
                            <a href='' className='mid-header__button'>Moje projekty</a>
                            <a href='' className='mid-header__button'>Wiecej o mnie</a>
                        </div>
                    </div>
                    <div className="mid-header__right-part">
                        <div className="mid-header__stripe">
                            <div className='mid-header__stripe-overlay'>
                                <svg xmlns="http://www.w3.org/2000.svg" width="23rem" height="23rem">
                                    <path fill="#e67095" fillOpacity="0.5" d="M 115 0 A 115 115 0 0 1 115 230  A 180 180 1 0 0 115 0 Z"></path>
                                </svg>
                            </div>
                            <div className="mid-header__stripe-circle">
                            </div>
                            <img src='./images/ja.jpg' alt="Jakub Wr??bel" alt="Photo of Jakub Wr??bel"/>
                        </div>
                    </div>
                </div>
                <AboutMe/>
            </div>
            <div className="home__right-col">
                <div className="right-header">
                    <div className="right-header__stripe">
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

// class Home extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={value:0}
//         this.increase=this.increase.bind(this)
//     }

//      increase(){
//         const e=2
//         const Prom = new Promise((resolve,reject)=>{
//             if(e){
//                 resolve(e)
//             }
//             else{
//                 reject('error')
//             }
//         }).then(()=>{this.setState(prev=>({value:prev.value+1}))}).then(console.log(this.state.value))
//         }

//     render(){
//         return(
//             <div>
//                 <div>Stan: {this.state.value}</div>
//                 <div>
//                 <button onClick={this.increase}>Zwi??ksz</button>
//                 </div>
//             </div>
//             )
//     }
// }

export default Home