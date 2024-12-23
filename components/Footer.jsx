'use client';
import React from 'react'
import { Linkedin, Twitter, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <div>
      <footer className="bg-black opacity-85 dark:bg-white text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-24">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                  {t('brand')}
                </span>
              </a>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                {t('pages.title')}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    {t('pages.links.home')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    {t('pages.links.about')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/projects" className="hover:underline">
                    {t('pages.links.projects')}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    {t('pages.links.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                {t('services.title')}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/services/construction" className="hover:underline">
                    {t('services.links.construction')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/services/mep" className="hover:underline">
                    {t('services.links.mep')}
                  </a>
                </li>
                <li>
                  <a href="/services/supplychain" className="hover:underline">
                    {t('services.links.supplychain')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                {t('social.title')}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/company/future-concept-co-sa/?viewAsMember=true" className="hover:underline flex items-center gap-2">
                    <Linkedin size={20} /> {t('social.links.linkedin')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://x.com/FutureConceptSA" className="hover:underline flex items-center gap-2">
                    <Twitter size={20} /> {t('social.links.twitter')}
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/1234567890" className="hover:underline flex items-center gap-2">
                    <Phone size={20} /> {t('social.links.whatsapp')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {t('copyright')}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer