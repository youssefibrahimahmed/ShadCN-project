import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ButtonToaster } from "./ButtonToaster"
import { useState } from "react"
import { useMealDetails } from "@/Hooks/ViewDetelis"
import { DetailsCard } from "./detailsCard"
import { Skeleton } from "../ui/skeleton"
import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cartSlice"
import { toast } from "../ui/toast"

export function MealsCard({ img, category, name, city, country, price, id }) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id,
                img,
                name,
                category,
                price,
                city,
                country
            })
        );

    };
    const [showDetails, setShowDetails] = useState(false)
    const {
        data: mealDetails,
        isFetching,
        isError,
        isLoading,
        error,
        refetch
    } = useMealDetails(id);

    async function handleViewDetails() {
        setShowDetails(true)
        await refetch();
    }
    console.log({ showDetails, isFetching });
    return (
        <Card
            className="border border-orange-900 
            relative flex flex-col mx-auto w-full
            min-h-110 max-w-85 pt-0 !bg-zinc-900
            text-white
            hover:border-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)] 
            transition duration-300
          ">
            <div className=" absolute inset-0 z-5 aspect-video bg-black/20 pointer-events-none" />
            <div className="relative overflow-hidden transition duration-400 group ">

                <img
                    src={img}
                    alt="Event cover"
                    className="relative group-hover:brightness-30 z-10 aspect-video
                     w-full  object-cover transition duration-400 group-hover:scale-110"
                />
                <Button className='cursor-pointer coloringBg px-3 py-5 
                absolute left-[30%] top-[60%] z-10 opacity-0 rounded-full
                group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400'
                    onClick={handleViewDetails}
                >View Details</Button>
            </div>
            <CardHeader className="flex flex-col flex-1">
                <CardAction className='mb-4'>
                    <Badge
                        variant="secondary"
                        className='bg-[#250000] text-orange-600'>
                        {category}
                    </Badge>
                    <Badge
                        variant="secondary"
                        className='bg-[#250000] text-orange-600'>
                        {country}
                    </Badge>
                    <Badge
                        variant="secondary"
                        className='bg-[#250000] text-orange-600'>
                        {city}
                    </Badge>
                </CardAction>
                <CardTitle>{name}</CardTitle>
                <CardTitle className='mt-5 border-2 border-orange-600 text-orange-600 w-fit rounded-md px-2 py-2 mt-auto'>{price}</CardTitle>
            </CardHeader>
            <CardFooter className='justify-center mt-auto w-full flex flex-wrap !bg-transparent gap-4'>
                <div className="sm:w-fit w-full">
                    <ButtonToaster />
                </div>
                <Button
                    onClick={() => {
                        toast.add({
                            type: "success",
                            description: `Order ${name} Added To Cart Successfully !`,
                            className: "text-blue-800 !coloringBg  "
                        })
                        handleAddToCart()
                    }}

                    className="w-full sm:w-fit border-2 border-orange-600 text-orange-600">+ Add to Cart</Button>
            </CardFooter>
            {showDetails && isFetching && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
                    <div className="w-full max-w-md space-y-4 rounded-xl border border-orange-900 bg-zinc-900 p-5">

                        <Card className="w-full bg-zinc-900">
                            <CardHeader>
                                <Skeleton className="h-4 w-2/3 bg-zinc-500" />
                                <Skeleton className="h-4 w-1/2 bg-zinc-500" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="aspect-video w-full bg-zinc-500" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
            {showDetails && isError && (
                <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/80 text-white">
                    <p>{error?.message || "Failed to load details"}</p>
                    <Button onClick={() => setShowDetails(false)}>
                        Close
                    </Button>
                </div>
            )}
            {showDetails && mealDetails && !isFetching && (
                <DetailsCard
                    {...mealDetails}
                    price={price}
                    id={id}
                    onClose={() => setShowDetails(false)}
                />
            )}
        </Card>
    )
}
