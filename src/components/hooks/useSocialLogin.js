import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";


const useSocialLogin = () => {
    
 const googleProvider = new GoogleAuthProvider()
 const githubProvider = new GithubAuthProvider()
 const facebookProvider = new FacebookAuthProvider()

// Google 
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => toast.success('Thanks for SignUp '))
            .catch(() => toast.error('Something went wrong'))
    }
// Github
    const signGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => toast.success('Thanks for SignUp '))
            .catch(() => toast.error('Something went wrong'))
    }
// Facebook 
    const signInFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then(() => toast.success('Thanks for SignUp '))
        .catch(() => toast.error('Something went wrong'))
    }
    
    return {
        signInGoogle,
        signGithub,
        signInFacebook


    }
}
export default useSocialLogin;