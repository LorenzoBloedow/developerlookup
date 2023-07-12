import { FunctionComponent, ReactNode } from 'react';
    
interface AmountProps {
    amount: number;
    title: string;
    subtitle: string;
    icon: ReactNode;
}
 
const Amount: FunctionComponent<AmountProps> = ({ amount, title, subtitle, icon }) => {
    return (
        <div
        className="flex flex-col items-center gap-4"
        >
            <h2
            className="text-2xl font-bold"
            >
                {title}
            </h2>
            <div
            className="flex flex-col gap-1 items-center"
            >
                {icon}

                <div
                className="flex flex-col md:text-lg"
                >
                    {amount}
                    <p className="text-xs md:text-sm">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Amount;