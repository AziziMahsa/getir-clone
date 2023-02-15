import { Link } from "react-router-dom";
function Navitem(props) {
  return (
    <div>
      <Link
        to={props.link}
        className={
          "py-2  px-5 items-center flex font-semibolod w-fit  md:font-semibold " +
          (props.hover
            ? " rounded-t-md bg-violet-600 text-yellow-300 "
            : " text-violet-100")
        }
      >
        {props.title}
      </Link>
    </div>
  );
}

export default Navitem;
