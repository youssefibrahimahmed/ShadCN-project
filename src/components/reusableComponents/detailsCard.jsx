import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cartSlice"

export function     DetailsCard({ id, name, category, price, country, city, ingredients = [], instructions, youtube, image, onClose }) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow
        };
    }, [])

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id,
                img: image,
                name,
                category,
                price,
                city,
                country
            })
        );

    };
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

                    <div className="head flex justify-between mb-4 py-6  border-b border-gray-500/50">
                        <div className="left"> <p className="text-xl text-yellow-500 font-bold">₹{price}</p></div>
                        <div className="right flex flex-col justify-end text-right ">
                            <p className="text-2xl ">{name}</p>
                            <p className="text-lg text-orange-500 font-[300]">{category} {country} {city}</p>
                        </div>
                    </div>
                    <div className="ingredients mb-4 py-6  border-b border-gray-500/50">
                        <p className="text-xl font-semibold mb-3">Ingredients</p>
                        <div className="flex flex-wrap gap-3 items-center">
                            {ingredients.map((ingredient, index) => (

                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className='bg-[#250000] text-sm px-3 py-5 text-orange-600'>
                                    {ingredient.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="instructions border-b mb-4 py-6 border-gray-500/50">
                        <p className="text-xl font-semibold mb-3">instructions</p>
                        <p className="text-lg text-gray-400 ">{instructions}</p>
                    </div>

                    <div className="buttons flex flex-col gap-3 mb-4 py-6   ">
                        {youtube && (
                            <Button

                                className='py-5 text-sm font-bold coloringBg transition duration-200 hover:-translate-y-2
                                 hover:shadow-[0_0_10px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)]'>
                                <a
                                    href={youtube}
                                    target="_blank"
                                >
                                    Watch Recipe Video
                                </a>
                            </Button>
                        )}
                        <Button
                            onClick={() => {
                                toast.add({
                                    type: "success",
                                    description: `Order ${name} Added To Cart Successfully !`,
                                    className: "text-blue-800 !coloringBg  "
                                })
                                handleAddToCart();
                                onClose();
                            }}

                            variant="outlined"
                            className='py-5 text-sm font-bold border
                            border-orange-600 text-orange-600
                            hover:bg-orange-600 hover:text-white 
                            transition duration-200'>
                            <ShoppingCart />
                            ADD TO CART
                        </Button>
                        <Button
                            onClick={() => {
                                toast.add({
                                    type: "success",
                                    description: "Order Placed Successfully !",
                                    className: "text-blue-800 !coloringBg  "
                                })
                                onClose()
                            }}
                            className='py-5 text-sm font-bold coloringBg transition duration-200 hover:-translate-y-2 hover:shadow-[0_0_10px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)]'> ORDER NOW - ₹{price} </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
