import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      Home Page
      <button
        onClick={() => {
          navigate("order-summary");
        }}
      >
        place order
      </button>
    </>
  );
};
