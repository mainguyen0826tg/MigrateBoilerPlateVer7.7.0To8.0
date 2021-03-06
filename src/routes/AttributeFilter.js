// (C) 2007-2019 GoodData Corporation
import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import AttributeFilterComponentExample from "./components/AttributeFilterComponentExample";
import AttributeElementsExample from "./components/AttributeElementsExample";
import AttributeFilterExample from "./components/AttributeFilterExample";

const AttributeFilter = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Attribute Filter Component</h1>

                <p>These examples show how to use the Attribute Filter component.</p>

                <hr className="separator" />

                <h2>Attribute Filter</h2>
                <p>
                    You can render a styled dropdown with selectable attribute values using this Attribute Filter
                    component.
                </p>
                <p>
                    Pass a custom onApply function to this component to handle what happens when the user clicks the
                    Apply button.
                </p>
                <AttributeFilterComponentExample/>

                <hr className="separator" />

                <h2>Attribute Filter Example</h2>

                <p>This example shows how to add attribute filter component into a report.</p>

                <AttributeFilterExample/>

                <hr className="separator" />

                <h2>Custom Attribute Filter using Attribute Elements component</h2>
                <p>
                    Pass a custom children function to this component to render the returned data using your custom
                    components.
                </p>
                <p>
                    The children function will receive isLoading state, possible error state, attribute metadata,
                    paging, attribute values and a loadMore function.
                </p>
                <AttributeElementsExample/>
            </div>
        </Page>
    );
};

export default AttributeFilter;
