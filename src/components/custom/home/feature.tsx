import React from 'react';
import {
  FileText,
  Globe,
  Palette,
  BarChart2,
  Search,
  ShieldCheck,
} from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Showcase Your Work Seamlessly
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Everything you need to create beautiful, professional portfolios — without coding.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          
          <div className="md:p-8 lg:p-14">
            <FileText className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">No-Code Case Studies</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Build detailed case studies using rich content blocks, timelines, media galleries, and project outcomes.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <Globe className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Custom Domains</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Personalize your portfolio with your own custom URL and unique branding options.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <Palette className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Theme Customization</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Choose from multiple pre-built themes and preview changes in real-time as you design.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <BarChart2 className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Analytics Dashboard</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Track visitor engagement, case study views, and understand which projects attract the most interest.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <Search className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">SEO Optimized</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Boost discoverability with dynamic meta tags, shareable links, and optimized search indexing.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <ShieldCheck className="mx-auto w-11 h-11 text-indigo-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Secure Authentication</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Sign up or log in securely using social providers with built-in authentication and account management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
