
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
export function WhyUsCard({ title, desc1, desc2, image }) {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Card
            className="border group border-orange-900 
            relative flex flex-col mx-auto w-full
            max-h-179 max-w-85 pt-0 !bg-zinc-900
            text-white 
            hover:border-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)] 
            transition duration-300
          ">
            <div className=" absolute inset-0 z-5 aspect-video bg-black/15 pointer-events-none" />
            <div className="relative overflow-hidden 
            transition duration-400 
            ">
                <img
                    src={image}
                    alt="Event cover"
                    className="relative group-hover:brightness-70 z-10 aspect-video
                     w-full  object-cover transition duration-400 group-hover:scale-110"
                />
            </div>
            <CardHeader className="flex w-[95%] mt-6 flex-col flex-1">
                <CardTitle className='font-extrabold mb-3 pl-5 text-4xl'>{title}</CardTitle>
                <CardDescription className='text-lg pl-5 font-[500]'>
                    {desc1}
                </CardDescription>
                {showDetails ?
                    <CardDescription className='text-lg pl-5 font-[500]'>

                        <Separator
                            className=" my-2 bg-gradient-to-r bg-transparent  from-orange-500/0 via-orange-500 to-orange-500/0 "
                        />
                        {desc2}
                    </CardDescription>
                    :
                    ''
                }

            </CardHeader>
            <CardFooter className='justify-center mt-auto w-full flex flex-wrap !bg-transparent gap-4'>
                <div className=" w-full text-center ">
                    <Button
                        onClick={() => setShowDetails(!showDetails)}
                        variant="outline"
                        size="lg"
                        className='border-2 py-7 px-4 text-xl border-orange-600
                        bg-transparent  text-orange-600 rounded-full 
                        hover:text-white hover:bg-orange-600
                        transition duration-300'
                    >
                        {
                            showDetails ?
                                'Show less' : 'Learn more'
                        }

                    </Button>
                </div>
            </CardFooter>



        </Card>
    )
}
