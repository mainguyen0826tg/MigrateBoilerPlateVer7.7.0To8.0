// (C) 2007-2020 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../ldm";

const columnMeasures = [LdmExt.FranchiseFeesInitialFranchiseFee];

const lineMeasures = [LdmExt.FranchiseFeesAdRoyalty];

const style = { height: 300 };

export const ComboChartExample = () => {
    return (
        <div style={style} className="s-combo-chart">
            <ComboChart
                primaryMeasures={columnMeasures}
                secondaryMeasures={lineMeasures}
                viewBy={Ldm.LocationResort}
            />
        </div>
    );
};

export default ComboChartExample;
