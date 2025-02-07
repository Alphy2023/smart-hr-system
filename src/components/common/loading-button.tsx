
import {ButtonProps,Button}  from "@/components/ui/button"
import {Loader2} from "lucide-react"
import {cn} from "@/lib/utils"


interface LoadingButtonProps extends ButtonProps {
    loading?:boolean;
}

export const LoadingButton=({
    loading,
    disabled,
    className,
    ...props
}:LoadingButtonProps)=>{

    return (
        <Button
        disabled={disabled || loading}
        className={cn("flex items-center gap-2",className)}
        {...props}
        >
            {loading ?<Loader2 className="size-5 animate-spin-fast"/> : (
                <>
                    {props.children}
                </>
            )}
        </Button>
    )
}

