import React from "react";
import { useTranslations } from "next-intl";
import Divider from "../Divider";

const VisitUS = () => {
  const t = useTranslations("ContactPage.Map");
  return (
    <div className="container mx-auto px-4">
      <Divider style="" />
      <div className=" py-32">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
{t('title')}        </h2>
        <div className="max-w-4xl mx-auto">
          <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28968.854967393952!2d46.65972469380171!3d24.826018591331845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5a67d00ee53%3A0x9b3d9ea836574d19!2sFuture%20Concept%20Company!5e0!3m2!1sen!2sae!4v1734981577907!5m2!1sen!2sae"            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            zoom="30"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg  shadow-lg"
          ></iframe>
          <p className="text-center mt-4 text-lg">
          {t('location')}              </p>
        </div>
      </div>
    </div>
  );
};

export default VisitUS;
