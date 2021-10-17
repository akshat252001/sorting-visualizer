const bubbleSortBtn = document.getElementById("bubble-sort")
// how do i iterate over .hero using dom.item(nth) method
let heroChildEl = document.getElementById("hero").children

bubbleSortBtn.addEventListener('click', BubbleSort)

function BubbleSort(event) {
  event.preventDefault()
  
  for (let i = 0; i < heroChildEl.length - 1; i++)
  {
    for (let j = 0; j < heroChildEl.length - i - 1; j++)
    {
      //change color while comparing
      heroChildEl.item(j).style.background="red"
      heroChildEl.item(j+1).style.background="red"
    
      if (parseInt(heroChildEl.item(j).style.height) > parseInt(heroChildEl.item(j+1).style.height))
      {
        swap(heroChildEl.item(j),heroChildEl.item(j+1))
      }
      heroChildEl.item(j).style.background="#BDBF13"
      heroChildEl.item(j+1).style.background="#BDBF13"
    }
  }
}


function swap(el1,el2)
{

  const style1 = window.getComputedStyle(el1)
  const style2 = window.getComputedStyle(el2)


  const transform1 = style1.getPropertyValue("height")
  const transform2 = style2.getPropertyValue("height")

  el1.style.height = transform2
  el2.style.height = transform1

}