interface TagProps {
    color: string
}

function Tag({color}: TagProps){
    return(<>
    <div className={`bg-[#${color}] rounded-full px-4 py-2 w-fit h-fit`}>
        <span className="text-white font-[inter] text-sm md:text-xl" >React</span>
    </div>
    </>)
}

export default Tag;