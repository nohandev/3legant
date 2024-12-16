import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const EvaluationComponent = () => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
        />
      ))}
    </div>
  );
};

export default EvaluationComponent;