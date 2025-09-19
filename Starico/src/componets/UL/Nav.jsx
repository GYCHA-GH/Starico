import classes from "./Ul.module.scss";
import Logo from "./Logo.svg";

export default function Nav() {
  return (
    <nav>
        <ul>
            <img src={Logo} alt="Logo"/>
            <li>
                <a href="">Our Story</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Pricing</a>
                <div>
                    <button className={classes.Login}>Log in</button>
                    <button className={classes.Tru}>Try for free</button>
                </div>
            </li>
        </ul>
    </nav>
  );
}
