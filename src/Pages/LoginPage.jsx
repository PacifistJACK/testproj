import { motion } from "framer-motion"
import { FlaskConical, Mail, LockIcon, MoveRightIcon } from "lucide-react"

const LoginPage = () => {
  return (
    <div className="flex md:items-center sm:pt-[220px] justify-center w-screen">
       <form className="w-full max-w-lg flex flex-col text-center justify-center py-[32px] h-auto rounded-lg shadow-sm shadow-gray-500">
          <div className="flex flex-row gap-2 justify-center items-center text-5xl">
            <FlaskConical size={48}/> Flask
          </div>
          <p className="text-gray-500 mb-[30px]">A simple backend api with flask!</p>
          <div className="flex flex-col items-center w-full px-4">
          <label className="input validator text-lg mb-4">
          <Mail />
          <input
            type="text"
            required
            placeholder="Email"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <label className="input validator text-lg">
          <LockIcon />
          <input
            type="text"
            required
            placeholder="Password"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <p className="mt-4 hover:text-primary hover:underline cursor-pointer">Forgot Password?</p>
        <button className="flex flex-row items-center btn btn-primary btn-outline mt-4 px-12 text-xl py-6">Login <MoveRightIcon /></button>
        <p className="mt-2">Don't have an account? <span className="text-primary hover:underline cursor-pointer">Sing up</span></p>
        </div>
       </form>
    </div>
  )
}

export default LoginPage