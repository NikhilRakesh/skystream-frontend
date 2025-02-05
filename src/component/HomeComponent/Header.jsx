import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  return (
    <div className="lg:px-40 md:px-20 px-10 flex text-center md:float-right items-center justify-center text-sm md:text-base">
      
      <button className="text-gray ml-10 px-3 border py-1 rounded-md hover:bg-black hover:border-black hover:scale-105 transform" onClick={()=>navigate('/login')}>
        Login
      </button>
    </div>
  );
}

export default Header;
