import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="">
      <h1>Hello Guest</h1>
      <h2>Login to see your profile!</h2>
      <button>
        <Link to="/login"> Go to Login Page</Link>
      </button>
    </div>
  );
}
