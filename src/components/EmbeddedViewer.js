import React from 'react';

export default function EmbeddedViewer() {
    const embeddedViewerStyle = {
        width: "300px",
        height: "400px"
    }
    return (
        <div id="viewerCanvas" style={embeddedViewerStyle}></div>
    );
}