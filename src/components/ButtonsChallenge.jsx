function ButtonsChallenge() {
  return (
    <div>
      <div>
        <button className='bg-blue-800 rounded-lg border-l-8 border-blue-700 px-4 py-2 m-4 text-gray-400 text-sm'>
          Submit
        </button>
      </div>
      <div>
        <button className='border-2 border-red-500 text-red-500 rounded-full px-3 py-1'>Submit</button>
      </div>
      <div>
        <button className='bg-indigo-300 border-y-4 border-indigo-500 text-indigo-500 px-4 py-1 m-4'>Save</button>
      </div>
      <div>
        <button className='border-4 rounded-full px-16 py-3 uppercase font-bold text-sm bg-orange-600 border-orange-800'>
          Buy Now
        </button>
      </div>
      <div>
        <button className='border-2 m-4 font-serif text-xs uppercase rounded-lg p-4 border-amber-600 bg-amber-600'>
          Send Postcard
        </button>
      </div>
    </div>
  );
}

export default ButtonsChallenge;
