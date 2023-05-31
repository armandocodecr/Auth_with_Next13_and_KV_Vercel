import { FormLogin } from "@/components/FomLogin";

export default function Login() {
    return (
        <section className="w-screen flex-col h-screen flex justify-center items-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">Inicia sesión</h1>
            <FormLogin />
        </section>
    )
}