import React from "react";
import Transcript from "../../assets/Transcript.pdf";
import CVV from "../../assets/CVV.png"; // ใช้เป็นพรีวิวตัวอย่าง

export default function About() {
  // ----- DATA -----
  const certs = [
    {
      name: "โครงการ CDG",
      year: "2025",
      file: CVV,     // ใส่ไฟล์ PDF จริงของใบนี้
      preview: CVV,         // รูปปก/พรีวิว (ถ้าไม่มีจะใช้ SVG แทน)
      desc: "โครงการพัฒนาทักษะการเขียนโปรแกรมและระบบงานจริง"
    },
    // {
    //   name: "React Developer Online Course",
    //   year: "2024",
    //   file: SomePDF,
    //   preview: SomeImg,
    //   desc: "เรียนเชิงลึกด้าน React + State Management + Performance"
    // },
  ];

  // ----- UI -----
  return (
    <section id="about" className="relative text-white" data-aos="fade-up" data-aos-delay="150">
      {/* HEADER */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-10 mx-auto h-40 w-[92%] rounded-3xl bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 blur-2xl opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 pt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(255,165,0,0.25)] overflow-hidden">
            <div className="bg-gradient-to-r from-white/10 to-white/0 px-6 md:px-10 py-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Education</h2>
              <p className="text-gray-300 mt-3 max-w-3xl">
                ประวัติการศึกษา รายวิชาเด่น ผลงาน และเกียรติบัตร — พร้อมไฟล์ Transcript สำหรับดาวน์โหลด
              </p>

              {/* ปุ่ม Transcript (บน) */}
              <div className="mt-6">
                <a
                  href={Transcript}
                  download
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2 bg-orange-500 hover:bg-orange-600 transition hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]"
                  aria-label="Download Transcript"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-ml-1">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 14h8M8 11h8M8 17h5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-semibold">Download Transcript</span>
                </a>
              </div>
            </div>

            {/* สรุปการศึกษา */}
            <div className="px-6 md:px-10 pb-10 grid lg:grid-cols-3 gap-6">
              {/* ปริญญาตรี */}
              <div className="lg:col-span-2 rounded-2xl border border-orange-400/50 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Bachelor’s Degree</h3>
                    <p className="text-yellow-300 font-semibold mt-1">
                      KMUTNB
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 whitespace-nowrap">
                    2022 – ปัจจุบัน
                  </span>
                </div>
                <p className="text-gray-300 mt-3">
                  คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม
                  สาขาวิชาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์แขนงคอมพิวเตอร์
                  หลักสูตรปริญญาตรี 4 ปี
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className="text-xl font-extrabold">GPA</div>
                    <div className="text-sm text-gray-300">อัปเดตล่าสุด: 2.67</div>
                  </div>
                  <a href="#projects" className="rounded-xl bg-orange-500 hover:bg-orange-600 transition hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] p-4 text-center font-semibold">
                    ดูผลงาน
                  </a>
                </div>
              </div>

              {/* มัธยมปลาย */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">High School</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                      2019 – 2022
                    </span>
                  </div>
                  <p className="text-yellow-300 font-semibold mt-1">โรงเรียนเตรียมวิศวกรรมศาสตร์ ไทย-เยอรมัน</p>
                  <p className="text-gray-300 mt-2">วุฒิ:ปวช</p>
                  <p className="text-gray-300 mt-2">สาขาไฟฟ้า/อิเล็กทรอนิกส์</p>
                </div>

                <div className="rounded-2xl border border-orange-400/40 bg-gradient-to-br from-white/5 to-white/0 p-6">
                  <h4 className="font-bold mb-2">เสริมทักษะ</h4>
                  <p className="text-gray-300 text-sm">
                    React • TailwindCSS • Node.js • MySQL • Git
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* CERTIFICATES - UI ใหม่ */}
      <div className="container mx-auto px-5 mt-16">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Certificates & Achievements</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition
                         hover:border-orange-400/60 hover:shadow-[0_0_30px_rgba(255,165,0,0.25)]"
            >
              {/* แถบปี (chip) */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/10 border border-white/10">
                  {c.year}
                </span>
              </div>

              {/* พรีวิว */}
              <div className="relative h-36 w-full bg-[#0f213f]">
                {c.preview ? (
                  <img src={c.preview} alt={c.name} className="h-full w-full object-cover object-center opacity-90 group-hover:opacity-100 transition" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center opacity-80">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 14h8M8 11h8M8 17h5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* เนื้อหา */}
              <div className="p-4">
                <h4 className="font-semibold leading-tight">{c.name}</h4>
                {c.desc && <p className="text-xs text-gray-300 mt-1 line-clamp-2">{c.desc}</p>}

                {/* ปุ่ม */}
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-1.5 text-sm hover:border-yellow-300 hover:text-yellow-300 transition"
                  >
                    View
                  </a>
                  <a
                    href={c.file}
                    download
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-orange-500 px-3 py-1.5 text-sm hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ระยะหายใจล่าง */}
      <div className="h-16" />
    </section>
  );
}
