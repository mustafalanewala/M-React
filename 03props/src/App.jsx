import Card from "./components/Card";

const App = () => {
  const cards = [
    {
      title: "Beautiful Sunset",
      description: "Experience the serene beauty of a sunset over the ocean.",
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      title: "Majestic Mountains",
      description: "Explore the heights of stunning mountain ranges.",
      imgSrc: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
        />
      ))}
    </div>
  );
};

export default App;
