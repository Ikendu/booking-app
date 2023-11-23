import { Logo, Find } from './assets/icons/Logo'

function App() {
  return (
    <div>
      <header className='p-4 flex justify-between'>
        <a href='' className='flex gap-1'>
          <Logo />
          <span className='font-bold text-xl'>airlifes</span>
        </a>
        <div className='flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-400'>
          <div>Anywhere</div>
          <div className='border-l border-gray-300' />
          <div>Any week</div>
          <div className='border-l border-gray-300' />
          <div>Add guest</div>
          <button>
            <Find />
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
