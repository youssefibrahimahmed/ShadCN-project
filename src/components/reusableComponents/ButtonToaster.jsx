"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { IconSolarElectricity } from "@tabler/icons-react"
import '../../index.css'
export function ButtonToaster() {
    return (
        <div className="flex  flex-wrap gap-2 ">
            <Button
                className='coloringBg w-full'
                variant="outline"
                onClick={() =>
                    toast.add({
                        type: "success",
                        description: "Order Placed Successfully !",
                        className: "text-blue-800 !coloringBg  "
                    })
                }
            >
                <IconSolarElectricity />
                Quick Order
            </Button>
        </div>
    )
}
