import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="sticky top-0 text-left my-5">
      <button className="text-5xl font-bold self-start" onClick={goBack}>
        &larr;
      </button>
    </div>
  );
}

export default GoBackBtn;
