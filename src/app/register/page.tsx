import { FormRegister } from "@/components/FormRegister";

export default function Register() {
    return (
        <section className="w-screen flex-col h-screen flex justify-center items-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">Registrate</h1>
            <FormRegister />
        </section>
    )
}