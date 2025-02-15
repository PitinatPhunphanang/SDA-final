import React from 'react';
import { useNavigate } from 'react-router-dom';  // นำเข้า useNavigate
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

function Home() {
  const navigate = useNavigate();  // ใช้ navigate สำหรับการเปลี่ยนหน้า

  const handleStart = () => {
    navigate('/mode');  // เมื่อกดปุ่ม เริ่ม จะไปที่ /mode
  };

  const handleExit = () => {
    window.close(); // คำสั่งในการปิดหน้าเว็บ
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
      <div style={{ width: '500px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '15px' }}>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <h2 className="text-light" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', animation: 'fadeIn 2s ease-in-out', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <span style={{ marginBottom: '5px' }}>Da Vinci Mystery</span>
            <span>Game</span>
          </h2>
        </div>

        <div className="mb-4">
          <img src="/888.gif" alt="GIF" style={{ width: '40%', maxWidth: '120px', margin: '2 auto' }} />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <button
            className="btn btn-primary mb-3 py-3"
            style={{ fontSize: '1.7rem', zIndex: 1, width: '60%', borderRadius: '12px', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', animation: 'bounce 1s infinite' }}
            onClick={handleStart}  // เมื่อกดปุ่ม เริ่ม จะเรียกฟังก์ชัน handleStart
          >
            เริ่ม
          </button>

          <button
            className="btn btn-danger mb-3 py-3"
            style={{ fontSize: '1.7rem', zIndex: 1, width: '60%', borderRadius: '12px', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', animation: 'bounce 1s infinite' }}
            onClick={handleExit}
          >
            ออก
          </button>
        </div>
      </div>

      <div
        className="position-absolute"
        style={{
          bottom: '20px',
          left: '20px',
          fontSize: '2.5rem',
          zIndex: 2,
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-gear"></i>
      </div>

      <div
        className="position-absolute"
        style={{
          top: '20px',
          left: '20px',
          fontSize: '2.5rem',
          zIndex: 2,
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <i className="bi bi-book"></i>
      </div>

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
    </div>
  );
}

export default Home;
