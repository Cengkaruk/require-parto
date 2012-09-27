define([], function(){
	
	var plus = function(){
		var layer = new Kinetic.Layer()
		var box = new Kinetic.Rect({
			x : 10,
			y : 10,
			width : 32,
 			height : 32,
			fill : "red",
			stroke : "black",
			strokeWidth : 4
		})
		
		layer.add(box)	
		
		return {
			layer : layer,
			box : box
		}
	}
		
	return {
		plus : plus
	}
	
})