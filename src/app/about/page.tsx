// import Image from "next/image";
// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <div className="overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center">
//         <div className="container-custom z-10 relative">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-[900px] mb-8">
//             We create bold designs with flawless execution.
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl">
//             Our agency combines strategic thinking with creative excellence to deliver exceptional results for our clients.
//           </p>
//         </div>
//       </section>

//       {/* Team Introduction */}
//       <section className="py-20 bg-[#f9f9f9]">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-medium mb-8">Our Team</h2>
//               <p className="text-gray-600 mb-6">
//                 Founded in 2018, our creative agency brings together a diverse team of designers, developers, strategists, and visionaries who share a passion for excellence.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 We believe that great design is more than just aesthetics—it's about solving problems, creating meaningful connections, and driving results. Our collaborative approach ensures that every project we undertake benefits from our collective expertise and creativity.
//               </p>
//               <p className="text-gray-600">
//                 From branding and digital experiences to photography and art direction, we approach each project with a fresh perspective and a commitment to exceeding expectations.
//               </p>
//             </div>
//             <div className="relative h-[500px]">
//               <Image
//                 src="https://framerusercontent.com/images/R1iCEos5oqU7pObYc9twN8zZk.png"
//                 alt="Our Team"
//                 fill
//                 className="object-cover rounded-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20">
//         <div className="container-custom">
//           <h2 className="text-2xl md:text-3xl font-medium mb-16">Our Services</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div>
//               <h3 className="text-xl font-medium mb-4">Brand Strategy</h3>
//               <p className="text-gray-600">
//                 We develop comprehensive brand strategies that align with your business goals and resonate with your target audience. Our approach is data-driven, insightful, and focused on creating meaningful differentiation in the market.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-4">Creative Direction</h3>
//               <p className="text-gray-600">
//                 Our creative direction brings your brand to life through cohesive visual storytelling. We craft distinctive aesthetics that capture attention, communicate your values, and create memorable experiences across all touchpoints.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-4">Digital Design</h3>
//               <p className="text-gray-600">
//                 From websites and applications to digital campaigns, we create intuitive, engaging digital experiences that connect with users and drive conversions. Our designs combine aesthetic excellence with functional precision.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-4">Photography</h3>
//               <p className="text-gray-600">
//                 Our photography services capture the essence of your brand through compelling visual narratives. Whether product, lifestyle, or campaign photography, we create images that tell your story and elevate your brand.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-4">Art Direction</h3>
//               <p className="text-gray-600">
//                 We provide comprehensive art direction that ensures visual consistency and excellence across all brand expressions. Our art direction is thoughtful, distinctive, and aligned with your strategic objectives.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-4">Web Development</h3>
//               <p className="text-gray-600">
//                 Our development team creates robust, high-performance digital solutions that bring our designs to life. We focus on creating seamless experiences that work flawlessly across all devices and platforms.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-[#f9f9f9]">
//         <div className="container-custom">
//           <h2 className="text-2xl md:text-3xl font-medium mb-16">Our Process</h2>

//           <div className="space-y-16">
//             <div className="relative">
//               <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
//                 01
//               </div>
//               <div className="md:ml-24 relative z-10">
//                 <h3 className="text-xl font-medium mb-4">Discovery</h3>
//                 <p className="max-w-lg text-gray-600">
//                   We begin by immersing ourselves in your brand, industry, and competitive landscape. This phase is about gaining insights, identifying opportunities, and establishing clear objectives for our collaboration.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
//                 02
//               </div>
//               <div className="md:ml-24 relative z-10">
//                 <h3 className="text-xl font-medium mb-4">Strategy</h3>
//                 <p className="max-w-lg text-gray-600">
//                   Based on our discoveries, we develop a strategic framework that will guide our creative process. We define the key messages, visual direction, and tactical approach that will achieve your goals.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
//                 03
//               </div>
//               <div className="md:ml-24 relative z-10">
//                 <h3 className="text-xl font-medium mb-4">Creation</h3>
//                 <p className="max-w-lg text-gray-600">
//                   This is where ideas take shape. Our creative team works collaboratively to develop concepts and execute them with precision. We iterate, refine, and perfect until we achieve exceptional results.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
//                 04
//               </div>
//               <div className="md:ml-24 relative z-10">
//                 <h3 className="text-xl font-medium mb-4">Implementation</h3>
//                 <p className="max-w-lg text-gray-600">
//                   We bring our creations to life with meticulous attention to detail. Whether launching a website, producing assets, or executing a campaign, we ensure flawless delivery and optimal performance.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
//                 05
//               </div>
//               <div className="md:ml-24 relative z-10">
//                 <h3 className="text-xl font-medium mb-4">Evaluation</h3>
//                 <p className="max-w-lg text-gray-600">
//                   We measure results against objectives, gather insights, and identify opportunities for optimization. This continuous improvement mindset ensures that our work continues to deliver value over time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container-custom">
//           <div className="bg-[#984629] text-white p-8 md:p-16 rounded-sm text-center">
//             <h2 className="text-2xl md:text-4xl font-medium mb-6">Ready to start your project?</h2>
//             <p className="text-xl max-w-2xl mx-auto mb-8">
//               Let's create something exceptional together. Get in touch to discuss how we can help bring your vision to life.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-block py-3 px-8 bg-white text-[#984629] rounded-full hover:bg-opacity-90 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="container-custom z-10 relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-[900px] mb-8">
            Preserving the Past Through Spatial Design & Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Our platform bridges culture and code—digitally conserving heritage artifacts and environments with immersive storytelling and precision scanning.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-8">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                Founded by designers and engineers with a deep respect for history, our studio creates compelling digital experiences that celebrate and safeguard national culture.
              </p>
              <p className="text-gray-600 mb-6">
                We merge spatial documentation, GIS, 3D modeling, and web interactivity to tell stories of tradition, resilience, and evolution—preserving these narratives for generations to come.
              </p>
              <p className="text-gray-600">
                From sacred artifacts to scanned museum halls, every element we publish is meant to inspire curiosity, honor legacy, and redefine what heritage can be in the digital age.
              </p>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://framerusercontent.com/images/R1iCEos5oqU7pObYc9twN8zZk.png"
                alt="Our Team"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-medium mb-16">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-medium mb-4">Spatial Documentation</h3>
              <p className="text-gray-600">
                We scan artifacts, monuments, and interior spaces using photogrammetry, LiDAR, and structure-from-motion to generate accurate, immersive 3D representations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Cultural UX & Web Design</h3>
              <p className="text-gray-600">
                Our interfaces are clean, intuitive, and culturally responsive—allowing users to explore stories spatially through virtual maps, galleries, and timelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3D & AR Experience Design</h3>
              <p className="text-gray-600">
                We enable users to interact with virtual artifacts in the browser—or through augmented reality. Touch, rotate, zoom, and connect with history like never before.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Heritage Strategy</h3>
              <p className="text-gray-600">
                We work with museums, ministries, and curators to design scalable heritage digitization strategies that center accessibility, ownership, and accuracy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Digital Reconstruction</h3>
              <p className="text-gray-600">
                Through archival research and spatial interpolation, we digitally reconstruct damaged or lost monuments and artifacts for both study and display.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Technical Development</h3>
              <p className="text-gray-600">
                Our development team builds fast, scalable React + Three.js applications for delivering heritage content across platforms and devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-medium mb-16">Our Process</h2>

          <div className="space-y-16">
            <div className="relative">
              <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
                01
              </div>
              <div className="md:ml-24 relative z-10">
                <h3 className="text-xl font-medium mb-4">Research & Scanning</h3>
                <p className="max-w-lg text-gray-600">
                  We start by identifying cultural targets, gathering permissions, and performing high-fidelity scans on-site using modern spatial capture techniques.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
                02
              </div>
              <div className="md:ml-24 relative z-10">
                <h3 className="text-xl font-medium mb-4">Modeling & Tagging</h3>
                <p className="max-w-lg text-gray-600">
                  From raw scan data, we clean, optimize, and annotate 3D models with spatial and cultural metadata—ensuring accuracy and historical value.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
                03
              </div>
              <div className="md:ml-24 relative z-10">
                <h3 className="text-xl font-medium mb-4">Digital Experience Design</h3>
                <p className="max-w-lg text-gray-600">
                  We prototype immersive digital environments—from artifact viewers to walkable VR galleries—using tools like Blender, Cinema 4D, and WebGL.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
                04
              </div>
              <div className="md:ml-24 relative z-10">
                <h3 className="text-xl font-medium mb-4">Deployment</h3>
                <p className="max-w-lg text-gray-600">
                  We publish the experience to the web using performant frameworks—complete with shareable links, metadata, and optional download or AR support.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 text-8xl md:text-9xl font-bold opacity-10">
                05
              </div>
              <div className="md:ml-24 relative z-10">
                <h3 className="text-xl font-medium mb-4">Engagement & Preservation</h3>
                <p className="max-w-lg text-gray-600">
                  Post-launch, we monitor engagement, support educators and museums with the tools, and ensure long-term digital preservation protocols are in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-[#984629] text-white p-8 md:p-16 rounded-sm text-center">
            <h2 className="text-2xl md:text-4xl font-medium mb-6">Want to preserve something iconic?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let’s digitize, document, and share it with the world. We’re always excited to partner on meaningful heritage projects.
            </p>
            <Link
              href="/contact"
              className="inline-block py-3 px-8 bg-white text-[#984629] rounded-full hover:bg-opacity-90 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
