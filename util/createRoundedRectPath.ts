function createRoundedRectPath(x: number, y: number, width: number, height: number, radius: number, xStart?: number) {
    return (
        // Move to position, offset by radius in x direction
        "M" + (xStart || (x + radius)) + "," + y 
        // Draw a horizontal line to the top right curve start
        + "H" + (width - radius) 
        // Draw the top right corner curve
        + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
        // Draw a vertical line to the bottom right corner
        + "v" + (height - 2 * radius) 
        // Draw the bottom right corner curve
        + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius 
        // Draw a horizontal line to the bottom left corner
        + "h" + (2 * radius - width) 
        // Draw the bottom left corner
        + "a" + -radius + "," + -radius + " 0 0 1 " + -radius + "," + -radius 
        // Draw a vertical line to the top left corner
        + "v" + (2 * radius - height) 
        // Draw the top left corner
        + "a" + radius + "," + -radius + " 0 0 1 " + radius + "," + -radius
        // Close the shape
        + "z"
    );
}

export default createRoundedRectPath;