import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '@base-ui/react'
import { Eye } from 'lucide-react'
import { DetailsOurSpaceCard } from './DetailsOurSpaceCard'
const OurSpaceCard = ({ id, image, name, instructions, category }) => {

    const [showDetails, setShowDetails] = useState(false)

    return (
        <>
            <Card className='lg:w-110 mx-auto lg:h-80 p-0'>
                <div className="relative overflow-hidden transition duration-400 group ">
                    <img
                        src={image}
                        alt="Event cover"
                        className="relative group-hover:brightness-30 z-10 aspect-video
                     w-full h-80 object-cover transition duration-400 group-hover:scale-110"
                    />
                    <Button className='cursor-pointer text-lg font-semibold coloringBg px-4 py-2 
                absolute left-[10%] bottom-[8%] z-10 opacity-0 rounded-full
                 group-hover:opacity-100 transition duration-400'
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        <Eye className='inline' size={15} />  View
                    </Button>
                    <p className='absolute text-3xl font-bold left-[10%]
            bottom-[25%] z-10 text-white opacity-0 group-hover:opacity-100 
            transition duration-400 group-hover:-translate-y-10
            '>{name}</p>
                    <p className='absolute text-md font-semibold left-[10%]
            bottom-[15%] z-10 text-gray-400 opacity-0 group-hover:opacity-100 
            transition duration-400 group-hover:-translate-y-10
            '>{instructions}</p>
                    <p className='absolute text-sm font-normal left-[10%]
            bottom-[45%] z-10 text-orange-500 opacity-0 group-hover:opacity-100 
            transition duration-400 group-hover:-translate-y-10
            '>{category}</p>
                </div>
            </Card>
            {showDetails && (
                <DetailsOurSpaceCard
                    name={name}
                    category={category}
                    instructions={instructions}
                    image={image}
                    onClose={() => setShowDetails(false)}
                />
            )}
        </>
    )
}

export default OurSpaceCard