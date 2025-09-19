import { useState } from "react";
import classes from "./Email.module.scss";

export default function Email() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setEmail("Хахаха иди на хуй");
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.form}>
            <h1>Stay up to date with the latest news from the Startup world!</h1>
            <p>Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button>Subscribe</button>
            </form>
            <samp>By clicking Subscribe you're confirming that you agree with our Terms and Conditions.</samp>

        </div>
        
      </div>
    </section>
  );
}
