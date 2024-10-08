import { sleep } from "./helpers/util.js";
import { SearchingAlgorithms } from "./helpers/searchingAlgorithms.js";
let nBars2=10;

let numbersBars2 = document.getElementById('numbersBars2')

const stage2 = document.getElementById('stage2')
stage2.style.width = `${nBars2 * 30}px`

const selectAlgorithm2= document.getElementById('selectAlgorithm2')
const generateBtn2 = document.getElementById('generateBtn2')
const target=document.getElementById('target')
const solveBtn2 = document.getElementById('solveBtn2')

let bars2 = []
let barsDivs2 = []

const searchingAlgorithms = new SearchingAlgorithms({})

const start = () => {
  stage2.innerHTML = ''

  bars2 = Array(nBars2).fill(0).map(_ => {
    return {
      width: 20,
      height: Math.floor(Math.random() * 200) + 1
    }
  })
if(selectAlgorithm2.selectedIndex==1)
{
  bars2=bars2.sort((a,b)=>a.height-b.height);
}
  barsDivs2 = []

  for (let i = 0; i < bars2.length; i++) {
    const bar2 = document.createElement('div')
    bar2.style.width = `${bars2[i].width}px`
    bar2.style.height = `${bars2[i].height}px`
    bar2.style.left = `${5 + i * 30}px`
    bar2.textContent=bars2[i].height;
    bars2[i] = { ...bars2[i], position: i }
    bar2.classList.add('bar')
    barsDivs2.push(bar2)
    stage2.appendChild(bar2)
  }
}

start()

async function swapBars2(barsDivs2, i) {
  barsDivs2[i].classList.add('activate2')
  await sleep(1000)
  barsDivs2[i].classList.remove('activate2')
}
async function swapBars3(barsDivs2,i)
{
  barsDivs2[i].classList.add('activate');
  await sleep(1000);
  barsDivs2[i].classList.remove('activate');
}
const algorithms2 = [
  searchingAlgorithms.linearSearch,
  searchingAlgorithms.binarySearch
]


const solve = async () => {
    const array = structuredClone(bars2.map(el => el.height));
    const targetValue = parseInt(target.value, 10);

    const selection = algorithms2[selectAlgorithm2.selectedIndex](array, targetValue);
        // Activate the bars based on the selection
    for (let i = 0; i < selection.length-1; i++) {
        await swapBars2(barsDivs2, selection[i]); // Activate the bars being checked
    }
    await swapBars3(barsDivs2,selection[selection.length-1]);
    // If the last checked index is not out of bounds, activate the bar for the last index
    
};



generateBtn2.addEventListener('click', () => {
  nBars2 = parseInt(numbersBars2.value, 10)
  stage2.style.width = `${nBars2 * 30}px`
  start()
})

solveBtn2.addEventListener('click', () => {
  solve()
})
selectAlgorithm2.addEventListener('change',()=>
{
  start();
})