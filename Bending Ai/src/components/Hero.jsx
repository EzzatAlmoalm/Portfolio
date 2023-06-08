import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="Bending Ai_ logo" className='w-28 object-contain' />
        <button type='button'
                onClick={()=>window.open('https://www.google.com/')}
                className='black_btn'>

          github</button>
        </nav>
        <h1 className='head_text'>Summrize Article with <br className='max-md:hidden'></br>
        <span className='orange_gradient'>Bending Ai  
          </span></h1>
          <h2 className='desc'>
            Simplfy your reading with Bending Ai,an open-source article summarizer that transform lengthly articles into clear and concise summaries
          </h2>
    </header>
  )
}

export default Hero