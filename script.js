document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js '; 

    let el = document.createElement('div');
document.body.appendChild(el);

eruda.init({
    container: el,
    tool: ['console', 'elements']
});
    eruda.get().config.set('displaySize', 100);
    eruda.remove('settings');
    
    function numberSum(N) { 	
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total + " DATA COLECTED✓";

}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 50000;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

for (var i = 0; i < 10; i++) {
  console.log(getRandomRgb());
}
var points = new Array(100);
        for (var i = 1; i < 100; i++) {
            points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
        }

        for (var i = 0; i < points.length; i++) {
            
        }
        function gzc() {
        var hehe = Math.floor(Math.random() * 572828281781718718171828282882828272727262626728887818282818181717278281817181818182928289292299292929271761156119999996)+ " DATA COLECTED✓";
        }
        var uehs = gzc() + " DATA COLECTED✓"
        
        function greet() {
        	
    console.log("%c" + numberSum(setInterval(gzc, 0)), 'background:' + getRandomRgb() + '; color:' + getRandomRgb() + '');
}

setInterval(greet, 10);



var themeSwitcher = document.getElementById('theme')
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  themeSwitcher.classList.toggle("dark")
})