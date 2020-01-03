import React from 'react';

import Diagram from './Diagram';

export default props => (
    <div className="container-fluid">
        <div className="row justify-content-center mt-5">
            <div className="col-auto">
                <div className="chord-box">
                    <Diagram/>
                </div>
            </div>
        </div>
    </div>
);