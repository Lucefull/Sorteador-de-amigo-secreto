import { Footer } from "../Footer/Footer"
import { CardContent } from "./CardStyle"

export const Card: React.FC =({children})=>{
    return(
        <CardContent>
            {children}
        </CardContent>
    )
}