'use client'
import Link from "next/link"
import { Button, Input } from "./"
import { toast } from 'sonner'


export const FormRegister = () => {

    const handleRegister = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const { name, email, password } = Object.fromEntries(formData)

        await fetch('/api/kv-send-data', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            toast.success('Usuario registrado con éxito')
            form.reset()
        }).catch(err => {
            toast.error('Usuario registrado con éxito')
        })

    }

    return(
        <form onSubmit={handleRegister} className="min-w-[400px] text-left p-8 space-y-8 border border-white/10 rounded mt-5">
                <Input 
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Armando Murillo"
                    label="Nombre"
                />

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

                <h3 className="font-bold">¿Ya tienes una cuenta?</h3>
                <Link
                    className="font-bold text-sm text-neutral-500 underline"
                    href={'/login'}
                >
                    Inicia sesión
                </Link>
            </form>
    )

}