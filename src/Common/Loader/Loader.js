import Spinner from "react-loader-spinner";
import './Loader.css';

export const Loader = () => {
    return (
        <div className="loader">
            <Spinner
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>

    );
}