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
    </div>
  );
}

export default App;

