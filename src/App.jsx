import './App.css'

function App() {


  return (
    <>
      <div className='container mx-auto'>
        <header className='flex justify-between items-center sticky top-0 z-10 py-4 bg-blue-900'>
          <div className='flex-shrink-0 ml-6 cursor-pointer'>
            <i className='fas fa-wind fa-2x text-yellow-500'></i>
            <span className='text-3xl font semibold text-blue-200'>Company Name</span>
          </div>
          <ul className='flex mr-10 font-semibold'>
            <li className='mr-6 p-1 border-b-2 border-yellow-500'>
              <a className='cursor-default text-blue-200' href=''>Home</a>
            </li>
              <li className='mr-6 p-1'><a className='text-white hover:text-blue-300' href="#">Services</a></li>
              <li className='mr-6 p-1'><a className='text-white hover:text-blue-300' href="#">About</a></li>
              <li className='mr-6 p-1'><a className='text-white hover:text-blue-300' href="#">Contact Us</a></li>
          </ul>
        </header>
      </div>
    </>
  )
}

export default App
