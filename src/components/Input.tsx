
interface InputProps {
    id: string;
    type: string;
    name: string;
    placeholder: string;
    label: string;
}

export const Input = ({ id, type, name, placeholder, label }: InputProps) => {

    return(
        <fieldset>
            <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-300'>{label}</label>
            <input 
                className="border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600" 
                type={type} 
                name={name} 
                placeholder={placeholder}
                id={id} 
            />
        </fieldset>
    )

}