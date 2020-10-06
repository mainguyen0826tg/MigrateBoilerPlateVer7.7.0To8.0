// (C) 2007-2020 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";

const style = { height: 300 };

export const InsightViewBulletByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-bubble">
            <InsightView insight={Ldm.Insights.BulletChart} />
        </div>
    );
};

export default InsightViewBulletByIdentifierExample;
