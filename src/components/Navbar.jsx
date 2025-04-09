import { Link } from "react-router"

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-stone-700 text-white px-12 py-6 items-center align-middle'>
      <Link to='/' className="font-bold text-4xl">help center</Link>

      <ul className='flex items-center align-middle gap-6'>
        <li><Link to='/'>list clients</Link></li>
        <li><Link to='/form'>add client</Link></li>
      </ul>
    </nav>
  )
}
