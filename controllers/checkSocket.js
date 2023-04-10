import { io, HELLO } from '../server.js'
const Signup = (req, res) => {
    return res.status(200).json({ io: io })
}

export default Signup;
