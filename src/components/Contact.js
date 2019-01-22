import React from "react";
import Helmet from "react-helmet";

const Contact = () => (
    <div>
        <h2>This is the contact page</h2>
        <img src="https://styla-stage-eu.imgix.net/8810dd396300a965b9e5c966a1ddcfbe?q=50&dpr64=Mg==&w=732&h=487&fit64=Y3JvcA==&crop64=ZmFjZXMsZWRnZXM=&auto=format" />
        <Helmet>
            
            <title>Contact Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
    </div>
);

export default Contact;
