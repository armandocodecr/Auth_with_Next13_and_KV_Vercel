
interface ButtonProps {
    type: "submit" | "button" | "reset";
    text: string;
}

export const Button = ({ text, type }: ButtonProps) => {
    return  <button type={type} className="w-full px-5 py-3 tex-sm font-bold text-white border border-white rounded-full">{text}</button>
}