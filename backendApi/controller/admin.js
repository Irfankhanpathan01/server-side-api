import dotenv from "dotenv";
dotenv.config();

const users = [
  { id: 1, email: 'demo@gmail.com',
   password: 'password123', token: 'your_token' },
 
];
export const LoginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find((u) => u.email === email);
  
    if (!user || user.password !== password) {
      return res.status(401).json({ status: false, msg: 'Invalid email or password' });
    }
  
    res.json({ status: true, msg: 'Login successful', data: { token: user.token } });
  

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, msg: "Internal server error" });
  }
};
