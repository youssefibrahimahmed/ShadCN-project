import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { EmptyOutline } from "./EmptyOutline"
import { useDispatch, useSelector } from "react-redux"
import { SideCard } from "./SideCard"
import { toast } from "../ui/toast"
import '../../index.css'
import { clearCart } from "@/features/cartSlice"
import { Separator } from "@/components/ui/separator"
export function SheetSide() {
    const cartItems = useSelector(
        (state) => state.cart.items
    )
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce(
        (total, item) => total + Number.parseFloat(item.price), 0
    )
    return (
        <div className=" flex-wrap gap-2">

            <Sheet key="right ">
                <SheetTrigger render={
                    <Button className="group "
                        variant="contained" >
                        <ShoppingCart className="
                            text-orange-500
                            group-hover:bg-orange-500
                            group-hover:!text-white
                            border border-orange-500
                            p-3 !h-12 !w-12 rounded-full
                            transition-all duration-300"/>
                    </Button>} />
                <SheetContent
                    side='right'
                    className="bg-[#1a1a1a] text-white data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                >
                    <SheetHeader className="w-full h-full  ">
                        <SheetTitle className="text-5xl font-extrabold text-white">
                            Your Cart ({cartItems.length})
                        </SheetTitle>
                        <SheetDescription className='flex flex-col gap-4 items-center justify-center w-full h-full'>
                            {
                                cartItems.length === 0 ?
                                    (<EmptyOutline />)
                                    :
                                    (cartItems.map((item, index) =>
                                        <SideCard
                                            key={item.id}
                                            image={item.img}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            id={item.id}
                                        />
                                    ))
                            }

                        </SheetDescription>
                    </SheetHeader>
                    <Separator className="  bg-gradient-to-r  from-orange-500/0 via-orange-500 to-orange-500/0 " />

                    <SheetFooter>
                        <div className="total-price flex justify-between px-3">
                        <span className="text-3xl">Total:</span> 
                        <span className="text-3xl text-yellow-400 font-bold">₹{totalPrice}</span>
                        </div>
                        <SheetClose render={
                            <Button
                                disabled={cartItems.length < 1}
                                onClick={() => {
                                    toast.add({
                                        type: "success",
                                        description: "Order Placed Successfully !",
                                        className: "text-blue-800 !coloringBg  "
                                    })
                                    dispatch(clearCart())
                                }}
                                className='coloringBg py-5 text-xl' variant="outline">Place Order</Button>} />
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}
