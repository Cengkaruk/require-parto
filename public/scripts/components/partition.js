define([], function(){
	
	var start = null
	
	function bindGroupEvents(group, rect, handle) {
		group.on('mouseover', function() {
			
			if(group.getStage()) {
	            handle.moveTo(group);
	            handle.show();
	            handle.getLayer().draw();
	            document.body.style.cursor = 'pointer';
			}
		});

 		group.on('mouseout', function() {
	          handle.hide();
	          handle.getLayer().draw();
	          document.body.style.cursor = 'default';
		});

		group.on('dragmove', function() {
			if(start) {
	            var rect = group.get('.rect')[0];
	            rect.setWidth(1000);
				rect.getStage().draw()
	          }
		});

		group.on('dragstart', function() {
			group.moveToTop();
		});
	}
	
	function bindHandleEvents(handle){
		handle.on('mouseover', function() {
			var group = handle.getParent();
			var rect = group.get('.rect')[0];
				start = {
		            groupX: group.getX(),
		            groupY: group.getY(),
		            rectWidth: rect.getWidth(),
		            rectHeight: rect.getHeight()
		          };
			});

			handle.on('mouseout', function() {
				start = null;
			});
	}
	
	var createComponents = function(){
		
		var diskLayer = new Kinetic.Layer()
		var handleLayer = new Kinetic.Layer()
		
		var handle = new Kinetic.Rect({
              width: 32,
              height: 32,
              fill: "blue",
              stroke: 'black',
              strokeWidth: 4,
              draggable: true,
			  
              name: "handle"
		})

		bindHandleEvents(handle)
		
		var group = new Kinetic.Group({
			x : 10,
			y : 10,
		})
		
		var rect = new Kinetic.Rect({
		              x: 10,
		              y: 10,
		              width: 100,
		              height: 50,
		              fill: "red",
		              stroke: 'black',
		              strokeWidth: 4,
		              draggable: true,
		              name: "rect"
		            });
		
		group.add(rect)
		bindGroupEvents(group, rect, handle)
		
		diskLayer.add(group)
		handleLayer.add(handle)
		
		handle.hide()
		
		return {
			disk : diskLayer,
			handle : handleLayer
		}
	}
	
	return {
		createComponents : createComponents
	}
	
	
})