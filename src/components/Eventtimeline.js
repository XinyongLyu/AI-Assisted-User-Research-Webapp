import React, { useState } from "react";
import embed from 'vega-embed';
import Mydata from "./Mydata.json";

export default function Eventtimeline() {
    var vlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
        width: "container",
        height: 200,
        description: "A simple bar chart with ranged data (aka Gantt Chart).",
        data: {
            values: Mydata,
        },
        mark: "bar",
        encoding: {
            "y": { "field": "task", "type": "ordinal" },
            "x": { "field": "start", "type": "quantitative" },
            "x2": { "field": "end" }
        }
        
    };

    const result = embed('#vis', vlSpec);

    return (
        <>
    
            <div id="vis" style={{ width: "93%" }}></div>;
        </>
    );
}
