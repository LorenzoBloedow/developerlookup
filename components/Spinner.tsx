import { FunctionComponent } from "react";
import { ImSpinner9 } from "react-icons/im";

interface SpinnerProps {
    color: string
}

const Spinner: FunctionComponent<SpinnerProps> = ({ color }) => {
    return (
        <ImSpinner9
        style={{ color }}
        className="animate-spin w-full h-full"
        />
    );
}

export default Spinner;