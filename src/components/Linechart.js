import React, { useState } from "react";
import embed from 'vega-embed';
import Mydata2 from "./Mydata2.json";

export default function Linechart() {
    var vlSpec2 = {
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        width: "container",
        height: 200,
        description: "Break and speed trend",
        data: {
            values: Mydata2,
        },
        mark: "line",
        encoding: {
            x: { "field": "time", "type": "temporal" },
            y: { "field": "value", "type": "quantitative" },
            color: { "field": "symbol", "type": "nominal" }
        }
    };

    const result = embed('#vis2', vlSpec2);

    return (
        <>
            <div id="vis2" style={{ width: "93%" }}></div>;
        </>
    );
}
