import { io, HELLO } from '../server.js'
const Login = (req, res) => {
    return res.status(200).json({ io: io })
}

export default Login;