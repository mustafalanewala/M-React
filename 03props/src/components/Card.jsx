import "./Card.css";

const Card = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
