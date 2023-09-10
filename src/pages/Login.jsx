import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";


function Login() {

    const { currentUser, signInWithGoogle, signInWithFacebook } = UserAuth()
    const navigate = useNavigate()

    const handleLogInWithGoogle = async () => {
        try {
            await signInWithGoogle()
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogInWithFacebook = async () => {
        try {
            await signInWithFacebook()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate('/chat')
        }

    }, [currentUser])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md ">
                    <h1 className="text-5xl font-bold">Hello there  👋🏻</h1>
                    <p className="py-6">Join the conversation, meet new people, and make connections in one shared room.</p>
                    <button onClick={handleLogInWithGoogle} className="btn btn-primary mx-5 bg-neutral ">Login With Google</button>
                    <button onClick={handleLogInWithFacebook} className="btn btn-primary mx-5 bg-neutral">Login With Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Login