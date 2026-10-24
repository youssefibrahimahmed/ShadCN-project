import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"

import React from 'react'

const Cards = ({name, number, icon:Icon }) => {
    return (
        <Item className='py-5 bg-orange-500/10 
           !flex !items-cener !justifu-center
          border-2 border-orange-500/10 hover:border-orange-500 hover:shadow-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.7)] hover:-translate-y-1
          transition-all duration-300
          ' variant="muted">
            <ItemMedia variant="icon">
                <Icon className='text-orange-500 !h-9 !w-9' />
            </ItemMedia>
            <ItemContent>
                <ItemTitle className='text-5xl text-yellow-500 font-bold '>{number}</ItemTitle>
                <ItemDescription className='text-sm'>
                    {name}
                </ItemDescription>
            </ItemContent>
        </Item>)
}

export default Cards