import food from "./assets/salad.png";

function Card() {
  return (
    <div className="card">
      <img src={food} alt="profile Picture" className="card-image" />
      <h2 className="card-tittle">Nubia Justice </h2>
      <p className="card-txt">I'm learning card component on react and damn... Its so cool</p>
      <button className="card-btn">Read More</button>
    </div>
  );
}

export default Card;
