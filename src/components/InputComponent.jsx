function InputComponent() {
  return (
    <div>
      <form className='flex flex-col items-center justify-center h-screen gap-3'>
        <label htmlFor='fullName' className='text-gray-700 text-sm selec font-bold '>
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          className='placeholder-blue-300 border border-gray-300 rounded-lg py-2 px-4 w-4/6 shadow-md focus:bg-blue-100 text-black'
          placeholder='Enter your full name'
        />

        <button className=' bg-blue-700 text-white rounded-lg py-2 px-4 hover:bg-blue-400'>Submit</button>
      </form>
    </div>
  );
}

export default InputComponent;
