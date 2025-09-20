import classes from './Reviews.module.scss'
import { useEffect, useState } from 'react'

export default function Reviews(){
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/review')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка');
        return response.json();
      })
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return(
    <article className={classes.article}>
        <section className={classes.section1}>
            <div className={classes.text}>
                <h1>A words from our customers</h1>
                <p>Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
            </div>
        </section>
      <section className={classes.section2}>
        {reviews.map(review => (
          <div key={review.id} className={classes.review}>
            <img src={`http://localhost:5000/images/${review.image_star}`} alt="" />
            <p className={classes.description}>{review.description}</p>
            <div className={classes.div}>
              <img src={`http://localhost:5000/images/${review.image_user}`} alt={review.name}/>
              <div>
                <span>{review.name}</span>
                <p>{review.profession}</p>
              </div>
            </div>   
          </div>
        ))}
      </section>
    </article>
  )
}
