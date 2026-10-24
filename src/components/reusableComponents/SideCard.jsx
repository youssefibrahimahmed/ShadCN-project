

import { Button } from "@/components/ui/button"
import {
    Card,
} from "@/components/ui/card"
import { useDispatch } from "react-redux"
import { addToCart, updateQuantity } from "@/features/cartSlice"
export function SideCard({ image, name, price, id, quantity }) {
    const dispatch = useDispatch();
    return (
        <Card className=" flex flex-col sm:flex-row  mx-auto w-full pb-0 pl-5 items-center w-fit px-3 sm:px-10 h-fit sm:h-35 bg-[#250000] ">
            <img
                src={image}
                alt="Event cover"
                className="relative sm:mt-0 mt-2 w-full sm:w-24 h-24 rounded-md object-cover  shrink-0   "
            />
            <div className="flex gap-5">
                <div className="name-price flex flex-col flex-wrap">
                    <p className="text-white ">{name} </p>
                    <p className="text-orange-600">₹{price}</p>
                </div>
                <div className="plus-minus text-white flex gap-3 items-center">
                    <Button
                        disabled={quantity <= 1}

                        onClick={() =>
                            dispatch(updateQuantity({
                                id,
                                quantity: quantity - 1
                            }))
                        }
                        className="h-fit px-2 py-1 bg-orange-600 rounded-full">
                        -
                    </Button>
                    <p>{quantity}</p>
                    <Button
                        onClick={() =>
                            dispatch(addToCart({
                                id,
                                img: image,
                                name,
                                price
                            }))

                        }
                        className="h-fit  px-2 py-1 bg-orange-600 rounded-full">
                        +
                    </Button>
                </div>
            </div>
        </Card>

    );
}