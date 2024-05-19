<script>
  export let data

  
  // var items = [
  //   {
  //     share:'https://www.pexels.com/photo/scenic-photo-of-forest-with-sunlight-1757363/',
  //     'img-src':'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?w=640',
  //     'img-caption':'Lorem ipsum',
  //     title:'Lorem ipsum',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  //   },
  //   {
  //     share:'https://www.pexels.com/photo/brown-dessert-273935/',
  //     'img-src':'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?w=640',
  //     'img-caption':'Et nobis cumque',
  //     title:'Et nobis cumque',
  //     desc:'Et nobis cumque ad odio, consequatur dignissimos.'
  //   },
  //   {
  //     share:'https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/',
  //     'img-src':'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?w=640',
  //     'img-caption':'Cum totam',
  //     title:'Cum totam',
  //     desc:'Cum totam recusandae veritatis quod.'
  //   },
  //   {
  //     share:'https://www.pexels.com/photo/black-and-white-photography-of-trees-on-a-foggy-day-3454270/',
  //     'img-src':'https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?w=640',
  //     'img-caption':'Cupiditate veniam',
  //     title:'Cupiditate veniam',
  //     desc:'Cupiditate veniam quam aperiam placeat deserunt.'
  //   },
  // ]

  // document.querySelector('#grid').innerHTML = items.map((item) => `
  // <div class="">
  //   <div class="rounded-md overflow-clip cursor-pointer shadow-md hover:shadow-xl" onClick="">
  //     <div class="overflow-clip">
  //       <img class="hover:scale-110 transition" src="${item['img-src']}" alt="${item['img-caption']}">
  //     </div>
  //     <div class="p-5 bg-white">
  //       <h3 class="text-2xl mb-5">${item.title}</h3>
  //       <p class="text-neutral-500">${item.desc}</p>
  //     </div>
  //   </div>
  // </div>
  // `).join('')

  // document.querySelector('#slide').firstElementChild.innerHTML = items.map((item) => `
  // <div class="flex-none w-full snap-center">
  //   <img class="max-w-full" src="${item['img-src']}" alt="${item['img-caption']}">
  // </div>
  // `).join('')

  // Light box cards
  
  // var slideElem = document.querySelector('#slide')
  // var closeElem = document.querySelector('#close')
  // var gridElem = document.querySelector('#grid')
  
  // closeElem.addEventListener('click', function() {
  //   slideElem.close()
  // })
  // gridElem.addEventListener('click', function() {
  //   slideElem.showModal()
  // })

</script>

{data.lang}

<div class="bg-neutral-100"></div>

<dialog class="" id="slide">
  <div class="flex overflow-x-auto snap-x"></div>
  <button class="text-black absolute top-0 right-0" id="close">
    <!-- x-mark outline https://heroicons.com/ -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</dialog>

<div class="text-center">
	<a class="hover:underline underline-offset-2" href="https://zummon.page/" target="_blank">Made by zummon</a>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 xl:gap-10 p-6 md:p-8 xl:p-10 mx-auto max-w-2xl" id="grid"></div>

