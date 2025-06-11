import { assets } from '../../assets/assets'
import { Outlet} from 'react-router-dom'
import SideBar from '../../components/admin/SideBar'
import { useAppContent } from '../../context/AppContext'

const Layout = () => {

    const {axios, setToken, navigate} = useAppContent()

    const logout = () => {
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null
        setToken(null)
        navigate('/')
    }

    return (
        <>
            <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-40 cursor-pointer' onClick={()=> navigate('/')} />
                <button className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer' onClick={logout}>Logout</button>
            </div>
            <div className='flex h-[calc(100vh-70px)]'>
                <SideBar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout