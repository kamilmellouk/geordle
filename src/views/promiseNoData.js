import React from "react"

function promiseNoData(state) {
    if (!state.promise)
        return <div>no data</div>;

    if (!state.data && !state.error)
        return <img src="https://cutewallpaper.org/21/loading-gif-transparent-background/CBP-Portal.gif" class="loading"></img>;

    if (!state.data && state.error)
        return <div class="loading">{state.error}</div>;

    if (state.data && !state.error)
        return false;
}

export default promiseNoData;