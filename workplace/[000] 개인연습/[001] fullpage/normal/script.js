$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        anchors: ['section1', 'section2', 'section3','section4'],
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#ccc' , '#bbb' , '#eee' , '#fff'],
        
        afterLoad: function(anchorLink, index){
            console.log('현재 섹션 번호는?' + index)
        },
        
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log('현재 슬라이드 번호는?' + slideIndex)
        },

	});
    
});