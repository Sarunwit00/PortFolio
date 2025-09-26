import React from "react";
import Transcript from "../../assets/Transcript.pdf";


export default function About() {
  const certs = [
    "โครงการ CDG",
  ];

  return (
    <section id="about" className="relative text-white" data-aos="fade-up" data-aos-delay="150">
      {/* HEADER BAR */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-10 mx-auto h-40 w-[92%] rounded-3xl
                        bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400
                        blur-2xl opacity-30 pointer-events-none" />
        <div className="container mx-auto px-5 pt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
                          shadow-[0_0_40px_rgba(255,165,0,0.25)] overflow-hidden">
            <div className="bg-gradient-to-r from-white/10 to-white/0 px-6 md:px-10 py-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Education</h2>
              <p className="text-gray-300 mt-3 max-w-3xl">
                สรุปเส้นทางการศึกษา รายวิชาเด่น ผลงาน และเกียรติบัตร พร้อมไฟล์ Transcript สำหรับดาวน์โหลด
              </p>

              {/* ปุ่ม Transcript (บน) */}
              <div className="mt-6">
                <a
                  href={Transcript}
                  download
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2
                             bg-orange-500 hover:bg-orange-600 transition
                             hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]"
                  aria-label="Download Transcript"
                >
                  {/* ไอคอนกระดาษ PDF แบบ SVG เล็ก ๆ */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-ml-1">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                          stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 14h8M8 11h8M8 17h5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-semibold">Download Transcript</span>
                </a>
              </div>
            </div>

            {/* GRID สูงสุด: การ์ดหลัก + Fact/Stats */}
            <div className="px-6 md:px-10 pb-10 grid lg:grid-cols-3 gap-6">
              {/* การ์ด ป.ตรี (ใหญ่) */}
              <div className="lg:col-span-2 rounded-2xl border border-orange-400/50 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Bachelor’s Degree</h3>
                    <p className="text-yellow-300 font-semibold mt-1">
                      KMUTNB — Computer & Information Technology (CIT/ECT)
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 whitespace-nowrap">
                    2022 – ปัจจุบัน
                  </span>
                </div>

                <p className="text-gray-300 mt-3">
                  โฟกัสงานพัฒนาเว็บแบบ Full-Stack, การออกแบบ UI/UX และนำ AI มาประยุกต์ใช้กับงานจริง
                </p>

                {/* Stats simplified: เก็บเฉพาะข้อมูลสำคัญ (GPA) */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className="text-xl font-extrabold">GPA</div>
                    <div className="text-sm text-gray-300">อัปเดตล่าสุด: 3.XX</div>
                  </div>

                  {/* keep CTA ดูผลงาน (ถ้าต้องการลบด้วย บอกมาได้) */}
                  <a href="#projects"
                     className="rounded-xl bg-orange-500 hover:bg-orange-600 transition
                                hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] p-4 text-center font-semibold">
                    ดูผลงาน
                  </a>
                </div>
              </div>

              {/* การ์ด ม.ปลาย + สรุปย่อ */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">High School</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                      2019 – 2022
                    </span>
                  </div>
                  <p className="text-yellow-300 font-semibold mt-1">โรงเรียนเตรียมวิศวกรรมศาสตร์ ไทย-เยอรมัน </p>
                  <p className="text-gray-300 mt-2">
                    จบสาขาเตรียมวิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์
                  </p>
                </div>

                {/* mini highlight card */}
                <div className="rounded-2xl border border-orange-400/40 bg-gradient-to-br
                                from-white/5 to-white/0 p-6">
                  <h4 className="font-bold mb-2">เสริมทักษะ</h4>
                  <p className="text-gray-300 text-sm">
                    สนใจพิเศษ: React, TailwindCSS, Node.js, MySQL, Git
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div className="container mx-auto px-5 mt-16">
        <h3 className="text-2xl font-bold mb-4">Certificates & Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {certs.map((name) => (
            <div key={name}
                 className="rounded-2xl bg-white/5 border border-white/10 p-4 hover:border-orange-400/50 transition">
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-300 mt-1">ปีที่ได้รับ: 2025</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
