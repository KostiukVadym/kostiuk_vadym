//==========//

document.addEventListener('click', handleAdd)

function numberGoods(val) {
  const goods = document.getElementById('goods')
  if (+goods.innerHTML === 0) {
    let baskInfo = (goods.innerHTML = val)
    return (val = 0)
  } else {
    const prevVal = +goods.innerHTML
    goods.innerHTML = prevVal + val
    return (val = 0)
  }
}

function handleBasketInfo(res, val) {
  const total = document.getElementById('total')

  if (+total.innerHTML === 0) {
    let baskInfo = (total.innerHTML = res)
    return (val = 0)
  } else {
    const prevVal = +total.innerHTML
    total.innerHTML = prevVal + res
    return (val = 0)
  }
}

function handleAdd(e) {
  const { target } = e
  if (!target.classList.contains('product-box__btn')) {
    return
  }

  const inpVal = +target.previousElementSibling.childNodes[1].value
  const price = parseInt(target.parentElement.childNodes[1].innerText)
  const b = inpVal
  const result = price * b
  handleBasketInfo(result, inpVal)
  numberGoods(inpVal)
  const empInp = target.previousElementSibling.childNodes[1]
  return (empInp.value = 1)
}

document.addEventListener('click', handleClick)

function filterDishes(val, id, arr) {
    if (!id) {
        return
    }else{
      switch (val) {
        case '1':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]

            if (element.dataset.title !== 'breakfast') {
              element.classList.add('hidden')
            }
          }
          break
        case '2':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (element.dataset.title !== 'first_dishes') {
              element.classList.add('hidden')
            } else {
              let sortedArr = []
              sortedArr.push(element)
              console.log('arr', sortedArr)
              element.classList.remove('hidden')
            }
          }
          break
        case '3':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (element.dataset.title !== 'garnish') {
              element.classList.add('hidden')
            } else {
              element.classList.remove('hidden')
            }
          }
          break

        case '30':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (
              !element.classList.contains('hidden') &&
              parseInt(element.dataset.price) >= 30
            ) {
              element.classList.remove('filter_by_price')
              element.classList.add('filter_by_price')
            }
          }
          break

        case '50':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (
              !element.classList.contains('hidden') &&
              parseInt(element.dataset.price) >= 50
            ) {
              element.classList.remove('filter_by_price')
              element.classList.add('filter_by_price')
            }
          }
          break

        case '100':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (
              !element.classList.contains('hidden') &&
              parseInt(element.dataset.price) >= 100
            ) {
              element.classList.remove('filter_by_price')
              element.classList.add('filter_by_price')
            }
          }
          break

        case '150':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (
              !element.classList.contains('hidden') &&
              parseInt(element.dataset.price) >= 150
            ) {
              element.classList.remove('filter_by_price')
              element.classList.add('filter_by_price')
            }
          }
          break

        case '10':
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            element.classList.remove('filter_by_price')
          }

        case '0':
          if (id === 'title_filter') {
            for (let i = 0; i < arr.length; i++) {
              const element = arr[i]
              element.classList.remove('hidden')
            }
          }

        default:
      }
    }
}

function handleClick(e) {
  const { target } = e
  const dishes = document.querySelectorAll('.product-box__item')

  filterDishes(target.value, target.id, dishes)
}

const oder = document.getElementById('oder');

oder.addEventListener('click', handleOder);

function handleOder() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('modal_hidden')
    // document.body.style.overflow='hidden'
}

document.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    if (target.id !== 'myform') {
        return 
    }

    const nameEl = target.name;
    if (!nameEl.value.trim().length) {
        alert('Enter name')
        return;
    }

    const emailEl = target.email;
     if (!emailEl.value.trim().length) {
       alert('Enter email')
       return
     }
    
    alert('Thanks')
    const modal = document.querySelector('.modal')
    modal.classList.add('modal_hidden')
    const total = document.getElementById('total')
    total.innerHTML = '';
    const goods = document.getElementById('goods')
    goods.innerHTML = '';
}

