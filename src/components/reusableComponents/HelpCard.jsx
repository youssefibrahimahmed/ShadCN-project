import {
    Card,
    CardContent,
} from "@/components/ui/card"

export function HelpCard({ q, ans }) {

    return (
        <Card
            className="mx-auto bg-zinc-900 
            text-white pt-0 w-full border max-h-fit
            border-gray-400/20 lg:max-w-full
            hover:border-orange-700 hover:-translate-y-2
            transition duration-300">
            <CardContent className="">
                <div className="-mx-(--card-spacing) max-h-48 space-y-4 px-(--card-spacing) pt-4  leading-relaxed py-10">
                    <p className="text-[18px] font-semibold">{q}</p>
                    <p className="w-[90%] text-gray-400/70 text-lg">{ans}</p>
                </div>
            </CardContent>

        </Card>
    )
}
