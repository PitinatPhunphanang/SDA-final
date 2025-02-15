import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ModeSelection() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url(/777.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100vh',
      }}
    >
      <div style={{ width: '500px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        
        {/* ชื่อหน้า */}
        <h2 className="text-dark mb-4">เลือกโหมด</h2>
        
        {/* ปุ่มเลือกโหมด */}
        <button className="btn btn-primary mb-3 py-3" style={{ fontSize: '1.5rem', width: '80%', borderRadius: '10px' }}>
          โหมดหลัก
        </button>
        <button className="btn btn-secondary mb-3 py-3 d-flex justify-content-center align-items-center" style={{ fontSize: '1.5rem', width: '80%', borderRadius: '10px' }}>
          <span className="me-2">เล่นคนเดียว</span>
          <i className="bi bi-clock"></i> {/* ไอคอนกำหนดเวลา */}
        </button>
        <button className="btn btn-success mb-3 py-3" style={{ fontSize: '1.5rem', width: '80%', borderRadius: '10px' }}>
          1 v 1
        </button>
        <button className="btn btn-dark mb-3 py-3 d-flex justify-content-center align-items-center" style={{ fontSize: '1.5rem', width: '80%', borderRadius: '10px' }}>
          <span className="me-2">สร้างห้อง</span>
          <i className="bi bi-clock"></i> {/* ไอคอนกำหนดเวลา */}
        </button>
      </div>
      
      {/* ไอคอนกลับหน้าแรก */}
      <div 
        className="position-absolute" 
        style={{
          bottom: '20px', 
          left: '20px', 
          fontSize: '2rem', 
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-house"></i> {/* ไอคอนกลับหน้าแรก */}
      </div>
      
      {/* ไอคอนโปรไฟล์ */}
      <div 
        className="position-absolute" 
        style={{
            top: '30px',
            right: '30px',
            fontSize: '2.5rem',
            zIndex: 2,
            color: 'white',
            cursor: 'pointer'
        }}
      >
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}

export default ModeSelection;
