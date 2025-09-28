import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

interface StackProps {
    nome: string
}

function Stack ({ nome }: StackProps) {
    return(

        <div 
            data-tooltip-id="tooltip" 
            data-tooltip-content={nome} 
            data-tooltip-place="bottom" 
            className="w-18 transition duration-300 ease-in-out hover:-translate-y-4 hover:bg-neutral-100 hover:cursor-pointer rounded-2xl p-2" 
        >
            <img src={`https://cdn.simpleicons.org/${nome}/390E7C`} className=" ease-in-out rounded-xl"/>
            <Tooltip 
                delayShow={100}  
                delayHide={80} 
                id="tooltip" 
                className="font-bold transition"
            />
               
        </div>
    )
}

export default Stack