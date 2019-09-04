export default function touchMonitor (touchStatusControl) {
    var startCoords = null
    var secondaryCoords = null  

    function getSwipeDirection (start, end) {
        let [xStart, yStart] = start
        let [xEnd, yEnd] = end
        let xDelta = xStart - xEnd
        let yDelta = yStart - yEnd
        let xDeltaAbsolute = Math.abs(xDelta)
        let yDeltaAbsolute = Math.abs(yDelta)
   
        if (yDeltaAbsolute >= xDeltaAbsolute) {
            touchStatusControl("scroll")
            document.getElementById("test").classList.remove("lock")
        } else {
          touchStatusControl("drag")
            document.getElementById("test").classList.add("lock")
        }
    }
    
    document.addEventListener('touchstart', function(e){
        const { pageX, pageY } = e.touches[0]
        startCoords = [pageX, pageY]
    })
    document.addEventListener('touchmove', handleTouchMove )
    
    document.addEventListener('touchend', function(e){
        startCoords = null
        secondaryCoords = null
        document.getElementById("test").classList.remove("lock")
    })
      
    function handleTouchMove (e) {
        if (secondaryCoords) { return }
        const { pageX, pageY } = e.touches[0]
        secondaryCoords = [pageX, pageY]
        getSwipeDirection(startCoords, secondaryCoords)
    }
    
}