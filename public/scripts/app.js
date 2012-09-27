require.config({
  paths: {
    "kinetic": "lib/kinetic-v4.0.1.min",
	"jquery": "lib/jquery-1.8.2.min",
	"hogan" : "hogan-2.0.0",
	"lodash" : "lodash.min"
  }
});

require(["kinetic"], function(Stage, Partition){
	
	var stage = new Kinetic.Stage({
	          container: "container",
	          width: 578,
	          height: 200
	        });
	
	var background = new Kinetic.Layer();
	var partition = new Kinetic.Layer();
	var buttons = new Kinetic.Layer();
	
		var rect = new Kinetic.Rect({
			x: 10,
			y: 10,
			width: 200,
			height: 50,
			fill: 'white',
			stroke: 'gray',
			strokeWidth: 2,
			cornerRadius: 5,
			lineJoin : "round",
			opacity: 1.0
		});
		
		rect.on('mouseover', function(){
			rect.getLayer().draw()
		})
		
		rect.on('mouseout', function(){
			rect.getLayer().draw()
		})
		
		var line = new Kinetic.Rect({
			x: rect.getX(),
			y: 11,
			width: 100,
			height: 48,
			fill: 'gray',
			lineJoin : "round",
			opacity: 0.5,          
		});
		
		var line2 = new Kinetic.Rect({
			x: line.getX() + line.getWidth(),
			y: 11,
			width: 2,
			height: 48,
			fill: 'black',
			lineJoin : "round",
			opacity: 1.0,
			draggable: true,
			dragConstraint: 'horizontal',
			dragBounds: {
				left: rect.getX() + 5,
				right: rect.getX() + rect.getWidth() - 7
			}
          
		});
		
		
		line2.on('dragmove', function(){
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
		})
		
		
		
		line2.on('mouseover', function(){
			//line2.setWidth(5)
			//line2.setX(line2.getX() - 2)
			line2.getLayer().draw()
			
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
			
			document.body.style.cursor = 'pointer';
            
			
		})
		
		line2.on('mouseout', function(){
			//line2.setWidth(2)
			//line2.setX(line2.getX() + 2)
			rect.getLayer().draw()
			
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
			
			document.body.style.cursor = 'default';
            
			
		})
		
		
		
		
		background.add(rect)
		background.add(line)
		background.add(line2)
		stage.add(background)
		

	        var imageObj = new Image();
	
	        imageObj.onload = function() {
	          var yoda = new Kinetic.Image({
	            x: rect.getX() + (rect.getWidth()/2 - imageObj.width/2), 
	            y: rect.getY() + (rect.getHeight()/2- imageObj.height/2),
	            image: imageObj,
	            width: imageObj.width,
	            height: imageObj.height,
	          });

	          // add the shape to the layer
	          buttons.add(yoda);
	          
	          // add the layer to the stage
	          //stage.add(buttons);

	        };
	        imageObj.src = "images/plusButton.png";
	
	
	
	/*var stage = Stage.initStage(400, 400, 'container')
	var layer = new Kinetic.Layer()
	layer.add(Partition.createRect())
	
	var image = new Image()
	image.src = "images/minusButton.png"
	
	var button = new Kinetic.Image({
		image : image,
		x: 10,
		y: 10,
		draggable: true
	})
	
	button.createImageBuffer()
	layer.add(button)
	
	stage.add(layer)
	
	/*
	var buttons = {
		plus : {
			source : ""
		}
	}*/
	
})

/*
require(["kinetic","components/partition",  "components/button"], function(kinetic, partition, button){
	
	var stage = new Kinetic.Stage({
		container: 'container',
		width: 500,
		height: 200
	})
	
	var disk = partition.createComponents().disk
	var handle = partition.createComponents().handle
	
	stage.add(disk)
	stage.add(handle)

	
	/*
	var disk = partition.disk().layer
	var button = button.plus().layer
	
	stage.add(disk)
	stage.add(button)*/
	
	
	/*
	var stage = new Kinetic.Stage({
	          container: "container",
	          width: 578,
	          height: 200
	        });
	
	var background = new Kinetic.Layer();
	var partition = new Kinetic.Layer();
	var buttons = new Kinetic.Layer();
	
		var rect = new Kinetic.Rect({
			x: 10,
			y: 10,
			width: 200,
			height: 50,
			fill: 'white',
			stroke: 'gray',
			strokeWidth: 2,
			cornerRadius: 5,
			lineJoin : "round",
			opacity: 1.0
		});
		
		rect.on('mouseover', function(){
			rect.getLayer().draw()
		})
		
		rect.on('mouseout', function(){
			rect.getLayer().draw()
		})
		
		var line = new Kinetic.Rect({
			x: rect.getX(),
			y: 11,
			width: 100,
			height: 48,
			fill: 'gray',
			lineJoin : "round",
			opacity: 0.5,          
		});
		
		var line2 = new Kinetic.Rect({
			x: line.getX() + line.getWidth(),
			y: 11,
			width: 2,
			height: 48,
			fill: 'black',
			lineJoin : "round",
			opacity: 1.0,
			draggable: true,
			dragConstraint: 'horizontal',
			dragBounds: {
				left: rect.getX() + 5,
				right: rect.getX() + rect.getWidth() - 7
			}
          
		});
		
		
		line2.on('dragmove', function(){
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
		})
		
		
		
		line2.on('mouseover', function(){
			//line2.setWidth(5)
			//line2.setX(line2.getX() - 2)
			line2.getLayer().draw()
			
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
			
			document.body.style.cursor = 'pointer';
            
			
		})
		
		line2.on('mouseout', function(){
			//line2.setWidth(2)
			//line2.setX(line2.getX() + 2)
			rect.getLayer().draw()
			
			line.setWidth(line2.getX() - rect.getX())
			line.getLayer().draw()
			
			document.body.style.cursor = 'default';
            
			
		})
		
		
		
		
		background.add(rect)
		background.add(line)
		background.add(line2)
		stage.add(background)
		

	        var imageObj = new Image();
	
	        imageObj.onload = function() {
	          var yoda = new Kinetic.Image({
	            x: rect.getX() + (rect.getWidth()/2 - imageObj.width/2), 
	            y: rect.getY() + (rect.getHeight()/2- imageObj.height/2),
	            image: imageObj,
	            width: imageObj.width,
	            height: imageObj.height,
	          });

	          // add the shape to the layer
	          buttons.add(yoda);
	          
	          // add the layer to the stage
	          //stage.add(buttons);

	        };
	        imageObj.src = "images/plusButton.png";
	
	
	
	/*var stage = Stage.initStage(400, 400, 'container')
	var layer = new Kinetic.Layer()
	layer.add(Partition.createRect())
	
	var image = new Image()
	image.src = "images/minusButton.png"
	
	var button = new Kinetic.Image({
		image : image,
		x: 10,
		y: 10,
		draggable: true
	})
	
	button.createImageBuffer()
	layer.add(button)
	
	stage.add(layer)
	

	var buttons = {
		plus : {
			source : ""
		}
	}
	
})*/