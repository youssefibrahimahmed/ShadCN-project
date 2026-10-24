import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect } from "react"

export function DetailsOurSpaceCard({ category,  name, instructions, image, onClose }) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow
        };
    }, [])

    return (
        <div className=" fixed inset-0  z-70 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6">
            <Card className='custom-scrollbar relative overflow-y-auto flex max-h-[90vh] w-full max-w-3xl flex-col gap-0  rounded-2xl border border-orange-950 bg-[#1b1b1b] p-0 text-white shadow-2xl'>
                <div className="shrink-0 relatve img">
                    <img
                        src={image}
                        alt=""
                        className="h-[35vh] min-h-48 max-h-[540px] w-full object-cover sm:h-[55vh]" />
                    <Button
                        onClick={onClose}
                        className="absolute right-4 top-4 z-10"
                        aria-label="Close details"
                    >
                        ×
                    </Button>
                </div>
                <CardContent className=' px-5'>


                    <div className="ingredients  py-6">
                        <div className="flex flex-wrap gap-3 items-center">
                            <Badge
                                variant="secondary"
                                className='bg-[#250000] text-sm px-3 py-5 text-orange-600'>
                                {category}
                            </Badge>
                        </div>
                    </div>
                    <div className="instructions mb-4  ">
                        <p className="text-5xl text-white my-4 font-extrabold">{name}</p>
                        <p className="text-lg text-gray-400 ">{instructions}</p>
                    </div>

                </CardContent>
            </Card>
        </div >
    )
}
