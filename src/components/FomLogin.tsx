'use client'
import Link from "next/link"
import { Button, Input } from "./"
import { AuthData } from "../../public/interfaces/AuthData"
import { toast } from 'sonner';


export const FormLogin = () => {

    const fetchData = async() => {
        try {
            const res = await fetch('http://localhost:3000/api/kv-get-data')
            const data: AuthData[] = await res.json()
            return data
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())

        const data = await fetchData() || []
        console.log(data)
        const user = data.some(user => user.email === email && user.password === password)

        if(user) {
            toast.success('Usuario logueado con éxito')
            form.reset()
        }else {
            toast.error('Usuario o contraseña incorrectos')
        }
    }

    return(
        <form onSubmit={handleLogin} className="min-w-[400px] text-left p-8 space-y-8 border border-white/10 rounded mt-5">
            <Input 
                id="email"
                type="email"
                name="email"
                placeholder="tucorreo@tudominio.com"
                label="Correo electrónico"
            />
            <Input 
                id="password"
                type="password"
                name="password"
                placeholder="Abc12321"
                label="Contraseña"
            />
            <Button type="submit" text="Ingresar" />
            <h3 className="font-bold">¿No tienes una cuenta?</h3>
            <Link
                className="font-bold text-sm text-neutral-500 underline"
                href={'/register'}
            >
                Create una
            </Link>
        </form>
    )

}