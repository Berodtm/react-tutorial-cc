import { children } from "react";

function FlexContainer({children }) {
    return <div className="flex flex-wrap gap-4">
        {children}
    </div>
}
export default FlexContainer;