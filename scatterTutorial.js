// First, we will create some constants to define non-data-related parts of the visualization
// Width of our visualization
// Height of our visualization
// Space for x-axis labels
// Space for y-axis labels
// Margin around visualization
// List of data attributes
// Value to plot on x-axis
// Value to plot on y-axis

// Next, we will load in our CSV of data

	// This will define scales that convert values
	// from our data domain into screen coordinates.


	// Next, we will create an SVG element to contain our visualization.


	// Build axes! (These are kind of annoying, actually...)

	// Now, we will start actually building our scatterplot!
		// Select elements
		// Bind data to elements

		// Create new elements if needed

		// Update our selection
			// Give it a class
			// x-coordinate
			// y-coordinate
			// radius
			// tooltip

    // Now, let's select all of our points and change their color
});

// A function to retrieve the next value in the vals list
function getNextVal(val) {
	return vals[(vals.indexOf(val) + 1) % vals.length];
};

// A function to change what values we plot on the x-axis
function setXval(val) {
	// Update xVal
	xVal = val;
	// Update the axis
	xScale.domain([d3.min(data, function(d) { return parseFloat(d[xVal]); })-1,
				   d3.max(data, function(d) { return parseFloat(d[xVal]); })+1])
	xAxis.scale(xScale);
	xAxisG.call(xAxis);
	xLabel.text(xVal);
	// Update the points

};

// A function to change what values we plot on the y-axis
function setYval(val) {
	// Update yVal
	yVal = val;
	// Update the axis
	yScale.domain([d3.min(data, function(d) { return parseFloat(d[yVal]); })-1,
				   d3.max(data, function(d) { return parseFloat(d[yVal]); })+1])
	yAxis.scale(yScale);
	yAxisG.call(yAxis);
	yLabel.text(yVal);
	// Update the points

};
