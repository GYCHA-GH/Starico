import classes from "./App.module.scss";
import Log1 from'./assets/log1.svg'
import Log2 from'./assets/log2.svg'
import Log3 from'./assets/log3.svg'
import Log4 from'./assets/log4.svg'
import Img from'./assets/Img.png'


import Nav from './componets/UL/Nav'
import Blog from "./componets/Blog/Blog";
import Email from "./componets/Email/Email";
import Reviews from "./componets/Reviews/Reviews";

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
        <section className={classes.section2}>
          <img src={Img} alt="" />
        </section>
      </header>
      <Reviews/>
      <article>
        <Blog/>
      </article>
      <Email/>
    </main>
    </>
  )
}

export default App
