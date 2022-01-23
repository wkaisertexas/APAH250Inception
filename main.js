let mosaic = require('mosaic-node-generator');
let glob = require('glob');

let i = 0;

let imgs;
glob("imgs/*", (er, files) => {
	imgs = files	
	
	for(let j = 0; j < imgs.length; j++){
	setTimeout(get_img, 40000*j)
	}
});

function get_img(){
	// Gets the image
	if(i > 0){
	mosaic.mosaic(imgs[i], 'imgs', 30, 20, 32, 27, 'out', null, true);
	}
	else{
        mosaic.mosaic(imgs[i], 'imgs', 30, 20, 32, 27, null, 'out', true);
	}
	i++;
}
