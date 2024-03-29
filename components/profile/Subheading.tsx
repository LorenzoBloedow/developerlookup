import { FunctionComponent, ReactNode } from 'react';
    
interface SubheadingProps {
    children: ReactNode;
}
 
const Subheading: FunctionComponent<SubheadingProps> = ({ children }) => {
    return (
        <h2
        className="text-2xl md:text-3xl font-bold"
        >
            {children}
        </h2>
    );
}
 
export default Subheading;