import React, { useEffect, useState } from "react"
import Iframe from "./Iframe";

export default function IframesList({number}){

    return (
        <React.Fragment>
            { [...Array(number)].map((e, i) => <Iframe />)}
        </React.Fragment>
    )
}