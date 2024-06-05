import { children } from "react";

function FlexContainer({children }) {
    return <div className="gap-4">
        {children}
    </div>
}
export default FlexContainer;