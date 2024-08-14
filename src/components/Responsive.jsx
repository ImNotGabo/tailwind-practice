function Responsive() {
  return (
    <div className='sm:text-red-500 md:text-green-500 lg:text-black xl:text-purple-500 2xl:text-pink-500'>
      <p className='p-4 sm:p-32 md:italic sm:font-bold sm:border sm:flex'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam
        auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
      </p>

      <div className='bg-blue-500 flex flex-col sm:flex-row'>
        <div className='w-32 h-32 bg-gray-200 border'>A</div>
        <div className='w-32 h-32 bg-gray-200 border'>B</div>
      </div>
    </div>
  );
}

export default Responsive;
