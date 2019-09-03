export default function touchMonitor (touchStatusControl) {
    var startCoords = null
    var secondaryCoords = null  
    var touchControl = "scroll"

    function getSwipeDirection (start, end) {
        let [xStart, yStart] = start
        let [xEnd, yEnd] = end
        let xDelta = xStart - xEnd
        let yDelta = yStart - yEnd
        let xDeltaAbsolute = Math.abs(xDelta)
        let yDeltaAbsolute = Math.abs(yDelta)
           
        if (yDeltaAbsolute >= xDeltaAbsolute) {
            touchStatusControl("scroll")
            touchControl = "scroll"
        } else {
          touchStatusControl("drag")
          touchControl = "drag"
        }
    }
    
    document.addEventListener('touchstart', function(e){
        // console.log("touchstart ", e);
        const { pageX, pageY } = e.touches[0]
        startCoords = [pageX, pageY]
    })
    document.addEventListener('touchmove', handleTouchMove )
    
    document.addEventListener('touchend', function(e){
        startCoords = null
        secondaryCoords = null
        // if(touchControl === "drag") {
        //     setTimeout(() => touchStatusControl("scroll"), 800)
        // }
    })
      
    function handleTouchMove (e) {
        if (secondaryCoords) { return }
        const { pageX, pageY } = e.touches[0]
        secondaryCoords = [pageX, pageY]
        getSwipeDirection(startCoords, secondaryCoords)
    }
    
}