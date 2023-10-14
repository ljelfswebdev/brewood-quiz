import FormattedDate from "../../components/date";

const Homepage = () => {

  return ( 
    <div className="homepage">
      <h1 className="homepage__title">
        Brewood Cricket Club Quiz
      </h1>
      <img src="/brewood-logo.png" alt="Brewood Cricket Club Quiz" />
      <span className="homepage__date">
        <FormattedDate/>
      </span>
    </div>
   );
}
 
export default Homepage;