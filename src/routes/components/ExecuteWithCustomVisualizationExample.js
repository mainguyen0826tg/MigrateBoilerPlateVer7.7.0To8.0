import React from "react";
import { Execute, LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from "recharts";

import * as LdmExt from "../../ldm/ext";

const seriesBy = [
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
    LdmExt.FranchiseFeesOngoingRoyalty,
];

const slicesBy = [LdmExt.monthDate];

const colors = ["rgb(20,178,226)", "rgb(0,193,141)", "rgb(229,77,66)"];

export const ExecuteWithCustomVisualizationExample = () => {
    return (
        <Execute seriesBy={seriesBy} slicesBy={slicesBy}>
            {({ isLoading, error, result }) => {
                if (isLoading) {
                    return <LoadingComponent />;
                }

                if (error) {
                    return (
                        <ErrorComponent
                            message="There was an error getting your execution"
                            description={JSON.stringify(error, null, 2)}
                        />
                    );
                }

                const series = result?.data().series().toArray();
                const slices = result?.data().slices().toArray();

                const bars = series?.map((value, index) => {
                    return (
                        <Bar
                            key={value.id}
                            dataKey={value.id}
                            name={value.measureTitle()}
                            fill={colors[index]}
                        />
                    );
                });

                const data = slices?.map((slice) => ({
                    label: slice.sliceTitles()[0],
                    ...slice.dataPoints().map((p) => p.rawValue),
                }));

                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="label" />
                            <YAxis domain={[0, (dataMax) => dataMax * 1.1]} />
                            <Legend />
                            {bars}
                        </BarChart>
                    </ResponsiveContainer>
                );
            }}
        </Execute>
    );
};

export default ExecuteWithCustomVisualizationExample;
