import React, { useEffect, useState } from 'react';
import { formatName, reverseList } from '../../utils/formatters.js';
import { saveComment, getAllComments } from '../../services/Comment.js';
import '../../assets/styles/home/Comments.css';

export const Comments = () => {

  const [comments, setComments] = useState([]);
  const [showError, setShowError] = useState(true);
  const [commentsIsNull, setCommentsIsNull] = useState(true);
  const fetchComments = async () => {
    const data = await getAllComments();
    if (data != null) {
      setCommentsIsNull(false)
    }
    setComments(reverseList(data));
  }

  useEffect(() => {
    fetchComments();
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingClick = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
    setShowError(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment && formData.rating > 0) {

      await saveComment(formData)

      let data = JSON.parse(localStorage.getItem('token'))

      let newComment = {
        commentID: Date.now(),
        comment: formData.comment,
        rating: formData.rating,
        dateCreatedAt: new Date().toLocaleDateString('es-CL').replace(/\//g, '-'),
        firstName: data.firstName,
        lastName: data.lastName
      }

      setComments([newComment, ...comments])
      setFormData({ comment: '', rating: 0 });
      setShowError(true)
      return
    }
    setShowError(false)
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star-icon ${i < rating ? 'filled' : ''}`} style={{ fontSize: '1rem' }}>★</span>
    ));
  };

  const showComments = () => {
    return (
      <div className="comments-scroll-wrapper">
        <div className="comments-list">

          {comments?.map((comment, index) => (
            <div className="comment-card" key={index}>
              <div className="comment-header">
                <div className="avatar-circle">
                  {formatName(`${comment.firstName} ${comment.lastName}`).charAt(0)}
                </div>
                <div className="user-info">
                  <h4>{formatName(`${comment.firstName} ${comment.lastName}`)}</h4>
                  <p className="comment-date">{comment.dateCreatedAt}</p>
                </div>
              </div>
              <div className="stars">
                {renderStars(comment.rating)}
              </div>
              <p className="comment-text">"{comment.comment}"</p>
            </div>
          ))}

        </div>
      </div>
    )
  }

  return (
    <section className="comments-section">
      <div className="comments-container">

        <div className="comments-header">
          <h2 className="comments-title">Opiniones de nuestros viajeros</h2>
          <p className="comments-subtitle">Transparencia total: así vivieron Japón con nosotros</p>
        </div>

        {/* CONTENEDOR CON SCROLL */}
        { commentsIsNull ? '' : showComments() }

        {/* FORMULARIO */}
        <div className="form-wrapper">
          <h3 className="form-title">Comparte tu experiencia</h3>
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-row">

              <div className="form-group">
                <label className="form-label">Valoración</label>
                <span style={{ color: 'red' }}>{showError ? '' : '* campo obligatorio'}</span>
                <div className="rating-input" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star-icon ${star <= (hoverRating || formData.rating) ? 'filled' : ''}`}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Comentario</label>
              <textarea
                name="comment"
                className="form-textarea"
                placeholder="Cuéntanos qué tal fue tu viaje..."
                value={formData.comment}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Comentario</button>
          </form>
        </div>

      </div>
    </section>
  );
};

