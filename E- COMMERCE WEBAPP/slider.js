//HERO CAROUSEL
const slider1 = document.querySelector("#glide1");
if(slider1){
    new Glide(slider1, {
 type: 'casousel',
 startAt: 0,
 autoplay:3000,
 gap: 0,
 hoverpause: true,
 perView: 1,
 AnimationDuration: 800,
 AnimationTimingFunc: "linear"


 }).mount()
}
