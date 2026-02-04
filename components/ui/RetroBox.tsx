import { cn } from '@/lib/utils';

interface RetroBoxProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const RetroBox = ({ children, className, hoverEffect = true }: RetroBoxProps) => {
    return (
        <div
            className={cn(
                "bg-[#fdfbf7] p-6 border-[3px] border-[#111] shadow-[4px_4px_0px_0px_#111] transition-all duration-200",
                hoverEffect && "hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_#111]",
                className
            )}
        >
            {children}
        </div>
    );
};
