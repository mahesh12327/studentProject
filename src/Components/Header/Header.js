import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
const Header = (props) => {
  const headClass = props.isLogged ? "Header" : "Head";
  return (
    <div className={headClass}>
      <span>STUDENT MANAGEMENT APP</span>
      {props.isLogged && (
        <span
          className="menu"
          onClick={() => {
            props.menu();
          }}
        >
          <AiOutlineMenu size={30} />
        </span>
      )}
    </div>
  );
};

export default Header;
