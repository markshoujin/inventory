export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Inventory</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer></script>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
<link rel="stylesheet" href="styles-YGA5TJJ7.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-YGA5TJJ7.css"></noscript></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <!-- Angular Bootstraps the app here -->
  <app-root ng-version="19.2.1" ngh="3" ng-server-context="ssg"><div class="flex flex-col h-screen"><div><app-navbar ngh="0"><nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button type="button" aria-controls="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-expanded="false" jsaction="click:;"><span class="absolute -inset-0.5"></span><span class="sr-only">Open main menu</span><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg><!----><!----></button></div><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex shrink-0 items-center"><img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company" class="h-8 w-auto"></div><div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><a href="#" aria-current="page" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a></div></div></div></div></div><!----><div class="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 transform transition-transform duration-300 ease-in-out -translate-x-full"><div class="flex justify-end p-4"><button class="text-gray-300 hover:text-white" jsaction="click:;"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></button></div><div class="flex flex-col items-center space-y-4 p-6"><a href="#" class="text-white text-xl">Dashboard</a><a href="#" class="text-white text-xl">Team</a><a href="#" class="text-white text-xl">Projects</a><a href="#" class="text-white text-xl">Calendar</a></div></div></nav></app-navbar></div><div class="flex flex-row w-full"><router-outlet></router-outlet><!----></div><div class="flex flex-col h-screen"><div><app-main-ui ngh="1"><div class="w-full bg-gray-900 flex items-center justify-center min-h-full p-2"><div class="container max-w-6xl"><div class="bg-gray-900 rounded-xl shadow-md overflow-hidden"><div class="p-6 border-b border-gray-200"><div class="flex flex-col md:flex-row md:items-center md:justify-between"><div><h2 class="text-xl font-bold text-white">Inventory</h2><p class="text-gray-300 mt-1">Manage your Inventory and their details here.</p></div><div class="mt-4 md:mt-0"><button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"> Add Equipment </button></div></div><div class="mt-6 flex flex-col sm:flex-row gap-4"><div class="relative flex-grow"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg></div><input type="text" placeholder="Search equipment..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"></div><div><select class="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"><option value>All Departments</option><option value="engineering">Engineering</option><option value="design">Design</option><option value="marketing">Marketing</option><option value="sales">Sales</option></select></div></div></div><div class="overflow-x-auto"><table class="min-w-full space-y-4 divide-y divide-black"><thead class="bg-gray-800 divide-y divide-black"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"> ID </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"> Name </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"> Department </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"> Status </th><th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-200 uppercase tracking-wider"> Actions </th></tr></thead><tbody class="bg-gray-900 divide-y divide-black"><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">1</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Printer</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Accounting</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">2</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Printer</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">IT</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">3</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Smart TV</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">TREASURY</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">4</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">PC</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">HR</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">5</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Printer</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">ASSESSOR</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #fef2f2; color: #e11d48;"> Broken </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">6</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Smart TV</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">MO</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">7</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">PC</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Accounting</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #fef2f2; color: #e11d48;"> Broken </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">8</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">PC</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">IT</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #fef2f2; color: #e11d48;"> Broken </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">9</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Smart TV</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">MO</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><tr class="hover:bg-gray-700 transition-colors duration-150"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-10 w-10 flex-shrink-0"><img alt="User image" class="h-10 w-10 rounded-full object-cover" src="https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"></div><div class="ml-4"><div class="text-sm font-medium text-white">10</div><div class="text-sm text-white"></div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Printer</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-white">Accounting</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style="background-color: #dcfce7; color: #16a34a;"> Active </span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 text-lg">Edit</a><a href="#" class="text-red-600 hover:text-red-900 text-lg">Delete</a></td></tr><!----></tbody></table></div><div class="bg-gray-800 px-4 py-3 border-t border-gray-200 sm:px-6"><div class="flex items-center justify-between flex-col sm:flex-row"><div class="mb-4 sm:mb-0"><p class="text-sm text-white"> Showing <span class="font-medium">1</span> to <span class="font-medium">5</span> of <span class="font-medium">24</span> results </p></div><div><nav aria-label="Pagination" class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px bg-gray-800"><a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span class="sr-only">Previous</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700"> 1 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 2 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 3 </a><span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 8 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 9 </a><a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span class="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></a></nav></div></div></div></div></div></div></app-main-ui></div><div class="flex flex-row w-full"><router-outlet></router-outlet><!----></div><div><app-footer ngh="2"><footer class="bg-gray-800 text-white p-4"><div class="flex justify-center"><p>© 2025 Website. All rights reserved.</p></div></footer></app-footer></div></div></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-7ZFWOYR2.js" type="module"></script>

<script id="ng-state" type="application/json">{"1232168760":{"b":[{"equipment_idNo":1,"equipment_name":"Printer","equipment_department":"Accounting","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"},{"equipment_idNo":2,"equipment_name":"Printer","equipment_department":"IT","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"},{"equipment_idNo":3,"equipment_name":"Smart TV","equipment_department":"TREASURY","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"},{"equipment_idNo":4,"equipment_name":"PC","equipment_department":"HR","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"},{"equipment_idNo":5,"equipment_name":"Printer","equipment_department":"ASSESSOR","equipment_status":"Broken","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"},{"equipment_idNo":6,"equipment_name":"Smart TV","equipment_department":"MO","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"},{"equipment_idNo":7,"equipment_name":"PC","equipment_department":"Accounting","equipment_status":"Broken","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"},{"equipment_idNo":8,"equipment_name":"PC","equipment_department":"IT","equipment_status":"Broken","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/pc-svgrepo-com.png"},{"equipment_idNo":9,"equipment_name":"Smart TV","equipment_department":"MO","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/tv-svgrepo-com.png"},{"equipment_idNo":10,"equipment_name":"Printer","equipment_department":"Accounting","equipment_status":"Active","img":"https://raw.githubusercontent.com/markshoujin/inventory/main/assets/images/printer-svgrepo-com.png"}],"h":{},"s":200,"st":"OK","u":"http://localhost:3600/api/equipment","rt":"json"},"__nghData__":[{"t":{"8":"t0","9":"t1","23":"t2"},"c":{"8":[{"i":"t0","r":1}],"9":[],"23":[]}},{"t":{"46":"t3"},"c":{"46":[{"i":"t3","r":1,"x":10}]}},{},{"c":{"4":[],"9":[]}}]}</script></body></html>`;