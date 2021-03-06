/****************************************************************************************
Avaiable functions for usage in the uiController object
================================================================
uiController.bubbleTranslate(x,y, id)
    This function will translate the bubble from the middle of the screen.
    The center of the screen is considered (0,0).

    Inputs:
        x,y
        Translates the bubble x px right and y px up. Negative values are accepted
        and translate the bubble in the opposite direction.

        id
        ID of bubble that needs to be moved

uiController.bodyDimensions()
    Returns the width and height of the body (without the toolbar)

    Return:
        Returns an object with the following fields
        {
            width:      [Returns the width of the body],
            height:     [Returns the width of the body]
        }

ID of HTML elements that are of interest
==============================================================
dark-bubble
    ID of the dark green bubble

pale-bubble
    ID of the pale green bubble

message-area
    ID of text area at the bottom of the screen, just on top on the "Feeze" button

freeze-button
    ID of the "Freeze" button
****************************************************************************************/

function SpiritLevelProcessor()
{
    var self = this;

    var uiController = null;

    self.initialise = function(controller)
    {
        uiController = controller;

        window.addEventListener("devicemotion", handleMotion);
    }
    
    function handleMotion(event)
    {
        var Ax = event.accelerationIncludingGravity.x;
        var Ay = event.accelerationIncludingGravity.y;
        var Az = event.accelerationIncludingGravity.z;

        movingAverage(50,[Ax,Ay,Az]);
    }
    
    var storage = new Array();
    
    function movingAverage(buffer,newValue){
        if (storage.length >= buffer){
            storage.shift();
        }
        
        
        storage.push(newValue);
        
        var totals = [0,0,0];
        for(var i=0; i < newValue.length ;i++){
            for( var j=0; j < storage.length ;j++){
                totals[i] += storage[j][i];
            }
        }
        var smoothA = new Array(3);
        for(i=0;i<totals.length;i++){
            smoothA[i] = totals[i]/buffer;
        }
        console.log(smoothA);
    }

                // This function handles the Moving Average Filter

                // Input:
                //      buffer
                //      The buffer in which the function will apply the moving to.

                //      newValue
                //      This should be the newest value that will be pushed into the buffer

                // Output: filteredValue
                //      This function should return the result of the moving average filter

    function displayAngle(x,y,z)
    {
        // This function will handle the calculation of the angle from the z-axis and
        // display it on the screen inside a "div" tag with the id of "message-area"

        // Input: x,y,z
        //      These values should be the filtered values after the Moving Average for
        //      each of the axes respectively
    }

    self.freezeClick = function()
    {
        // ADVANCED FUNCTIONALITY
        // ================================================================
        // This function will trigger when the "Freeze" button is pressed
        // The ID of the button is "freeze-button"
    }

    function movingMedian(buffer, newValue)
    {
      // ADVANCED FUNCTIONALITY
      // =================================================================
      // This function handles the Moving Median Filter
      // Input:
      //      buffer
      //      The buffer in which the function will apply the moving to.

      //      newValue
      //      This should be the newest value that will be pushed into the buffer

      // Output: filteredValue
      //      This function should return the result of the moving average filter
    }
}
