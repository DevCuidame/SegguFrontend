import React, { useState } from "react";
import './ReviewsCard.scss';

function ReviewsCard () {

    return(
        <section className="review-card">

            <div className="arriba">
                <img src="/perfil.jpg" alt="" />
                <span>
                    <h4>Ana,</h4>
                    <h5>Asistente Administrativa:</h5>
                </span>
            </div>

            <div className="medio">
                <p className="descripcion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse odit neque velit quia exercitationem id eligendi rem, 
                    quod minima nisi totam eveniet harum repudiandae tempore 
                    nesciunt illum ad in laborum.
                </p>
            </div>

            <div className="abajo">
                <StarRating/>
            </div>

        </section>
    );
}

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={starValue}
            onClick={() => setRating(starValue)} 
            onMouseEnter={() => setHover(starValue)} 
            onMouseLeave={() => setHover(0)} 
            style={{ cursor: "pointer", fontSize: "2rem", color: "#ffc107" }}
          >
            {starValue <= (hover || rating) ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                </svg>
            )}
          </span>
        );
      })}
    </div>
  );
};


export default ReviewsCard;