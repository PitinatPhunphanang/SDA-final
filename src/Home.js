import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';  // เรียกใช้ไอคอนจาก Bootstrap Icons

function Home() {
  const handleExit = () => {
    window.close(); // คำสั่งในการปิดหน้าเว็บ
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url(/777.gif)',  // ใช้พื้นหลัง GIF จาก public
        backgroundSize: 'cover',          // ทำให้ GIF ปรับขนาดให้พอดีกับหน้าจอ
        backgroundPosition: 'center',     // จัดตำแหน่งให้ GIF อยู่ตรงกลาง
        backgroundRepeat: 'no-repeat',    // ไม่ให้ GIF ซ้ำ
        position: 'relative',             // ทำให้ปุ่มสามารถซ้อนทับกับพื้นหลังได้
        height: '100vh',                  // ทำให้พื้นหลังเต็มหน้าจอ
      }}
    >
      {/* div หลักที่ใช้จัดตำแหน่งปุ่ม */}
      <div style={{ width: '500px', textAlign: 'center' }}>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <h2 className="text-primary" style={{ fontSize: '2rem' }}>davinci mystery game</h2>
        </div>

        <div className="mb-4">
          <img src="/888.gif" alt="GIF" style={{ width: '30%', maxWidth: '100px', margin: '2 auto' }} />
        </div>

        {/* ใช้ Flexbox เพื่อจัดระเบียบปุ่มในแนวตั้ง */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button 
            className="btn btn-primary mb-3 py-3"  
            style={{ fontSize: '1.7rem', zIndex: 1, width: '50%', borderRadius: '10px' }}
          >
            เริ่ม
          </button>

          <button 
            className="btn btn-secondary mb-3 py-3" 
            style={{ fontSize: '1.7rem', zIndex: 1, width: '50%', borderRadius: '10px' }}
            onClick={handleExit} // เพิ่มฟังก์ชันเมื่อกดปุ่ม
          >
            ออก
          </button>
        </div>
      </div>

      {/* ปุ่มฟันเฟืองด้านซ้ายล่าง */}
      <div 
        className="position-absolute" 
        style={{
          bottom: '20px', 
          left: '20px', 
          fontSize: '2rem', 
          zIndex: 2, 
          color: 'white'
        }}
      >
        <i className="bi bi-gear"></i> {/* ใช้ไอคอนฟันเฟืองจาก Bootstrap Icons */}
      </div>

      {/* ปุ่มสมุด (คู่มือ) ด้านซ้ายบน */}
      <div 
        className="position-absolute" 
        style={{
          top: '20px', 
          left: '20px', 
          fontSize: '2rem', 
          zIndex: 2, 
          color: 'white'
        }}
      >
        <i className="bi bi-book"></i> {/* ใช้ไอคอนสมุดจาก Bootstrap Icons */}
      </div>

      {/* ไอคอนโปรไฟล์ด้านขวาบน */}
      <div 
        className="position-absolute" 
        style={{
          top: '30px', 
          right: '30px', 
          fontSize: '2rem', 
          zIndex: 2, 
          color: 'white'
        }}
      >
        <i className="bi bi-person-circle"></i> {/* ใช้ไอคอนโปรไฟล์จาก Bootstrap Icons */}
      </div>
    </div>
  );
}

export default Home;
