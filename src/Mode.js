import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ModeSelection() {
  const navigate = useNavigate();  // ใช้ navigate สำหรับการเปลี่ยนหน้า
  const [time, setTime] = useState("");  // ใช้เพื่อเก็บเวลาที่กรอก
  const [points, setPoints] = useState(0);  // เพิ่มจำนวนคะแนน (ตัวอย่างเริ่มต้นที่ 0)

  const handleGoHome = () => {
    navigate('/');  // เมื่อกดไอคอนบ้าน จะกลับไปที่หน้า Home
  };

  const handleMatching = () => {
    navigate('/matching');  // เมื่อกด 1 v 1 จะไปหน้า Matching
  };

  const handleTimeInput = () => {
    const inputTime = prompt("pop up ใส่เวลา");
    if (inputTime !== null) {
      setTime(inputTime);
    }
  };

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
      <div 
        style={{
          width: '500px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        
        <h2 className="text-dark mb-4">โหมด</h2>

        <div className="d-flex mb-3" style={{ gap: '10px', width: '100%' }}>
          {/* ปุ่มเล่นคนเดียว */}
          <button className="btn btn-secondary py-3" style={{ fontSize: '1.5rem', width: '100%', borderRadius: '10px' }}>
            เล่นคนเดียว
          </button>

          {/* ปุ่มนาฬิกา */}
          <button 
            className="btn btn-warning py-3 d-flex justify-content-center align-items-center" 
            style={{ fontSize: '1.5rem', width: '20%', borderRadius: '10px' }}
            onClick={handleTimeInput}
          >
            <i className="bi bi-clock me-2"></i>
            {time && `: ${time} นาที`}
          </button>
        </div>
        {/* ปุ่มเล่น 1 v 1 */}
        <div className="d-flex justify-content-center mb-3" style={{ width: '100%' }}>
          <button className="btn btn-success py-3" style={{ fontSize: '1.5rem', width: '100%', borderRadius: '10px' }} onClick={handleMatching}>
            1 v 1
          </button>
        </div>

        {/* ปุ่มสร้างห้อง */}
        <div 
          className="position-relative"
          style={{ width: 'auto', marginTop: '5px' }}
        >
          <button 
            className="btn btn-dark py-2 d-flex justify-content-center align-items-center" 
            style={{ fontSize: '0.875rem', height: '45px', width: '170px', borderRadius: '0px' }}
          >
            สร้างห้อง
          </button>

          {/* ไอคอนประวัติการเล่น (ไม่ต้องมีปุ่มแล้ว ใช้แค่ไอคอน) */}
          <i 
            className="bi bi-clock-history position-absolute" 
            style={{ 
              fontSize: '2rem', 
              color: 'white', 
              left: 'calc(100% + 10px)', 
              top: '50%', 
              transform: 'translateY(-50%)' 
            }}
          ></i>
        </div>
      </div>

      {/* ไอคอนกลับหน้าแรก */}
      <div 
        className="position-absolute" 
        style={{
          bottom: '20px', 
          left: '20px', 
          fontSize: '2.5rem', 
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={handleGoHome}  // เมื่อคลิกไอคอนบ้านจะกลับไปหน้า Home
      >
        <i className="bi bi-house"></i> 
      </div>

      {/* ไอคอนโปรไฟล์ */}
      <div 
        className="position-absolute" 
        style={{
          top: '20px',
          right: '20px',
          fontSize: '2.5rem',
          zIndex: 2,
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-person-circle"></i>
      </div>

      {/* ไอคอนซื้อของ */}
      <div 
        className="position-absolute" 
        style={{
          top: '20px', 
          left: '20px', 
          fontSize: '2.5rem', 
          color: 'white', 
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-shop"></i>
        <span style={{
          marginLeft: '10px',
          fontSize: '1.7rem',
          color: 'white',
        }}>
          ร้านค้า
        </span>
      </div>

      {/* แสดงคะแนนใต้ไอคอนซื้อของ */}
      <div
        className="position-absolute"
        style={{
          top: '80px',  // เพิ่มช่องว่างให้มากขึ้นจากไอคอน
          left: '20px', 
          fontSize: '1rem',  // ปรับขนาดฟอนต์ให้เล็กลง
          color: 'white',
        }}
      >
        <span>คะแนน: {points}</span>
      </div>

      {/* ไอคอน leaderboard */}
      <div 
        className="position-absolute" 
        style={{
          bottom: '20px', 
          right: '20px', 
          fontSize: '2.5rem', 
          color: 'white', 
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-trophy"></i>
      </div>
    </div>
  );
}

export default ModeSelection;
