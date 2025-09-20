import classes from "./App.module.scss";
import Log1 from'./assets/log1.svg'
import Log2 from'./assets/log2.svg'
import Log3 from'./assets/log3.svg'
import Log4 from'./assets/log4.svg'

import Img from'./assets/Img.png'
import Img2 from'./assets/img2.svg'


import Nav from './componets/UL/Nav'
import Blog from "./componets/Blog/Blog";
import Email from "./componets/Email/Email";
import Reviews from "./componets/Reviews/Reviews";
import Effcient from "./componets/Effcient/Effcient";

import Bett from "./assets/bett.svg"
import Less from "./assets/less.svg"
import More from "./assets/more.svg"

function App() {
  return (
    <>
    <main>
      <header>
        <Nav/>
        <section className={classes.section1}>
          <div className={classes.container1}>
            <h1>Head start your business today!</h1>
          <p>Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.</p>
          <div className={classes.button}>
            <button className={classes.Get}>Get started</button>
            <button className={classes.Try}>Try for free<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7937 7.85071C10.9743 8.03133 10.9743 8.32412 10.7937 8.50473L6.0784 13.22C5.89778 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17772L5.20633 4.00751C5.02571 3.82689 5.02571 3.5341 5.20633 3.35348L5.42438 3.13543C5.60499 2.95481 5.89778 2.95481 6.0784 3.13543L10.7937 7.85071Z" fill="white"/></svg></button>
          </div>
          <div className={classes.logs}>
            <a href=""><img src={Log1}/></a>
            <a href=""><img src={Log2}/></a>
            <a href=""><img src={Log3}/></a>
            <a href=""><img src={Log4}/></a>
          </div>
          </div>
        </section>
      </header>
        <section className={classes.section2}>
          <img src={Img} alt="" />
        </section>
        <section className={classes.section3}>
          <div className={classes.container3}>
            <img src={Img2} alt="" />
            <div className={classes.box}>
              <button className={classes.speed}>Speed</button>
              <h1>Faster than ever before</h1>
              <p>Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.</p>
              <div>
                <button className={classes.Get1}>Get started</button>
                <button className={classes.Try1}>Try for free <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7937 7.85074C10.9743 8.03136 10.9743 8.32415 10.7937 8.50476L6.07841 13.22C5.89779 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17775L5.20633 4.00755C5.02571 3.82693 5.02571 3.53413 5.20633 3.35351L5.42438 3.13546C5.605 2.95484 5.89779 2.95484 6.07841 3.13546L10.7937 7.85074Z" fill="#162E3C"/></svg></button>
              </div>
            </div>
          </div>
        </section>
      <section className={classes.section4}>
        <div className={classes.container4}>
          <h1>Building your very own Startup has never been simpler</h1>
          <p className={classes.ntx}>Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.</p>
          <div className={classes.cardB}>
            <div>
              <img src={Bett} alt="" />
              <h3>Better results</h3>
              <p>Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.</p>
            </div>
            <div>
              <img src={Less} alt="" />
              <h3>Less paper work</h3>
              <p>Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.</p>
            </div>
            <div>
              <img src={More} alt="" />
              <h3>More profit</h3>
              <p>Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.</p>
            </div>
          </div>
          <div className={classes.buttons1}>
            <button className={classes.Get2} >Get started</button>
            <button className={classes.Try2}>Try for free<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7937 7.85074C10.9743 8.03136 10.9743 8.32415 10.7937 8.50476L6.07841 13.22C5.89779 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17775L5.20633 4.00755C5.02571 3.82693 5.02571 3.53413 5.20633 3.35351L5.42438 3.13546C5.605 2.95484 5.89779 2.95484 6.07841 3.13546L10.7937 7.85074Z" fill="#162E3C"/></svg></button>
          </div>
        </div>
      </section>
      <Effcient/>
      <Reviews/>
      <article>
        <Blog/>
      </article>
      <Email/>
      <footer></footer>
    </main>
    </>
  )
}

export default App
