import React from 'react';

export default props => (
    <div className="diagram-wrap">
        <div className="diagram">
            <div className="d-row first">
                <div className="cell label"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"><div className="note">&nbsp;</div></div>
                <div className="cell fret"></div>
            </div>
            <div className="d-row">
                <div className="cell label"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"><div className="note">&nbsp;</div></div>
                <div className="cell fret"></div>
            </div>   
            <div className="d-row">
                <div className="cell label"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
            </div>
            <div className="d-row">
                <div className="cell label"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
            </div>
            <div className="d-row">
                <div className="cell label"></div>
                <div className="cell fret"></div>
                <div className="cell fret"><div className="note">&nbsp;</div></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
            </div>
            <div className="d-row last">
                <div className="cell label"><div className="note openstring">&#9737;</div></div>
                <div className="cell fret"></div>
                <div className="cell fret"></div>
                <div className="cell fret"><div className="note">&nbsp;</div></div>
                <div className="cell fret"></div>
            </div>
            <div className="d-row">
                <div className="cell label index"></div>
                <div className="cell fret index">1</div>
                <div className="cell fret index">2</div>
                <div className="cell fret index">3</div>
                <div className="cell fret index">4</div>
            </div>
        </div>
    </div>
);