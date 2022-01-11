import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import './Login.css'


function Login() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const loginUser = (e) => {
        // auth
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    password: userAuth.user.password,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            })
            .catch((e) => console.log(e));
    }

    const register = () => {
        if (!name) {
            return alert("Please enter name");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    ui: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch(e => {
            console.log(e.message);
        })
    }

    return (
        <div className='login '>
            <img src="/logo_linkedin.png" alt="Linkedin" />
            <form action="">
                <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Profil pic url' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={loginUser}>Sign in</button>
            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
