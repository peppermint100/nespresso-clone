import { useState } from "react";
import { Tab } from "../types/Utils";

export const useTabs = (initialIdx: number, allTabs: Array<Tab>) => {
    const [idx, setIdx] = useState(initialIdx);

    return {
        currentTab: allTabs[idx].content,
        setTab: setIdx,
    };
};