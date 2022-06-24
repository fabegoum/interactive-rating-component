document.addEventListener("DOMContentLoaded", function(event) { 
 	var selected = 0; 
	function attachEvent(){
		var elt = document.getElementsByClassName('choix');
		for(let t of elt){
			t.addEventListener('click', function(e){
				console.log(e.target.innerHTML);
				selected = e.target.innerHTML;
				for(let l of elt){
					l.classList.remove('active');	
					l.classList.remove('menter');	
					l.classList.remove('mleave');	
				}
				e.target.classList.add('active');
			});
		}
	}
	attachEvent();

	function boutttton(){
		var a =document.getElementsByClassName('choix');
		for(let t of a){
			t.addEventListener('mouseenter', function(e){
				if (!e.target.classList.contains('active')) {
					e.target.classList.remove('mleave');
					e.target.classList.add('menter');
				}
			});
			t.addEventListener('mouseleave',function(e){
				if (!e.target.classList.contains('active')) {
					e.target.classList.remove('menter');
					e.target.classList.add('mleave');
				}
		});
		}
	}
		boutttton();

	function valid (){
		var a=document.getElementById('validation');
		a.addEventListener('mouseenter',function(e){
			e.target.classList.remove('nbactive');
			e.target.classList.add('bactive');
		});
		a.addEventListener('mouseleave',function(e){
			e.target.classList.remove('bactive');
			e.target.classList.add('nbactive');
		});
		
		var b=document.getElementsByClassName('container');
		b[0].addEventListener('click',function(e){
			// e.target.classList.add('cache');
		});

	}
	valid();


















});
