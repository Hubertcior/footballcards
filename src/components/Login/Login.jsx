import { Auth } from '@supabase/auth-ui-react'
import { supabase} from "@/lib/supabase.js";

import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white/80 rounded-xl shadow-lg p-8 w-full max-w-md">
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: 'default',
                        className: {
                            container: 'flex flex-col gap-6',
                            button: 'relative bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 text-white font-bold py-2 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:from-green-400 hover:to-emerald-600 border-none outline-none before:absolute before:inset-0 before:bg-white/10 before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 overflow-hidden',
                            input: 'rounded-2xl px-4 py-2 shadow bg-white/80 border-none focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-150 placeholder:text-emerald-400 text-gray-900 font-semibold',
                            label: 'font-semibold text-gray-800',
                            anchor: 'text-emerald-700 hover:underline font-medium',
                            message: 'text-red-600 text-sm mt-2',
                        }
                    }}
                    providers={[]}
                    showLinks={true}
                />
            </div>
        </div>
    )
}
export default Login
