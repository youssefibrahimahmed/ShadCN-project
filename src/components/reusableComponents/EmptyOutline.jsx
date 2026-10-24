
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ShoppingCart } from "lucide-react"
import { SheetClose } from "../ui/sheet"
import { useDispatch, useSelector } from "react-redux"
import { setActiveSection } from "@/features/uiSlice"

export function EmptyOutline() {

  const dispatch = useDispatch()
  const activeSection = useSelector(
    (state) => state.ui.activeSection
  )
  return (
    <Empty className="w-full h-full flex flex-col items-center hustify-center">
      <EmptyHeader className=" flex flex-col items-center justify-center">
        <EmptyMedia className="" >
          <ShoppingCart size={60} />
        </EmptyMedia>
        <EmptyTitle className="text-xl font-semibold">
          Your Cart is Empty
        </EmptyTitle>
        <EmptyDescription>
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <SheetClose
          render={
            <Button
              onClick={() => dispatch(setActiveSection('menu'))}
              className='
        bg-gradient-to-r p-6 rounded-full text-2xl font-bold to-amber-400 via-orange-500 from-orange-600  '
              size="lg">
              <a href="#menu">Add Items</a>
            </Button>
          }
        />
      </EmptyContent>
    </Empty>
  )
}
