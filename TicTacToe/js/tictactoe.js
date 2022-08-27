/* This container includes our table and our canvas */
.center-container {
    /*This property sets the width of our container. */
    width: 608px;
    /*This property center our container. */
    margin: 0 auto;
    /* 50px down from top */
    margin-top: 50px;
}

table {
    /*This property collapse table borders into 1 border. */
    border-collapse: collapse;
    /*This hides outer borders on table. */
    border-style: hidden;
    width: 620px;
	margin: 0 auto;
	box-shadow: 5px 4px 15px -2px rgba(0,0,0,0.45);
	border-radius: 10px;
	float: left;
	background-color: #ffffff;
}

td {
    /* This property changes the cursor to the index finger hand when we hover over td elements. */
    cursor: pointer;
    /* This property sets our table border style. */
    border: 4px solid rgba(14, 9, 0, 0.8);
    /* This property removes default padding */
    padding: 0px;
    width: 200px;
    height: 200px;
}

canvas {
    /* This property sets the position of our canvas to the top left corner of our container. */
    position: absolute;
    /* This property places our canvas over the top of our table */
    z-index: 10;
    /* This property makes our canvas invisible */
    pointer-events: none;
}