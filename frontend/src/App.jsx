import { useState } from "react";
import axios from "axios";
import {
    Mail,
    Lock,
    User,
    Eye,
    EyeOff
} from "lucide-react";

import "./App.css";

const API = "http://localhost:5000/api";

function App() {

    const [isRegister, setIsRegister] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

     if (isRegister) {

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(form.password)) {

            alert(
                "Password must contain:\n\n" +
                "1. At least one uppercase letter (A-Z)\n" +
                "2. At least one lowercase letter (a-z)\n" +
                "3. At least one number (0-9)\n" +
                "4. At least one special character (@$!%*?&)\n" +
                "5. Minimum 8 characters"
            );

            return;
        }
    }


    setLoading(true);

    try {

        if (isRegister) {

            const response = await axios.post(
                `${API}/auth/register`,
                form
            );

            alert("Registration Successful! 🎉");

            setIsRegister(false);

            setForm({
                name: "",
                email: "",
                password: ""
            });

        } else {

            const response = await axios.post(
                `${API}/auth/login`,
                {
                    email: form.email,
                    password: form.password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful! Welcome " +
                response.data.user.name + " 🎉");

            setLoggedInUser(response.data.user);

        }

    } catch (error) {

        const errorMessage =
            error.response?.data?.message ||
            "Unable to connect to the server. Please try again.";

        alert(errorMessage);

    } finally {

        setLoading(false);

    }
};

    const logout = () => {
        localStorage.removeItem("token");
        setLoggedInUser(null);

        setForm({
            name: "",
            email: "",
            password: ""
        });

         alert("Logged out successfully!");
    };

    if (loggedInUser) {
        return (
            <div className="container">
                <div className="login-card success-card">
                    <div className="success-icon">✓</div>

                    <h1>Welcome!</h1>

                    <p>
                        Hello, {loggedInUser.name}
                    </p>

                    <p>{loggedInUser.email}</p>

                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">

            <div className="login-card">

                <div className="logo">
                    <Lock size={25} />
                </div>

                <h1>
                    {isRegister ? "Create Account" : "Welcome Back"}
                </h1>

                <p className="subtitle">
                    {isRegister
                        ? "Create your account to get started"
                        : "Please login to your account"}
                </p>

                <form onSubmit={handleSubmit}>

                    {isRegister && (
                        <div className="input-group">
                            <User size={19} />

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <Mail size={19} />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <Lock size={19} />

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            minLength={8}
                            required
                        />

                        <span
                            className="eye"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword
                                ? <EyeOff size={19} />
                                : <Eye size={19} />
                            }
                        </span>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading
                            ? "Please wait..."
                            : isRegister
                                ? "Create Account"
                                : "Login"}
                    </button>

                </form>

                {message && (
                    <p className="message">{message}</p>
                )}

                <div className="switch">
                    {isRegister
                        ? "Already have an account?"
                        : "Don't have an account?"}

                    <span
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setMessage("");
                        }}
                    >
                        {isRegister ? " Login" : " Register"}
                    </span>
                </div>

            </div>
        </div>
    );
}

export default App;