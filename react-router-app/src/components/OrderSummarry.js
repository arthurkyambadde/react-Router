import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      Order confirmed
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>
    </>
  );
};
