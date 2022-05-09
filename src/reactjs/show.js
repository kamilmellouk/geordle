import React from "react";

export default
function Show(props) {
    const [hashState, setHash] = React.useState(window.location.hash);

    function hashListenerACB() {
        setHash(window.location.hash);
    }

    function showWasCreatedACB() {
        window.addEventListener("hashchange", hashListenerACB);
        return function showIsTakenDownACB() {
            window.removeEventListener("hashchange", hashListenerACB);
        };
    }
    
    React.useEffect(showWasCreatedACB, []);

    return (
        <div className={hashState === props.hash ? "" : "hidden"}>
            {props.children}
        </div>
    );
}