import React from "react";
import { useReach, useClasses } from "../../hooks";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));


const WaitingForAttacher = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contract.ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    };

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }> Waiting for Attacher to join...</h2>
            <h3 className={ useClasses() }> Please give them this contract info:</h3>
            <pre className={ useClasses() }>{ contract.ctcInfoStr }</pre>
            <button className={ useClasses() } onClick={ (e) => copyToClipboard(e.currentTarget.value) }>
                Copy to clipboard
            </button>
        </div>
    );
};

export default WaitingForAttacher;