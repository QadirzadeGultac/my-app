import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Yüklənmə göstəricisi
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://clinic.nmtech.az/nm-clinic-api/api/v0/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        console.log("Login Success:", data);
        localStorage.setItem("token", data.token); // Tokeni yadda saxla
        navigate("/dashboard"); // Dashboard səhifəsinə yönləndir
      } else {
        alert(data.message || "Yanlış istifadəçi adı və ya şifrə");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Serverə qoşulmada problem var");
      setLoading(false);
    }
  };

  return (
    <div className='main'>
      <div className='login-main'>
        <img src="./src/assets/logo.jpg" alt="NMSoft" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='name'
            type="text"
            placeholder='İstifadəçi adı'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            className='password'
            type="password"
            placeholder='Şifrə'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <br />
          <button className='login-button' type="submit">
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
