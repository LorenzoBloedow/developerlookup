import { FunctionComponent } from "react";
import { ImSpinner9 } from "react-icons/im";

interface SpinnerProps {
    color?: string;
    className: string;
}

const Spinner: FunctionComponent<SpinnerProps> = ({ color, className }) => {
    return (
        <ImSpinner9
        style={{
            color
        }}
        className={"animate-spin " + className}
        />
    );
}

export default Spinner;