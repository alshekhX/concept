import '@/assets/styles/globals.css'
import Navbar from "@/components/Navbar.jsx";
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Concept - Construction, MEP, and Supply Chain Solutions in Saudi Arabia',
    template: '%s | Concept'
  },
  description: 'Concept delivers comprehensive construction, MEP engineering, and supply chain services across the Kingdom of Saudi Arabia, driving innovation in infrastructure and industrial solutions.',
  applicationName: 'Concept Services Website',
  authors: [{ name: 'Concept Team', url: 'https://www.conceptfuture.com' }],
  generator: 'Next.js',
  keywords: [
    'construction services Saudi Arabia',
    'MEP engineering KSA',
    'mechanical electrical plumbing',
    'supply chain management',
    'industrial services',
    'engineering solutions',
    'Saudi construction',
    'infrastructure development'
  ],
  referrer: 'origin',
  
  // // Open Graph Metadata
  // openGraph: {
  //   title: 'Concept - Integrated Engineering and Construction Solutions in KSA',
  //   description: 'Leading provider of construction, MEP, and supply chain services in the Kingdom of Saudi Arabia',
  //   url: 'https://www.conceptksa.com',
  //   siteName: 'Concept Services',
  //   images: [
  //     {
  //       url: '/images/og-image.jpg', // Company project or team image
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: 'en_SA',
  //   type: 'website',
  // },

  // // Twitter Card Metadata
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Concept - Engineering Excellence in Saudi Arabia',
  //   description: 'Comprehensive construction and engineering solutions tailored for the Saudi market',
  //   images: ['/images/twitter-image.jpg'],
  // },

  // Icons Configuration
  icons: {
    icon: [
      { url: 'images/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      }
    ]
  },

  // // Verification for web services
  // verification: {
  //   google: 'your-google-site-verification-code',
  // },


}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
<Navbar/>
       <main>{children}</main> 
       <Footer/>

      </body>
    </html>
  );
}
