import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase.js'
import Currency from "@/components/CoinsBar/Currency.jsx";
import {Link} from "react-router-dom";

const CoinsBar = () => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) setEmail(user.email)
            else setEmail('')
        }
        getUser()

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') setEmail('')
            if (event === 'SIGNED_IN' && session?.user) setEmail(session.user.email)
        })

        return () => listener.subscription.unsubscribe()
    }, [])


    return (
        <div className="w-screen bg-green-900/20 text-white top-0 left-0 z-[1000] shadow-md flex items-center justify-center">
            {email ? (
                <div className="flex flex-row items-center justify-center gap-20">
                    <Link to={`/user/${email}`}>User : <b>{email}</b></Link>
                    <Currency/>
                </div>
            ): (
                <span className="text-red-400">You're not loged in</span>
            )}

        </div>
    )
}

export default CoinsBar