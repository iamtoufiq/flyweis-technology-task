import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="m-auto">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#00AB7F"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
