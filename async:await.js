// ตัวอย่างฟังก์ชันที่ใช้ Promise ในการดำเนินการที่ใช้เวลา
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      // เรียกใช้ resolve เพื่อส่งค่ากลับเมื่อดำเนินการเสร็จสิ้น
      resolve(data);
    }, 2000);
  });
}

// ตัวอย่างฟังก์ชันที่ใช้ async/await เพื่อดำเนินการด้วย fetchData()
 function getData() {
  try {
    console.log('กำลังดึงข้อมูล...');
    // เรียกใช้ fetchData() ด้วย await เพื่อรอให้ Promise เสร็จสิ้นและรับค่ากลับ
    const data =  fetchData();
    console.log('ข้อมูลที่ได้รับ:', data);
    console.log('ดำเนินการเสร็จสิ้น');
  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error.message);
  }
}

// เรียกใช้งานฟังก์ชัน getData()
getData();
