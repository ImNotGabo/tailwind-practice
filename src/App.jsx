import Borders from './components/Borders.jsx';
import Challenge2 from './components/Challenge-2.jsx';
import ButtonsChallenge from './components/ButtonsChallenge.jsx';
import Display from './components/Display.jsx';
import Flex from './components/Flex.jsx';
import BlockGalleryChallenge from './components/BlockGalleryChallenge.jsx';
import Responsive from './components/Responsive.jsx';

function App() {
  return (
    // Background Classes & Shades
    <div className='bg-blue-500 text-white'>
      <div className='bg-red-500'>Text</div>
      <div className='bg-yellow-500'>Body</div>
      <div className='bg-green-500'>Footer</div>

      {/* Witdh & Height */}
      <div className='w-1 bg-slate-800'>1</div>
      <div className='w-2 bg-slate-800'>2</div>
      <div className='w-4 bg-slate-800'>4</div>
      <div className='w-16 bg-slate-800'>16</div>
      <div className='w-3/4 bg-slate-800'>3/4</div>
      <div className='w-full bg-slate-800'>Full</div>
      <div className='w-screen bg-slate-800'>Screen</div>
      <div className='w-32 h-32 bg-slate-800'>32x32</div>

      {/* Challenge: 9 boxes that are 20px wide, 20px tall, and spaced evenly.
          Each box should represent a shade of blue color scheme.
      */}
      <h1>Challenge: 9 boxes that are 20px wide, 20px tall.</h1>
      <div className='w-5 h-6 bg-blue-100 space-'></div>
      <div className='w-5 h-6 bg-blue-200 space-'></div>
      <div className='w-5 h-6 bg-blue-300 space-'></div>
      <div className='w-5 h-6 bg-blue-400 space-'></div>
      <div className='w-5 h-6 bg-blue-500 space-'></div>
      <div className='w-5 h-6 bg-blue-600 space-'></div>
      <div className='w-5 h-6 bg-blue-700 space-'></div>
      <div className='w-5 h-6 bg-blue-800 space-'></div>
      <div className='w-5 h-6 bg-blue-900 space-'></div>

      <div>Margin</div>
      <div className='w-32 h-32 bg-blue-800 mt-4'>Margin Top</div>
      <div className='w-32 h-32 bg-gray-500 mb-4'>Margin Bottom</div>
      <div className='w-32 h-32 bg-gray-500 ml-4'>Margin Left</div>
      <div className='w-32 h-32 bg-gray-500 mr-4'>Margin Right</div>
      <div className='w-32 h-32 bg-red-800 pt-4'>Padding Top</div>
      <div className='w-32 h-32 bg-red-800 pb-4'>Padding Bottom</div>
      <div className='w-32 h-32 bg-red-800 pr-4'>Padding Right</div>
      <div className='w-32 h-32 bg-red-800 pl-4'>Padding Left</div>

      {/* Styling Text - Font Family Part 1*/}
      <p className='font-sans text-base text-center text-gray-700 m-3 p-5 line-through'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit assumenda reprehenderit, iste cupiditate dolorem
        minus porro, repellendus ex animi totam, ut perspiciatis nihil voluptate. Ad consequatur rem perspiciatis
        aperiam ipsa!
      </p>
      <p className='font-serif text-2xl text-right text-gray-800 m-3 p-5 tracking-tight uppercase'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit assumenda reprehenderit, iste cupiditate dolorem
        minus porro, repellendus ex animi totam, ut perspiciatis nihil voluptate. Ad consequatur rem perspiciatis
        aperiam ipsa!
      </p>
      <p className='font-mono text-4xl text-justify text-gray-900 m-3 p-5 italic leading-relaxed'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit assumenda reprehenderit, iste cupiditate dolorem
        minus porro, repellendus ex animi totam,{' '}
        <span className='font-black underline'>ut perspiciatis nihil voluptate.</span> Ad consequatur rem perspiciatis
        aperiam ipsa!
      </p>
      <Challenge2 />
      <br />

      {/* Borders */}
      <Borders />

      {/* Buttons Challenge */}
      <ButtonsChallenge />

      {/* Display */}
      <Display />

      {/* Flex */}
      <Flex />

      {/* Block Gallery Challenge */}

      <BlockGalleryChallenge />

      {/* Responsive */}
      <Responsive />
    </div>
  );
}

export default App;

