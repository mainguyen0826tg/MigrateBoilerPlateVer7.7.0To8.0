// (C) 2020 GoodData Corporation
import React, { Component } from "react";

import "@gooddata/sdk-ui-geo/styles/css/main.css";

import { MAPBOX_TOKEN } from "../../constants/fixtures";
import { GeoPushpinChart } from "@gooddata/sdk-ui-geo";
import { CUSTOM_COLOR_PALETTE } from "../../constants/colors";
import {
    tooltipTextAttribute,
    sizeMeasure,
    locationAttribute,
    segmentByAttribute,
    colorMeasure,
    attributeUriPredicate,
} from "../../ldm/geoModel";
import { HeaderPredicates } from "@gooddata/sdk-ui";

const colorMapping = [
    {
        predicate: attributeUriPredicate, // find attribute item by uri
        color: {
            type: "guid",
            value: "03",
        },
    },

    {
        predicate: HeaderPredicates.attributeItemNameMatch("Hawaii"),
        color: {
            type: "rgb",
            value: { r: 162, g: 37, b: 34 },
        },
    },
];

export class GeoPushpinChartConfigurationColorMappingExample extends Component {
    render() {
        const geoConfig = {
            tooltipText: tooltipTextAttribute,
            mapboxToken: MAPBOX_TOKEN,
            colorPalette: CUSTOM_COLOR_PALETTE,
            colorMapping,
        };

        return (
            <div
                style={{ height: "500px", position: "relative" }}
                className="s-geo-pushpin-chart-configuration-custom-color"
            >
                <GeoPushpinChart
                    location={locationAttribute}
                    size={sizeMeasure}
                    color={colorMeasure}
                    segmentBy={segmentByAttribute}
                    config={geoConfig}
                    onZoomChanged={this.onZoomChanged}
                    onCenterPositionChanged={this.onCenterPositionChanged}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationColorMappingExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationColorMappingExample onError", ...params);
    }

    onZoomChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationColorMappingExample onZoomChanged", ...params);
    }

    onCenterPositionChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log(
            "GeoPushpinChartConfigurationColorMappingExample onCenterPositionChanged",
            ...params
        );
    }
}

export default GeoPushpinChartConfigurationColorMappingExample;
