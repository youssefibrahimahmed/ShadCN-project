import { Button } from "@/components/ui/button"
import '../../index.css'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

const months = [
    { label: "MM", value: null },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
]

const years = [
    { label: "YYYY", value: null },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
]

export function FormFile() {
    return (
        <div className="bg-zinc-800 rounded-xl p-5 w-full">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j"
                                    className='text-orange-600 font-normal '>
                                    Your Name
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="Evil Rabbit"
                                    className='border-0 border-b-2 border-b-orange-600'
                                    required
                                />
                            </Field>
                            <Field className='mt-8'>
                                <FieldLabel
                                    className='text-orange-600 font-normal '

                                    htmlFor="checkout-7j9-card-number-uw1">
                                    Email Address
                                </FieldLabel>
                                <Input
                                    type='email'
                                    id="checkout-7j9-card-number-uw1"
                                    placeholder="A@B.C"
                                    className='border-0 border-b-2 border-b-orange-600'

                                    required
                                />
                                <FieldDescription>
                                    Enter Your Email
                                </FieldDescription>
                            </Field>
                            <div className="grid grid-cols-3 mt-8 gap-4">
                                <Field >
                                    <FieldLabel htmlFor="checkout-exp-month-ts6"
                                        className='text-orange-600 font-normal '
                                    >
                                        Month
                                    </FieldLabel>
                                    <Select items={months}                                    >
                                        <SelectTrigger id="checkout-exp-month-ts6"
                                            className='border-0 border-b-2 border-b-orange-600'>
                                            <SelectValue

                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {months.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-exp-year-f59"
                                        className='text-orange-600 font-normal '>
                                        Year
                                    </FieldLabel>
                                    <Select items={years}>
                                        <SelectTrigger id="checkout-7j9-exp-year-f59"
                                            className='border-0 border-b-2 border-b-orange-600'

                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {years.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-cvv"
                                        className='text-orange-600 font-normal '

                                    >Time</FieldLabel>
                                    <Input type='time' id="checkout-7j9-cvv" placeholder="123" required
                                        className='border-0 border-b-2 border-b-orange-600'
                                    />
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
                    {/* <Separator className="h-px border-0 bg-transparent
  bg-gradient-to-r from-transparent via-orange-500 to-transparent" /> */}

                    <FieldSet>
                        <FieldGroup>
                            <Field className='mt-8'>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments"
                                    className='text-orange-600 font-normal '
                                >
                                    Comments
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"

                                    placeholder="Add any additional comments"
                                    className='resize-none border-0 h-30 border-b-2 border-b-orange-600'

                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal"
                    className='mt-10'>
                        <Button type="submit"
                            className='w-full py-6 rounded-full text-center text-xl font-bold coloringBg'
                        ><Calendar size={40} /> Book Your Table</Button>

                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
