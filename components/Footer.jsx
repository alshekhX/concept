import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer class="bg-black opacity-85 dark:bg-white text-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-24">
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div class="mb-6 md:mb-0">
                  <a href="/" class="flex items-center">
                      <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Concept</span>
                  </a>
              </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Pages</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="/home" class="hover:underline">Home</a>
                          </li>
                          <li class="mb-4">
                              <a href="/about" class="hover:underline">About</a>
                          </li>
                          <li class="mb-4">
                              <a href="/projects" class="hover:underline">Projects</a>
                          </li>
                          <li>
                              <a href="/contact" class="hover:underline">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Services</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="/services/construction" class="hover:underline">Construction</a>
                          </li>
                          <li class="mb-4">
                              <a href="/services/mep" class="hover:underline">MEP</a>
                          </li>
                          <li>
                              <a href="/services/supply-chain" class="hover:underline">Supply Chain</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Legal</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="/terms" class="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Concept</a>. All Rights Reserved.
              </span>
            
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer