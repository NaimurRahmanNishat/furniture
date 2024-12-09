

const BasicToolTip = () => {
  return (
    <div className='hidden lg:block absolute bottom-40 left-24 group'>
    <button className='relative p-4 bg-white/25 border border-1 border-white text-white text-xl rounded-full'>
        {/* Tooltip with 3 colors and an arrow */}
        <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex'>
            {/* Colored dots */}
            <div className='size-6 bg-red-700 border border-white rounded-full'></div>
            <div className='size-6 bg-green-700 border border-white rounded-full'></div>
            <div className='size-6 bg-blue-700 border border-white rounded-full'></div>
            {/* Tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'></div>
        </div>
    </button>
</div>
  )
}

export default BasicToolTip