/*console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);*/

/*Хоть получившийся код и длиннее, он не так сильно будет нагружать браузер 
и в дальнейшем, если потребуется, то будет гораздо легче сменить значение id на какое-нибудь другое */

let image = document.querySelector('#image');
image.src = 'avatar.png';
image.width  = '300';
image.height  = '500';