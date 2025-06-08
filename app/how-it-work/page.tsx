import Link from "next/link";
import {
  Download,
  Monitor,
  Smartphone,
  Tv,
  PlayCircle,
  Settings,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/home/navbar";
import Devices from "@/components/home/devices";
import FooterSection from "@/components/home/Footer";
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
    <Head>
  <title>Best IPTV Service - High-Quality Streaming</title>
</Head>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="container mx-auto text-center py-16 px-4">
          <h2 className="text-center font-bold mb-6 text-5xl sm:text-6xl tracking-tighter">
            How It<span className="text-orange-500"> Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with MNTDIGITAL IPTV in just 3 simple steps. Setup takes
            less than 5 minutes!
          </p>
        </section>
        {/* Steps Section */}
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                1. Subscribe & Download
              </h3>
              <p className="text-gray-400 text-sm">
                Choose your plan and receive login credentials via email.
                Download the IPTV app for your device.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Easy Setup</h3>
              <p className="text-gray-400 text-sm">
                Enter your login details in the app. Our step-by-step guide
                makes setup quick and simple.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <PlayCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Start Streaming</h3>
              <p className="text-gray-400 text-sm">
                Enjoy 23,000+ channels, movies, and series in 4K/8K quality on
                any device, anywhere.
              </p>
            </div>
          </div>
        </section>
        {/* Compatible Devices Section */}
        <section className="container mx-auto py-12 px-4">
          <Devices />
        </section>
        {/* Device Setup Guides */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-center font-bold mb-6 text-5xl sm:text-6xl tracking-tighter">
            Device Setup<span className="text-orange-500"> Guides</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Android TV / Fire Stick */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Android TV / Fire Stick
              </h3>
              <ul className="space-y-4">
                {[
                  "Go to Settings > Device Options > Developer Options",
                  "Enable 'Apps from Unknown Sources'",
                  "Download IPTV Smarters from our website",
                  "Install the app and open it",
                  "Enter your login credentials",
                  "Start watching!",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-orange-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart TV (Samsung/LG) */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Smart TV (Samsung/LG)</h3>
              <ul className="space-y-4">
                {[
                  "Open Smart Hub on your TV",
                  "Search for 'Smart IPTV' app",
                  "Install and open the app",
                  "Note the MAC address shown",
                  "Visit smartiptv.net and add your playlist",
                  "Restart the app and enjoy!",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-orange-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* iPhone/iPad */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">iPhone/iPad</h3>
              <ul className="space-y-4">
                {[
                  "Download GSE Smart IPTV from App Store",
                  "Open the app and tap the '>' button",
                  "Select 'Xtream Codes API'",
                  "Enter your login credentials",
                  "Tap 'Add User' and wait for channels to load",
                  "Start streaming!",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-orange-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Windows/Mac Computer */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Windows/Mac Computer</h3>
              <ul className="space-y-4">
                {[
                  "Download VLC Media Player",
                  "Open VLC and go to Media > Open Network Stream",
                  "Enter your M3U playlist URL",
                  "Click 'Play' to start streaming",
                  "Or use our recommended IPTV app",
                  "Enjoy on your computer!",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-orange-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Advanced Features */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-center font-bold mb-6 text-5xl sm:text-6xl tracking-tighter">
            Advanced <span className="text-orange-500">Features</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Electronic Program Guide (EPG)", icon: "tv" },
              { title: "Catch-up TV (7 days)", icon: "rewind" },
              { title: "Parental Controls", icon: "lock" },
              { title: "Multiple Language Support", icon: "globe" },
              { title: "Favorites & Channel Groups", icon: "star" },
              { title: "Recording Capability", icon: "video" },
              { title: "Multi-screen Support", icon: "layout" },
              { title: "Auto-update Channel List", icon: "refresh" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-900 rounded-lg p-4"
              >
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Technical Requirements */}
        <section className="container mx-auto py-12 px-4 bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Internet Speed */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">
                Internet Speed
              </h3>
              <div className="space-y-2 text-sm text-gray-400 text-center">
                <p>HD: 5 Mbps minimum</p>
                <p>FHD: 10 Mbps minimum</p>
                <p>4K: 25 Mbps minimum</p>
              </div>
            </div>

            {/* Device Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">
                Device Requirements
              </h3>
              <div className="space-y-2 text-sm text-gray-400 text-center">
                <p>Android 5.0+</p>
                <p>iOS 12.0+</p>
                <p>Smart TV (2018+)</p>
              </div>
            </div>

            {/* Network */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">Network</h3>
              <div className="space-y-2 text-sm text-gray-400 text-center">
                <p>Stable internet connection</p>
                <p>WiFi or Ethernet</p>
                <p>No VPN required</p>
              </div>
            </div>
          </div>
        </section>
        {/* Need Help Section */}
        <section className="container mx-auto py-12 px-4">
          <div className="bg-orange-500 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Setup?</h2>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Our 24/7 support team is ready to help you get started. We provide
              step-by-step assistance for all devices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Contact Support
              </Link>
              <Link
                href="/trial"
                className="bg-transparent border border-white text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
        <FooterSection/>
      </main>
    </>
  );
}
