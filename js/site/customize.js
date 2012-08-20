$(function(){
	$('.editables').editables(
		{ 
          beforeEdit: function(field){
            field.val(this.text());
          },
          beforeFreeze: function(display){ 
            display.text(this.val());
          },
          onEdit: function(){
            //console.log('"on edit"', this);
          },
          onFreeze: function(){
            console.log('"on freeze"', this);
          }
        }
	);
});


