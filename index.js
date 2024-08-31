const trigger = document.querySelector("#video_rutube_carousel")
const body = document.querySelector("body")
const dialog = document.createElement("dialog")

if (!trigger) {
    throw new Error("No trigger id found")
}

dialog.style.width = "75%" 

if (screen.width < 500){
dialog.style.width = "85%" 

}

dialog.style.padding = "0"
const iframeSources = trigger.dataset.sources.split(",")

let iFrames = ""

iframeSources.forEach((source)=>{

iFrames += `<li class="splide__slide" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
     src="${source}"
     frameBorder="0" allow="clipboard-write; autoplay" 
     webkitAllowFullScreen mozallowfullscreen 
     allowFullScreen></iframe>
    </li>`

  })


dialog.innerHTML = `<div class="splide" role="group">
<div class="splide__track">
      <ul class="splide__list">
      ${iFrames}
      </ul>
</div>
</div>
`
dialog.style.border = "none"
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })

body.append(dialog)
new Splide( '.splide' ).mount();
trigger.addEventListener("click", handleOpen)

function handleOpen(){
    dialog.showModal()
}
